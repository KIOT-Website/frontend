# AWS EC2 Deployment Guide for Vite React Frontend (PM2 & Nginx)

This guide outlines the step-by-step instructions to configure your AWS EC2 instance, PM2 static server, Nginx, and DNS to deploy and host the main Vite React Frontend website.

The deployment uses GitHub Actions to pull the latest code directly on the EC2 instance, install dependencies, compile the application into static files (`dist/`), and host it on port `3001` using **PM2**.

---

## Step 1: Prepare the Host Directory on EC2

Ensure `/var/www/kiot-frontend` exists and is owned by the `ubuntu` user so the deployment pipeline can write and run build commands inside it:

```bash
# Connect to your EC2
ssh -i "your-key.pem" ubuntu@<your-ec2-ip>

# Create target directory if not exists
sudo mkdir -p /var/www/kiot-frontend

# Change ownership to the deployment user
sudo chown -R ubuntu:ubuntu /var/www/kiot-frontend
```

---

## Step 2: Configure a Swap File (Recommended for small EC2 instances)
Vite builds can consume significant memory (RAM). If your EC2 instance is on the AWS free tier (e.g., `t2.micro` or `t3.micro` with 1GB RAM) running multiple backend/admin/frontend services, the build might fail due to **Out-Of-Memory (OOM)**. 

To prevent this, configure a 2GB swap file on the EC2 server:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## Step 3: Install Node.js, npm, and PM2 on EC2

Ensure Node.js and PM2 are installed globally:
```bash
sudo apt update
sudo apt install -y nodejs npm
sudo npm install -g pm2
```

---

## Step 4: Configure Nginx as a Reverse Proxy to PM2 (Port 3001)

Because PM2 will serve the frontend panel on Port 3001 internally, Nginx must be configured to forward incoming traffic from your main domains (port 80/443) to port 3001.

1. **Create the Nginx configuration file**:
   ```bash
   sudo nano /etc/nginx/sites-available/kiot-frontend
   ```

2. **Add the following configuration** (replace `kiot.ac.in` and `www.kiot.ac.in` with your domains):
   ```nginx
   server {
       listen 80;
       server_name kiot.ac.in www.kiot.ac.in;

       location / {
           proxy_pass http://127.0.0.1:3001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. **Enable Nginx configuration and reload**:
   ```bash
   # Link the config to enabled sites
   sudo ln -s /etc/nginx/sites-available/kiot-frontend /etc/nginx/sites-enabled/
   
   # Test config and reload
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Step 5: Configure DNS and SSL (HTTPS) with Let's Encrypt

1. **DNS Setup**:
   Go to your DNS provider (e.g., Cloudflare, Route 53, GoDaddy) and add **A Records**:
   - **Name**: `@` (or `kiot.ac.in`) pointing to your EC2 Public IP.
   - **Name**: `www` (or `www.kiot.ac.in`) pointing to your EC2 Public IP.

2. **Generate SSL Certificate**:
   On your EC2 instance, request and install the SSL certificate:
   ```bash
   sudo certbot --nginx -d kiot.ac.in -d www.kiot.ac.in
   ```
   - Agree to the terms and enter your email.
   - When asked to redirect HTTP traffic to HTTPS, select **Redirect** (option `2`).

3. **Resolve Cloudflare Redirect Loop (If applicable)**:
   If your DNS is managed by Cloudflare and you get a redirect loop, edit `/etc/nginx/sites-available/kiot-frontend` on the EC2 server and change Nginx to listen on Port 80 directly alongside Port 443 (similar to the backend configuration), then restart Nginx.

---

## Step 6: Add Repository Secrets on GitHub

Since this repository is in the same organization, you can reuse the same GitHub Environment secrets:
1. Go to your Frontend repository page on GitHub.
2. Click **Settings > Secrets and variables > Actions**.
3. Re-use or add the secrets in the **`EC2_HOST`** environment:
   - `EC2_HOST`
   - `EC2_USERNAME`
   - `EC2_SSH_KEY`

When you push or merge your code to the `production` branch, the pipeline will build the project and deploy it directly via PM2 on the EC2 server.
