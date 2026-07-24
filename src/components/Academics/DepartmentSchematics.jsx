import React from 'react';

export const getDepartmentSchematic = (courseId) => {
  switch (courseId) {
    case 'be-mechanical':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Gear 1 (Left - Large) */}
          <circle cx="100" cy="80" r="30" />
          <circle cx="100" cy="80" r="8" />
          <path d="M100 45 L100 50 M100 110 L100 115 M65 80 L70 80 M130 80 L135 80 M75 55 L79 59 M125 105 L121 101 M125 55 L121 59 M75 105 L79 101" strokeWidth="2" />
          <path d="M100 80 A 40,40 0 0, 1 100,120" strokeDasharray="3,3" className="opacity-30" />
          <text x="75" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Gear ratio 2:1</text>

          {/* Gear 2 (Medium - Engaged) */}
          <circle cx="152" cy="80" r="22" />
          <circle cx="152" cy="80" r="5" />
          <path d="M152 53 L152 58 M152 102 L152 107 M130 80 L135 80 M174 80 L179 80 M136 64 L140 68 M168 96 L164 92 M168 64 L164 68 M136 96 L140 92" strokeWidth="2" />
          <path d="M90,80 A30,30 0 0,1 110,110" strokeWidth="1" />
          <path d="M111,105 L113,112 L106,113" fill="currentColor" />
          <text x="108" y="118" className="text-white/40 text-[9px]" fill="currentColor">ω</text>

          {/* Piston Cylinder Assembly */}
          <rect x="220" y="55" width="50" height="60" rx="2" strokeDasharray="3,3" className="opacity-40" />
          <rect x="225" y="65" width="40" height="20" rx="1" />
          <line x1="230" y1="72" x2="260" y2="72" />
          <line x1="230" y1="78" x2="260" y2="78" />
          <line x1="245" y1="85" x2="275" y2="115" strokeWidth="1.5" />
          <circle cx="245" cy="85" r="3.5" fill="currentColor" />
          <circle cx="275" cy="85" r="10" />
          <circle cx="275" cy="85" r="3" fill="currentColor" />
          <line x1="275" y1="85" x2="275" y2="115" className="opacity-40" />
          <text x="220" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Piston Stroke</text>

          {/* Drafting Blueprint dimensions */}
          <rect x="360" y="50" width="110" height="70" rx="3" strokeDasharray="1,2" className="opacity-30" />
          <line x1="360" y1="40" x2="360" y2="130" strokeDasharray="3,3" className="opacity-40" />
          <line x1="470" y1="40" x2="470" y2="130" strokeDasharray="3,3" className="opacity-40" />
          <line x1="365" y1="125" x2="465" y2="125" />
          <polygon points="365,125 372,122 372,128" fill="currentColor" />
          <polygon points="465,125 458,122 458,128" fill="currentColor" />
          <text x="400" y="120" className="text-white/50 text-[10px] font-bold" fill="currentColor">L = 120mm</text>
          <line x1="350" y1="85" x2="480" y2="85" strokeDasharray="4,4" className="opacity-20" />
          <circle cx="415" cy="85" r="15" />
          <line x1="415" y1="65" x2="415" y2="105" />
          <line x1="395" y1="85" x2="435" y2="85" />
          <text x="425" y="75" className="text-white/40 text-[8px]" fill="currentColor">Ø 30 H7</text>

          {/* P-V Thermodynamic Diagram */}
          <rect x="520" y="50" width="110" height="70" rx="2" />
          <line x1="535" y1="60" x2="535" y2="110" />
          <line x1="535" y1="110" x2="615" y2="110" />
          <path d="M545,70 Q565,65 595,85 T605,100 T585,105 T545,70" strokeWidth="1.2" />
          <text x="523" y="65" className="text-white/40 text-[8px]" fill="currentColor">P</text>
          <text x="618" y="118" className="text-white/40 text-[8px]" fill="currentColor">V</text>
          <text x="555" y="80" className="text-white/40 text-[8px]" fill="currentColor">OTTO CYCLE</text>

          {/* Torque Gauge */}
          <rect x="670" y="50" width="110" height="70" rx="3" />
          <path d="M685,100 A 30,30 0 1, 1 765,100" strokeWidth="2" strokeDasharray="2,2" className="opacity-40" />
          <path d="M685,100 A 30,30 0 0, 1 745,70" strokeWidth="2.5" />
          <line x1="725" y1="100" x2="745" y2="65" strokeWidth="2" />
          <circle cx="725" cy="100" r="4" fill="currentColor" />
          <text x="705" y="115" className="text-white/40 text-[9px] font-bold" fill="currentColor">TORQUE (Nm)</text>
        </svg>
      );
    case 'be-cse':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Binary Tree */}
          <circle cx="90" cy="55" r="9" />
          <circle cx="65" cy="85" r="9" />
          <circle cx="115" cy="85" r="9" />
          <circle cx="45" cy="115" r="9" />
          <circle cx="85" cy="115" r="9" />
          <line x1="83" y1="62" x2="72" y2="78" />
          <line x1="97" y1="62" x2="108" y2="78" />
          <line x1="58" y1="92" x2="52" y2="108" />
          <line x1="72" y1="92" x2="78" y2="108" />
          <text x="87" y="58" className="text-white/50 text-[7px]" fill="currentColor">8</text>
          <text x="62" y="88" className="text-white/50 text-[7px]" fill="currentColor">3</text>
          <text x="111" y="88" className="text-white/50 text-[7px]" fill="currentColor">10</text>
          <text x="47" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">BST Search</text>

          {/* Code Editor Window */}
          <rect x="180" y="45" width="150" height="80" rx="4" />
          <line x1="180" y1="60" x2="330" y2="60" />
          <circle cx="190" cy="52" r="2" fill="currentColor" />
          <circle cx="197" cy="52" r="2" fill="currentColor" />
          <circle cx="204" cy="52" r="2" fill="currentColor" />
          <text x="215" y="54" className="text-white/30 text-[7px]" fill="currentColor">index.js</text>
          <text x="190" y="75" className="text-white/40 text-[8px] font-mono" fill="currentColor">1  function dfs(u) {"{"}</text>
          <text x="190" y="87" className="text-white/40 text-[8px] font-mono" fill="currentColor">2    vis[u] = true;</text>
          <text x="190" y="99" className="text-white/50 text-[8px] font-mono" fill="currentColor">3    for(let v of adj[u])</text>
          <text x="190" y="111" className="text-white/40 text-[8px] font-mono" fill="currentColor">4      if(!vis[v]) dfs(v);</text>
          <text x="190" y="120" className="text-white/40 text-[8px] font-mono" fill="currentColor">5  {"}"}</text>

          {/* Database Stack */}
          <ellipse cx="390" cy="60" rx="20" ry="6" />
          <path d="M370,60 L370,80 A20,6 0 0,0 410,80 L410,60" />
          <path d="M370,80 L370,100 A20,6 0 0,0 410,100 L410,80" />
          <path d="M370,100 L370,120 A20,6 0 0,0 410,120 L410,100" />
          <line x1="390" y1="80" x2="430" y2="80" className="opacity-30" />
          <text x="375" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">SQL DB</text>

          {/* Logic Circuits */}
          <path d="M470,60 L490,60 A15,15 0 0,1 490,90 L470,90 Z" />
          <line x1="455" y1="67" x2="470" y2="67" />
          <line x1="455" y1="83" x2="470" y2="83" />
          <line x1="505" y1="75" x2="525" y2="75" />
          <path d="M535,65 Q540,75 535,85" />
          <path d="M538,65 Q543,75 538,85 L545,85 A10,10 0 0,0 555,75 A10,10 0 0,0 545,65 Z" />
          <line x1="525" y1="70" x2="538" y2="70" />
          <line x1="525" y1="80" x2="538" y2="80" />
          <line x1="555" y1="75" x2="575" y2="75" />
          <text x="475" y="105" className="text-white/40 text-[8px]" fill="currentColor">AND</text>
          <text x="540" y="105" className="text-white/40 text-[8px]" fill="currentColor">XOR</text>

          {/* Network Nodes */}
          <rect x="620" y="45" width="150" height="80" rx="3" />
          <text x="635" y="65" className="text-white/30 text-[8px] font-mono" fill="currentColor">01101001 01110100</text>
          <text x="635" y="77" className="text-white/50 text-[8px] font-mono" fill="currentColor">11001010 11110001</text>
          <text x="635" y="89" className="text-white/30 text-[8px] font-mono" fill="currentColor">00110101 10101010</text>
          <circle cx="730" cy="70" r="4" fill="currentColor" />
          <circle cx="755" cy="85" r="4" fill="currentColor" />
          <circle cx="720" cy="100" r="4" fill="currentColor" />
          <line x1="730" y1="70" x2="755" y2="85" />
          <line x1="755" y1="85" x2="720" y2="100" />
          <line x1="730" y1="70" x2="720" y2="100" strokeDasharray="2,2" />
          <text x="685" y="115" className="text-white/40 text-[8px]" fill="currentColor">TCP/IP</text>
        </svg>
      );
    case 'be-ece':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Resistor R1 */}
          <line x1="40" y1="80" x2="70" y2="80" />
          <path d="M70,80 L73,72 L79,88 L85,72 L91,88 L97,72 L103,88 L106,80" />
          <line x1="106" y1="80" x2="120" y2="80" />
          <text x="75" y="60" className="text-white/40 text-[9px] italic" fill="currentColor">R1 (10k)</text>

          {/* Op-Amp Triangle & Inputs */}
          <polygon points="120,40 120,120 180,80" />
          <line x1="80" y1="60" x2="120" y2="60" />
          <line x1="80" y1="100" x2="120" y2="100" />
          <text x="125" y="65" className="text-white/40 text-[10px] font-bold" fill="currentColor">-</text>
          <text x="125" y="105" className="text-white/40 text-[10px] font-bold" fill="currentColor">+</text>
          <line x1="180" y1="80" x2="220" y2="80" />
          <text x="135" y="75" className="text-white/40 text-[8px]" fill="currentColor">LM741</text>

          {/* Capacitor C1 */}
          <line x1="220" y1="80" x2="245" y2="80" />
          <line x1="245" y1="70" x2="245" y2="90" strokeWidth="1.5" />
          <line x1="250" y1="70" x2="250" y2="90" strokeWidth="1.5" />
          <line x1="250" y1="80" x2="280" y2="80" />
          <text x="238" y="60" className="text-white/40 text-[9px] italic" fill="currentColor">C1 (1uF)</text>

          {/* Transistor Q1 */}
          <line x1="280" y1="100" x2="310" y2="100" />
          <line x1="310" y1="80" x2="310" y2="120" strokeWidth="1.5" />
          <line x1="310" y1="90" x2="340" y2="70" />
          <line x1="340" y1="70" x2="340" y2="50" />
          <line x1="310" y1="110" x2="340" y2="130" />
          <line x1="340" y1="130" x2="340" y2="150" />
          <polygon points="320,117 328,122 324,112" fill="currentColor" />
          <text x="295" y="70" className="text-white/40 text-[9px] italic" fill="currentColor">Q1 (NPN)</text>

          {/* RF Antenna & Waves */}
          <line x1="390" y1="120" x2="450" y2="120" />
          <line x1="420" y1="120" x2="420" y2="60" />
          <polygon points="420,60 405,40 435,40" />
          <line x1="405" y1="40" x2="405" y2="30" />
          <line x1="435" y1="40" x2="435" y2="30" />
          <line x1="420" y1="60" x2="420" y2="30" />
          <path d="M445,30 A 25,25 0 0, 1 445,70" strokeDasharray="3,3" />
          <path d="M455,20 A 35,35 0 0, 1 455,80" strokeDasharray="4,4" className="opacity-60" />
          <text x="395" y="135" className="text-white/40 text-[9px] italic" fill="currentColor">TX/RX (2.4GHz)</text>

          {/* SoC Chip Outline & Silicon Core */}
          <rect x="490" y="50" width="100" height="70" rx="4" />
          <rect x="510" y="65" width="60" height="40" rx="2" strokeDasharray="2,2" className="opacity-50" />
          <line x1="475" y1="65" x2="490" y2="65" />
          <line x1="475" y1="85" x2="490" y2="85" />
          <line x1="475" y1="105" x2="490" y2="105" />
          <line x1="590" y1="65" x2="605" y2="65" />
          <line x1="590" y1="85" x2="605" y2="85" />
          <line x1="590" y1="105" x2="605" y2="105" />
          <line x1="510" y1="35" x2="510" y2="50" />
          <line x1="540" y1="35" x2="540" y2="50" />
          <line x1="570" y1="35" x2="570" y2="50" />
          <text x="515" y="90" className="text-white/50 text-[10px] font-bold tracking-widest" fill="currentColor">SoC ECE</text>

          {/* Oscilloscope Grid & Sine Wave */}
          <rect x="640" y="50" width="120" height="70" rx="3" />
          <line x1="640" y1="85" x2="760" y2="85" strokeDasharray="3,3" className="opacity-30" />
          <line x1="700" y1="50" x2="700" y2="120" strokeDasharray="3,3" className="opacity-30" />
          <path d="M640,85 Q655,45 670,85 T700,85 T730,85 T760,85" strokeWidth="1.5" />
          <text x="650" y="65" className="text-white/40 text-[8px]" fill="currentColor">SIGNAL IN</text>
          <text x="720" y="110" className="text-white/40 text-[8px]" fill="currentColor">100 MHz</text>
        </svg>
      );
    case 'btech-it':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Cloud Outline */}
          <path d="M70,85 A12,12 0 0,1 82,73 A15,15 0 0,1 107,70 A12,12 0 0,1 121,80 A10,10 0 0,1 125,90 A10,10 0 0,1 115,100 L75,100 A10,10 0 0,1 65,90 A10,10 0 0,1 70,85 Z" />
          <text x="80" y="93" className="text-white/50 text-[8px] font-bold" fill="currentColor">CLOUD</text>
          <text x="70" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Virtual hosting</text>

          {/* Server Rack */}
          <rect x="180" y="50" width="90" height="70" rx="3" />
          <rect x="185" y="55" width="80" height="15" rx="1" />
          <circle cx="192" cy="62" r="2.5" fill="currentColor" />
          <circle cx="200" cy="62" r="1.5" className="opacity-50" />
          <line x1="210" y1="62" x2="255" y2="62" strokeDasharray="2,2" className="opacity-40" />
          <rect x="185" y="73" width="80" height="15" rx="1" />
          <circle cx="192" cy="80" r="2.5" fill="currentColor" />
          <circle cx="200" cy="80" r="1.5" className="opacity-50" />
          <line x1="210" y1="80" x2="255" y2="80" strokeDasharray="2,2" className="opacity-40" />
          <rect x="185" y="91" width="80" height="15" rx="1" />
          <circle cx="192" cy="98" r="2.5" fill="currentColor" />
          <circle cx="200" cy="98" r="1.5" className="opacity-50" />
          <line x1="210" y1="98" x2="255" y2="98" strokeDasharray="2,2" className="opacity-40" />
          <text x="185" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Core Infrastructure</text>

          {/* Global Connections */}
          <circle cx="380" cy="85" r="30" />
          <ellipse cx="380" cy="85" rx="30" ry="10" />
          <ellipse cx="380" cy="85" rx="10" ry="30" />
          <line x1="350" y1="85" x2="410" y2="85" />
          <line x1="380" y1="55" x2="380" y2="115" />
          <circle cx="360" cy="75" r="2" fill="currentColor" />
          <circle cx="400" cy="95" r="2" fill="currentColor" />
          <circle cx="380" cy="55" r="2" fill="currentColor" />
          <line x1="380" y1="55" x2="425" y2="45" className="opacity-40" />
          <text x="355" y="130" className="text-white/40 text-[9px] italic" fill="currentColor">WAN Web routing</text>

          {/* Web Browser & API endpoint */}
          <rect x="490" y="50" width="120" height="70" rx="3" />
          <line x1="490" y1="63" x2="610" y2="63" />
          <circle cx="498" cy="56" r="2" fill="currentColor" />
          <circle cx="504" cy="56" r="2" fill="currentColor" />
          <circle cx="510" cy="56" r="2" fill="currentColor" />
          <text x="522" y="58" className="text-white/30 text-[7px]" fill="currentColor">https://api.kiot.edu/get</text>
          <text x="500" y="80" className="text-white/50 text-[9px] font-mono" fill="currentColor">GET /v1/users HTTP/1.1</text>
          <text x="500" y="95" className="text-white/40 text-[8px] font-mono" fill="currentColor">Host: kiot.ac.in</text>
          <text x="500" y="110" className="text-white/60 text-[8px] font-mono" fill="currentColor">Status: 200 OK</text>

          {/* Security Shield */}
          <rect x="670" y="50" width="90" height="70" rx="4" />
          <path d="M700,60 L715,55 L730,60 L730,85 C730,95 715,105 715,105 C715,105 700,95 700,85 Z" strokeWidth="1.5" />
          <rect x="710" y="75" width="10" height="8" rx="1" fill="currentColor" />
          <path d="M712,75 L712,70 A3,3 0 0,1 718,70 L718,75" strokeWidth="1" />
          <text x="685" y="115" className="text-white/40 text-[9px] font-bold" fill="currentColor">SSL / TLS SECURE</text>
        </svg>
      );
    case 'btech-csbs':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Code panel */}
          <rect x="50" y="45" width="140" height="80" rx="3" />
          <line x1="50" y1="58" x2="190" y2="58" />
          <text x="60" y="53" className="text-white/40 text-[7px]" fill="currentColor">system_design.cpp</text>
          <text x="60" y="75" className="text-white/50 text-[8px] font-mono" fill="currentColor">class BusinessLogic {"{"}</text>
          <text x="70" y="87" className="text-white/40 text-[8px] font-mono" fill="currentColor">double calcROI() {"{"}</text>
          <text x="80" y="99" className="text-white/60 text-[8px] font-mono" fill="currentColor">return (gain - cost) / cost;</text>
          <text x="70" y="111" className="text-white/40 text-[8px] font-mono" fill="currentColor">{"}"}</text>
          <text x="60" y="120" className="text-white/40 text-[8px] font-mono" fill="currentColor">{"}"};</text>

          {/* Intersecting gears */}
          <circle cx="260" cy="85" r="20" />
          <circle cx="260" cy="85" r="5" />
          <circle cx="295" cy="85" r="14" />
          <circle cx="295" cy="85" r="3.5" />
          <path d="M260,60 L260,65 M260,105 L260,110 M235,85 L240,85 M280,85 L285,85" strokeWidth="2" />
          <path d="M295,68 L295,71 M295,99 L295,102 M281,85 L284,85 M309,85 L312,85" strokeWidth="1.5" />
          <text x="240" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">System Optimization</text>

          {/* Business Ascending Bar Chart */}
          <rect x="370" y="50" width="120" height="70" rx="3" />
          <line x1="385" y1="60" x2="385" y2="110" />
          <line x1="385" y1="110" x2="475" y2="110" />
          <rect x="395" y="90" width="12" height="20" fill="currentColor" className="opacity-20" />
          <rect x="415" y="80" width="12" height="30" fill="currentColor" className="opacity-40" />
          <rect x="435" y="70" width="12" height="40" fill="currentColor" className="opacity-60" />
          <rect x="455" y="58" width="12" height="52" fill="currentColor" />
          <path d="M395,92 L415,78 L435,68 L460,54" strokeWidth="1.5" />
          <polygon points="460,54 452,55 458,61" fill="currentColor" />
          <text x="395" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Enterprise Growth (ROI)</text>

          {/* Pie Chart */}
          <circle cx="560" cy="85" r="25" />
          <path d="M560,85 L560,60" />
          <path d="M560,85 L581,72" />
          <path d="M560,85 L545,105" />
          <text x="548" y="75" className="text-white/50 text-[8px] font-bold" fill="currentColor">45%</text>
          <text x="570" y="95" className="text-white/40 text-[8px]" fill="currentColor">30%</text>
          <text x="532" y="125" className="text-white/40 text-[8px]" fill="currentColor">Market Analysis</text>

          {/* Process Workflow Diagram */}
          <rect x="650" y="55" width="45" height="22" rx="2" />
          <text x="656" y="68" className="text-white/60 text-[8px]" fill="currentColor">Agile Sprint</text>
          <line x1="695" y1="66" x2="715" y2="66" />
          <polygon points="715,66 708,63 708,69" fill="currentColor" />
          <rect x="715" y="55" width="45" height="22" rx="2" />
          <text x="722" y="68" className="text-white/60 text-[8px]" fill="currentColor">Deploy</text>
          <line x1="737" y1="77" x2="737" y2="92" />
          <polygon points="737,92 734,85 740,85" fill="currentColor" />
          <rect x="715" y="92" width="45" height="22" rx="2" />
          <text x="720" y="105" className="text-white/60 text-[8px]" fill="currentColor">Optimize</text>
          <path d="M715,103 L672,103 L672,77" strokeDasharray="2,2" />
          <polygon points="672,77 669,84 675,84" fill="currentColor" />
        </svg>
      );
    case 'be-ecm':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Resistor & Capacitor */}
          <line x1="30" y1="80" x2="50" y2="80" />
          <path d="M50,80 L53,74 L59,86 L65,74 L71,86 L77,74 L83,86 L86,80" />
          <line x1="86" y1="80" x2="110" y2="80" />
          <line x1="110" y1="70" x2="110" y2="90" strokeWidth="1.5" />
          <line x1="115" y1="70" x2="115" y2="90" strokeWidth="1.5" />
          <line x1="115" y1="80" x2="140" y2="80" />
          <text x="50" y="62" className="text-white/40 text-[9px] italic" fill="currentColor">R (1k)</text>
          <text x="110" y="62" className="text-white/40 text-[9px] italic" fill="currentColor">C (10nF)</text>

          {/* NAND Gate */}
          <path d="M180,65 L200,65 A15,15 0 0,1 200,95 L180,95 Z" />
          <circle cx="218" cy="80" r="3" />
          <line x1="165" y1="72" x2="180" y2="72" />
          <line x1="165" y1="88" x2="180" y2="88" />
          <line x1="221" y1="80" x2="245" y2="80" />
          <text x="182" y="110" className="text-white/40 text-[8px]" fill="currentColor">NAND</text>

          {/* Microprocessor Core */}
          <rect x="290" y="50" width="110" height="70" rx="3" />
          <rect x="310" y="65" width="70" height="40" rx="1" strokeDasharray="2,2" className="opacity-40" />
          <text x="322" y="88" className="text-white/50 text-[9px] font-bold" fill="currentColor">ARM Cortex</text>
          <line x1="290" y1="65" x2="275" y2="65" />
          <line x1="290" y1="85" x2="275" y2="85" />
          <line x1="290" y1="105" x2="275" y2="105" />
          <line x1="400" y1="65" x2="415" y2="65" />
          <line x1="400" y1="85" x2="415" y2="85" />
          <line x1="400" y1="105" x2="415" y2="105" />
          <text x="295" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Embedded System MCU</text>

          {/* Memory block stack */}
          <rect x="470" y="50" width="80" height="70" rx="2" />
          <line x1="470" y1="68" x2="550" y2="68" />
          <line x1="470" y1="86" x2="550" y2="86" />
          <line x1="470" y1="104" x2="550" y2="104" />
          <text x="495" y="62" className="text-white/40 text-[8px]" fill="currentColor">0x00FF</text>
          <text x="495" y="80" className="text-white/60 text-[8px] font-bold" fill="currentColor">DATA BUS</text>
          <text x="495" y="98" className="text-white/40 text-[8px]" fill="currentColor">0x0100</text>
          <text x="495" y="116" className="text-white/40 text-[8px]" fill="currentColor">0x0104</text>

          {/* Assembly Overlay */}
          <rect x="590" y="50" width="140" height="70" rx="3" />
          <text x="600" y="68" className="text-white/40 text-[8px] font-mono" fill="currentColor">LDR R0, [R1, #4]</text>
          <text x="600" y="82" className="text-white/60 text-[8px] font-mono" fill="currentColor">ADD R0, R0, #1</text>
          <text x="600" y="96" className="text-white/40 text-[8px] font-mono" fill="currentColor">STR R0, [R1, #8]</text>
          <text x="600" y="110" className="text-white/30 text-[8px] font-mono" fill="currentColor">BX LR // Return</text>
          <text x="610" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Low Level Firmware</text>
        </svg>
      );
    case 'be-civil':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Truss Bridge */}
          <line x1="30" y1="100" x2="220" y2="100" strokeWidth="1.5" />
          <line x1="30" y1="70" x2="220" y2="70" />
          <line x1="30" y1="100" x2="60" y2="70" />
          <line x1="60" y1="70" x2="90" y2="100" />
          <line x1="90" y1="100" x2="120" y2="70" />
          <line x1="120" y1="70" x2="150" y2="100" />
          <line x1="150" y1="100" x2="180" y2="70" />
          <line x1="180" y1="70" x2="210" y2="100" />
          <line x1="60" y1="70" x2="60" y2="100" />
          <line x1="120" y1="70" x2="120" y2="100" />
          <line x1="180" y1="70" x2="180" y2="100" />
          <polygon points="50,100 40,120 60,120" fill="currentColor" className="opacity-30" />
          <polygon points="190,100 180,120 200,120" fill="currentColor" className="opacity-30" />
          <text x="30" y="55" className="text-white/40 text-[9px] italic" fill="currentColor">Truss Bridge Analysis</text>

          {/* Compass & Arc */}
          <line x1="280" y1="45" x2="280" y2="125" strokeDasharray="3,3" className="opacity-40" />
          <path d="M255,115 L280,50 L305,115" strokeWidth="1.5" />
          <line x1="262" y1="95" x2="298" y2="95" />
          <circle cx="280" cy="50" r="3.5" fill="currentColor" />
          <path d="M230,125 L330,125" />
          <path d="M245,115 A35,35 0 0,1 315,115" strokeDasharray="2,2" className="opacity-50" />
          <text x="245" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Precision Drafting</text>

          {/* Blueprint Layout */}
          <rect x="360" y="50" width="130" height="70" rx="3" strokeDasharray="1,1" className="opacity-30" />
          <rect x="370" y="60" width="60" height="30" />
          <rect x="430" y="60" width="50" height="30" />
          <rect x="370" y="90" width="110" height="25" />
          <line x1="370" y1="122" x2="480" y2="122" />
          <polygon points="370,122 376,120 376,124" fill="currentColor" />
          <polygon points="480,122 474,120 474,124" fill="currentColor" />
          <text x="410" y="132" className="text-white/40 text-[8px]" fill="currentColor">DIMS: 12.0m x 7.5m</text>
          <text x="375" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Foundation Plan</text>

          {/* Transit / Theodolite */}
          <line x1="560" y1="120" x2="580" y2="70" strokeWidth="1.5" />
          <line x1="600" y1="120" x2="580" y2="70" strokeWidth="1.5" />
          <line x1="580" y1="120" x2="580" y2="70" strokeWidth="1" className="opacity-40" />
          <circle cx="580" cy="65" r="10" />
          <rect x="568" y="60" width="24" height="10" rx="1" transform="rotate(-15 580 65)" />
          <line x1="555" y1="62" x2="605" y2="62" strokeDasharray="3,3" />
          <text x="545" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Land Surveying</text>

          {/* Load Vectors */}
          <rect x="650" y="70" width="130" height="20" rx="1" fill="currentColor" className="opacity-15" />
          <line x1="650" y1="70" x2="780" y2="70" strokeWidth="1.5" />
          <line x1="650" y1="90" x2="780" y2="90" strokeWidth="1.5" />
          <line x1="680" y1="45" x2="680" y2="70" />
          <polygon points="680,70 677,65 683,65" fill="currentColor" />
          <line x1="715" y1="45" x2="715" y2="70" />
          <polygon points="715,70 712,65 718,65" fill="currentColor" />
          <line x1="750" y1="45" x2="750" y2="70" />
          <polygon points="750,70 747,65 753,65" fill="currentColor" />
          <text x="700" y="40" className="text-white/40 text-[8px] font-bold" fill="currentColor">LOAD (kN/m)</text>
          <polygon points="660,90 653,105 667,105" />
          <polygon points="770,90 763,105 777,105" />
          <text x="650" y="120" className="text-white/40 text-[8px]" fill="currentColor">R1</text>
          <text x="770" y="120" className="text-white/40 text-[8px]" fill="currentColor">R2</text>
        </svg>
      );
    case 'btech-aids':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Deep Neural Network */}
          <circle cx="50" cy="55" r="5" fill="currentColor" />
          <circle cx="50" cy="85" r="5" fill="currentColor" />
          <circle cx="50" cy="115" r="5" fill="currentColor" />
          <circle cx="100" cy="40" r="5" />
          <circle cx="100" cy="70" r="5" />
          <circle cx="100" cy="100" r="5" />
          <circle cx="100" cy="130" r="5" />
          <circle cx="150" cy="70" r="5" fill="currentColor" />
          <circle cx="150" cy="100" r="5" fill="currentColor" />
          <line x1="55" y1="55" x2="95" y2="40" className="opacity-30" />
          <line x1="55" y1="55" x2="95" y2="70" className="opacity-30" />
          <line x1="55" y1="55" x2="95" y2="100" className="opacity-30" />
          <line x1="55" y1="85" x2="95" y2="40" className="opacity-30" />
          <line x1="55" y1="85" x2="95" y2="70" className="opacity-30" />
          <line x1="55" y1="85" x2="95" y2="100" className="opacity-30" />
          <line x1="55" y1="85" x2="95" y2="130" className="opacity-30" />
          <line x1="55" y1="115" x2="95" y2="70" className="opacity-30" />
          <line x1="55" y1="115" x2="95" y2="100" className="opacity-30" />
          <line x1="55" y1="115" x2="95" y2="130" className="opacity-30" />
          <line x1="105" y1="40" x2="145" y2="70" className="opacity-40" />
          <line x1="105" y1="70" x2="145" y2="70" className="opacity-40" />
          <line x1="105" y1="100" x2="145" y2="70" className="opacity-40" />
          <line x1="105" y1="70" x2="145" y2="100" className="opacity-40" />
          <line x1="105" y1="100" x2="145" y2="100" className="opacity-40" />
          <line x1="105" y1="130" x2="145" y2="100" className="opacity-40" />
          <text x="40" y="25" className="text-white/40 text-[9px] italic" fill="currentColor">Neural Network Dense Layer</text>

          {/* Brain and Nodes */}
          <path d="M220,80 C210,60 230,45 250,45 C260,45 270,52 280,50 C290,48 300,55 310,65 C325,80 320,100 310,110 C295,120 280,115 270,110 C260,115 240,115 230,110 C215,95 225,85 220,80 Z" strokeWidth="1.2" strokeDasharray="3,2" className="opacity-60" />
          <circle cx="245" cy="65" r="3.5" fill="currentColor" />
          <circle cx="275" cy="60" r="3" fill="currentColor" />
          <circle cx="295" cy="80" r="3.5" fill="currentColor" />
          <circle cx="260" cy="95" r="3" fill="currentColor" />
          <line x1="245" y1="65" x2="275" y2="60" />
          <line x1="275" y1="60" x2="295" y2="80" />
          <line x1="245" y1="65" x2="260" y2="95" />
          <line x1="260" y1="95" x2="295" y2="80" />
          <text x="240" y="35" className="text-white/40 text-[9px] italic" fill="currentColor">Cognitive Models</text>

          {/* Weights formula */}
          <rect x="350" y="50" width="110" height="70" rx="3" className="opacity-25" />
          <text x="360" y="70" className="text-white/50 text-[10px] font-mono" fill="currentColor">f(x) = σ(W·x + b)</text>
          <text x="360" y="88" className="text-white/40 text-[8px] font-mono" fill="currentColor">L = -Σ y·log(ŷ)</text>
          <text x="360" y="105" className="text-white/40 text-[8px] font-mono" fill="currentColor">∇W = lr · (ŷ - y)·x</text>
          <text x="360" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Backpropagation</text>

          {/* Scatter Plot & Regression Line */}
          <rect x="490" y="50" width="120" height="70" rx="3" />
          <line x1="510" y1="60" x2="510" y2="110" />
          <line x1="510" y1="110" x2="590" y2="110" />
          <circle cx="525" cy="100" r="2.5" fill="currentColor" />
          <circle cx="535" cy="85" r="2.5" fill="currentColor" />
          <circle cx="545" cy="92" r="2.5" fill="currentColor" />
          <circle cx="560" cy="70" r="2.5" fill="currentColor" />
          <circle cx="570" cy="78" r="2.5" fill="currentColor" />
          <circle cx="585" cy="62" r="2.5" fill="currentColor" />
          <line x1="515" y1="102" x2="590" y2="60" strokeWidth="1.5" />
          <text x="515" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Linear Regression R²=0.94</text>

          {/* Heatmap Grid */}
          <rect x="650" y="50" width="120" height="70" rx="3" />
          <rect x="660" y="60" width="15" height="15" fill="currentColor" className="opacity-10" />
          <rect x="680" y="60" width="15" height="15" fill="currentColor" className="opacity-30" />
          <rect x="700" y="60" width="15" height="15" fill="currentColor" className="opacity-80" />
          <rect x="720" y="60" width="15" height="15" fill="currentColor" className="opacity-45" />
          <rect x="660" y="80" width="15" height="15" fill="currentColor" className="opacity-60" />
          <rect x="680" y="80" width="15" height="15" fill="currentColor" className="opacity-90" />
          <rect x="700" y="80" width="15" height="15" fill="currentColor" className="opacity-20" />
          <rect x="720" y="80" width="15" height="15" fill="currentColor" className="opacity-70" />
          <rect x="660" y="100" width="15" height="15" fill="currentColor" className="opacity-40" />
          <rect x="680" y="100" width="15" height="15" fill="currentColor" className="opacity-15" />
          <rect x="700" y="100" width="15" height="15" fill="currentColor" className="opacity-50" />
          <rect x="720" y="100" width="15" height="15" fill="currentColor" className="opacity-85" />
          <text x="655" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Correlation Heatmap</text>
        </svg>
      );
    case 'be-eee':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Transformer */}
          <rect x="30" y="55" width="100" height="60" rx="3" className="opacity-30" />
          <rect x="45" y="65" width="20" height="40" />
          <rect x="95" y="65" width="20" height="40" />
          <path d="M40,70 Q55,73 40,76 T40,82 T40,88 T40,94 T40,100" strokeWidth="1.5" />
          <path d="M120,70 Q105,73 120,76 T120,82 T120,88 T120,94 T120,100" strokeWidth="1.5" />
          <line x1="20" y1="70" x2="40" y2="70" />
          <line x1="20" y1="100" x2="40" y2="100" />
          <line x1="120" y1="70" x2="140" y2="70" />
          <line x1="120" y1="100" x2="140" y2="100" />
          <text x="35" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Step Down TX</text>

          {/* Grid Tower */}
          <line x1="200" y1="130" x2="215" y2="45" strokeWidth="1.5" />
          <line x1="230" y1="130" x2="215" y2="45" strokeWidth="1.5" />
          <line x1="207" y1="85" x2="223" y2="85" />
          <line x1="202" y1="110" x2="228" y2="110" />
          <line x1="185" y1="65" x2="245" y2="65" strokeWidth="1.5" />
          <line x1="192" y1="85" x2="238" y2="85" strokeWidth="1.2" />
          <line x1="215" y1="45" x2="215" y2="130" strokeDasharray="2,2" className="opacity-30" />
          <path d="M185,65 Q150,75 120,75" strokeDasharray="3,3" className="opacity-40" />
          <path d="M245,65 Q285,75 320,75" strokeDasharray="3,3" className="opacity-40" />
          <text x="180" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">High Voltage Grid</text>

          {/* Induction Motor */}
          <circle cx="360" cy="85" r="25" />
          <circle cx="360" cy="85" r="22" strokeDasharray="2,2" className="opacity-40" />
          <circle cx="360" cy="85" r="5" fill="currentColor" />
          <line x1="330" y1="85" x2="390" y2="85" />
          <line x1="360" y1="55" x2="360" y2="115" />
          <text x="350" y="80" className="text-white/50 text-[8px] font-bold" fill="currentColor">STATOR</text>
          <text x="330" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">AC Motor (3-Phase)</text>

          {/* 3-Phase Waves */}
          <rect x="440" y="50" width="130" height="70" rx="3" />
          <line x1="440" y1="85" x2="570" y2="85" strokeDasharray="3,3" className="opacity-30" />
          <path d="M440,85 Q455,50 470,85 T500,85 T530,85 T560,85" strokeWidth="1.5" />
          <path d="M440,65 Q450,85 465,115 T495,85 T525,85 T555,85" strokeWidth="1.0" className="opacity-60" strokeDasharray="2,2" />
          <path d="M440,105 Q455,115 470,85 T500,85 T530,85 T560,85" strokeWidth="1.0" className="opacity-40" />
          <text x="445" y="62" className="text-white/50 text-[8px]" fill="currentColor">V_A</text>
          <text x="495" y="62" className="text-white/40 text-[8px]" fill="currentColor">V_B</text>
          <text x="535" y="62" className="text-white/30 text-[8px]" fill="currentColor">V_C</text>
          <text x="460" y="130" className="text-white/40 text-[8px]" fill="currentColor">3-Phase Voltage Cycles</text>

          {/* Solar Panel */}
          <rect x="630" y="55" width="110" height="60" rx="2" transform="rotate(-15 685 85)" />
          <line x1="640" y1="72" x2="738" y2="45" />
          <line x1="648" y1="92" x2="748" y2="65" />
          <line x1="660" y1="60" x2="685" y2="105" />
          <line x1="690" y1="52" x2="715" y2="97" />
          <line x1="720" y1="44" x2="745" y2="89" />
          <text x="650" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">PV Solar Cell Grid</text>
        </svg>
      );
    case 'mba-general':
    case 'mba-iev':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Growth graph */}
          <rect x="30" y="50" width="110" height="70" rx="3" />
          <line x1="45" y1="60" x2="45" y2="110" />
          <line x1="45" y1="110" x2="125" y2="110" />
          <path d="M45,105 Q65,95 85,75 T115,60" strokeWidth="2" />
          <polygon points="115,60 108,60 113,67" fill="currentColor" />
          <text x="35" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Q1-Q4 Growth</text>
          <text x="90" y="85" className="text-white/50 text-[8px] font-bold" fill="currentColor">ROI +34%</text>

          {/* Pie Chart */}
          <circle cx="210" cy="85" r="25" />
          <path d="M210,85 L210,60" />
          <path d="M210,85 L231,72" />
          <path d="M210,85 L190,100" />
          <text x="215" y="60" className="text-white/40 text-[8px] font-bold" fill="currentColor">Mkt Share</text>
          <text x="215" y="105" className="text-white/40 text-[8px]" fill="currentColor">Global</text>

          {/* Bullseye */}
          <circle cx="340" cy="85" r="25" />
          <circle cx="340" cy="85" r="15" />
          <circle cx="340" cy="85" r="5" fill="currentColor" />
          <line x1="295" y1="40" x2="336" y2="81" strokeWidth="1.8" />
          <polygon points="336,81 328,78 333,73" fill="currentColor" />
          <text x="300" y="32" className="text-white/40 text-[9px] italic" fill="currentColor">Target KPI Match</text>

          {/* Handshake */}
          <path d="M425,85 C440,75 450,75 460,85 C455,90 445,95 425,85 Z" strokeWidth="1.5" />
          <path d="M465,85 C450,95 440,95 430,85 C435,80 445,75 465,85 Z" strokeWidth="1.5" />
          <line x1="410" y1="75" x2="430" y2="85" />
          <line x1="410" y1="95" x2="430" y2="85" />
          <line x1="480" y1="75" x2="460" y2="85" />
          <line x1="480" y1="95" x2="460" y2="85" />
          <text x="420" y="55" className="text-white/40 text-[9px] italic" fill="currentColor">Acquisitions</text>

          {/* Canvas Strategy */}
          <rect x="530" y="50" width="130" height="70" rx="3" strokeDasharray="2,2" className="opacity-30" />
          <rect x="540" y="60" width="30" height="20" rx="1" />
          <text x="543" y="73" className="text-white/50 text-[7px]" fill="currentColor">Idea</text>
          <line x1="570" y1="70" x2="585" y2="70" />
          <polygon points="585,70 578,67 578,73" fill="currentColor" />
          <rect x="585" y="60" width="30" height="20" rx="1" />
          <text x="588" y="73" className="text-white/50 text-[7px]" fill="currentColor">Funding</text>
          <line x1="615" y1="70" x2="630" y2="70" />
          <polygon points="630,70 623,67 623,73" fill="currentColor" />
          <rect x="630" y="60" width="25" height="20" rx="1" />
          <text x="632" y="73" className="text-white/60 text-[7px]" fill="currentColor">Scale</text>
          <path d="M642,80 L642,105 L555,105 L555,80" strokeDasharray="1,1" />
          <polygon points="555,80 552,87 558,87" fill="currentColor" />
          <text x="560" y="118" className="text-white/40 text-[8px]" fill="currentColor">Feedback Loop</text>
        </svg>
      );
    case 'mca':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* App Frame */}
          <rect x="40" y="45" width="80" height="80" rx="6" />
          <rect x="48" y="55" width="64" height="54" rx="2" />
          <circle cx="80" cy="118" r="3.5" />
          <line x1="72" y1="50" x2="88" y2="50" strokeWidth="2" className="opacity-30" />
          <text x="40" y="35" className="text-white/40 text-[9px] italic" fill="currentColor">Mobile App dev</text>

          {/* Database */}
          <ellipse cx="180" cy="60" rx="18" ry="5" />
          <path d="M162,60 L162,75 A18,5 0 0,0 198,75 L198,60" />
          <path d="M162,75 L162,90 A18,5 0 0,0 198,90 L198,75" />
          <text x="155" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Relational DB</text>

          {/* API Sync */}
          <path d="M230,75 A8,8 0 0,1 238,67 A10,10 0 0,1 254,65 A8,8 0 0,1 262,72 A7,7 0 0,1 265,79 A7,7 0 0,1 258,86 L234,86 A7,7 0 0,1 227,79 A7,7 0 0,1 230,75 Z" />
          <line x1="200" y1="75" x2="225" y2="75" strokeDasharray="3,3" />

          {/* Node JS Code */}
          <rect x="300" y="45" width="130" height="80" rx="3" />
          <line x1="300" y1="58" x2="430" y2="58" />
          <text x="310" y="53" className="text-white/40 text-[7px]" fill="currentColor">server.js (Node.js)</text>
          <text x="310" y="75" className="text-white/50 text-[8px] font-mono" fill="currentColor">const app = express();</text>
          <text x="310" y="87" className="text-white/40 text-[8px] font-mono" fill="currentColor">app.use(express.json());</text>
          <text x="310" y="99" className="text-white/60 text-[8px] font-mono" fill="currentColor">app.listen(3000, () =&gt; {"{"}</text>
          <text x="320" y="111" className="text-white/40 text-[8px] font-mono" fill="currentColor">console.log('Online');</text>
          <text x="310" y="120" className="text-white/40 text-[8px] font-mono" fill="currentColor">{"}"});</text>

          {/* Stack layers */}
          <rect x="470" y="50" width="80" height="70" rx="3" />
          <line x1="470" y1="68" x2="550" y2="68" />
          <line x1="470" y1="86" x2="550" y2="86" />
          <line x1="470" y1="104" x2="550" y2="104" />
          <text x="485" y="62" className="text-white/60 text-[8px] font-bold" fill="currentColor">UI Layer</text>
          <text x="480" y="80" className="text-white/40 text-[8px]" fill="currentColor">API Middleware</text>
          <text x="485" y="98" className="text-white/40 text-[8px]" fill="currentColor">DB Drivers</text>
          <text x="465" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">3-Tier Stack</text>

          {/* Wireframe */}
          <rect x="580" y="50" width="130" height="70" rx="3" strokeDasharray="1,2" />
          <rect x="590" y="60" width="110" height="10" />
          <rect x="590" y="75" width="30" height="35" />
          <rect x="625" y="75" width="75" height="10" />
          <rect x="625" y="90" width="75" height="20" />
          <text x="580" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Frontend Wireframe</text>
        </svg>
      );
    case 'phd':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Scroll */}
          <path d="M40,95 L110,95 C115,95 120,90 120,85 L120,65 C120,60 115,55 110,55 L40,55 C35,55 30,60 30,65 L30,85 C30,90 35,95 40,95 Z" strokeWidth="1.5" />
          <path d="M30,65 C35,65 35,55 30,55" />
          <path d="M120,85 C115,85 115,95 120,95" />
          <path d="M70,95 L72,115 L80,110 L88,115 L90,95" fill="currentColor" className="opacity-30" />
          <text x="42" y="77" className="text-white/50 text-[10px] font-bold tracking-wider" fill="currentColor">THESIS</text>
          <text x="35" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Doctoral Thesis</text>

          {/* Hat */}
          <polygon points="190,55 240,40 290,55 240,70" strokeWidth="1.5" />
          <rect x="215" y="63" width="50" height="20" fill="currentColor" className="opacity-20" />
          <path d="M215,63 L215,75 C215,82 265,82 265,75 L265,63" strokeWidth="1.2" />
          <path d="M240,55 L275,65 L275,80" />
          <circle cx="275" cy="82" r="2.5" fill="currentColor" />

          {/* Book survey */}
          <rect x="330" y="90" width="80" height="15" rx="1" />
          <rect x="335" y="75" width="70" height="15" rx="1" />
          <rect x="342" y="60" width="55" height="15" rx="1" />
          <line x1="335" y1="97" x2="405" y2="97" className="opacity-30" />
          <line x1="340" y1="82" x2="400" y2="82" className="opacity-30" />
          <text x="335" y="45" className="text-white/40 text-[9px] italic" fill="currentColor">Lit. Review</text>

          {/* DNA helix */}
          <path d="M470,50 Q485,85 500,85 T530,85 T560,50" />
          <path d="M470,120 Q485,85 500,85 T530,85 T560,120" strokeDasharray="2,1" className="opacity-60" />
          <line x1="480" y1="70" x2="480" y2="100" />
          <line x1="495" y1="80" x2="495" y2="90" />
          <line x1="515" y1="88" x2="515" y2="82" />
          <line x1="535" y1="98" x2="535" y2="72" />
          <text x="475" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Genomic Research</text>

          {/* Molecular */}
          <circle cx="630" cy="70" r="6" fill="currentColor" />
          <circle cx="670" cy="55" r="5" />
          <circle cx="670" cy="95" r="5" />
          <circle cx="700" cy="75" r="5" />
          <line x1="636" y1="68" x2="665" y2="57" />
          <line x1="636" y1="72" x2="665" y2="93" />
          <line x1="675" y1="59" x2="696" y2="71" />
          <line x1="675" y1="91" x2="696" y2="79" />
          <text x="625" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Bio-molecular bonds</text>
        </svg>
      );
    case 'me-ise':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Hat */}
          <path d="M50,90 A25,25 0 0,1 100,90 Z" fill="currentColor" className="opacity-20" />
          <path d="M50,90 A25,25 0 0,1 100,90" strokeWidth="1.8" />
          <rect x="42" y="90" width="66" height="5" rx="1.5" />
          <line x1="75" y1="65" x2="75" y2="90" strokeWidth="2.5" />
          <text x="45" y="50" className="text-white/40 text-[9px] italic" fill="currentColor">OSHA Compliance</text>

          {/* Danger */}
          <polygon points="180,95 210,45 240,95" strokeWidth="1.5" />
          <line x1="210" y1="60" x2="210" y2="80" strokeWidth="2.5" />
          <circle cx="210" cy="87" r="1.5" fill="currentColor" />
          <text x="182" y="110" className="text-white/40 text-[9px] font-bold" fill="currentColor">HAZARD RISK</text>

          {/* Shield */}
          <path d="M295,50 L315,45 L335,50 L335,80 C335,95 315,108 315,108 C315,108 295,95 295,80 Z" strokeWidth="1.5" />
          <path d="M306,75 L312,81 L325,68" strokeWidth="2" />
          <text x="292" y="38" className="text-white/40 text-[9px] italic" fill="currentColor">Safety Audited</text>

          {/* Extinguisher */}
          <rect x="390" y="55" width="22" height="45" rx="3" />
          <path d="M393,55 L393,50 C393,48 409,48 409,50 L409,55" />
          <line x1="401" y1="50" x2="401" y2="44" />
          <line x1="395" y1="44" x2="407" y2="44" />
          <path d="M410,53 C420,53 420,70 410,70" strokeWidth="1.5" />
          <text x="380" y="115" className="text-white/40 text-[8px]" fill="currentColor">FIRE CONTROL</text>

          {/* Factory check */}
          <rect x="490" y="50" width="130" height="70" rx="3" strokeDasharray="2,2" />
          <polygon points="500,100 500,75 520,85 520,75 540,85 540,75 560,85 560,100" />
          <circle cx="590" cy="80" r="15" />
          <path d="M582,80 L588,86 L600,72" strokeWidth="2" />
          <text x="495" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Industrial Plant Audit</text>
        </svg>
      );
    case 'me-ae':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* IC */}
          <rect x="40" y="50" width="110" height="70" rx="4" />
          <rect x="60" y="65" width="70" height="40" rx="2" strokeDasharray="2,2" className="opacity-40" />
          <circle cx="95" cy="85" r="8" />
          <text x="82" y="88" className="text-white/60 text-[8px] font-bold" fill="currentColor">FPGA</text>
          <line x1="40" y1="65" x2="25" y2="65" />
          <line x1="40" y1="85" x2="25" y2="85" />
          <line x1="40" y1="105" x2="25" y2="105" />
          <line x1="150" y1="65" x2="165" y2="65" />
          <line x1="150" y1="85" x2="165" y2="85" />
          <line x1="150" y1="105" x2="165" y2="105" />
          <text x="35" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">VLSI Arch</text>

          {/* Filtering */}
          <rect x="210" y="50" width="120" height="70" rx="3" />
          <line x1="225" y1="60" x2="225" y2="110" />
          <line x1="225" y1="110" x2="315" y2="110" />
          <path d="M225,110 L250,110 Q270,60 280,60 Q290,60 300,110 L315,110" strokeWidth="1.5" />
          <line x1="262" y1="60" x2="298" y2="60" strokeDasharray="1,2" />
          <text x="215" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Bandpass Response</text>

          {/* Feedback */}
          <rect x="380" y="65" width="40" height="30" rx="2" />
          <text x="386" y="83" className="text-white/50 text-[9px]" fill="currentColor">G(s)</text>
          <line x1="355" y1="80" x2="380" y2="80" />
          <polygon points="380,80 373,77 373,83" fill="currentColor" />
          <line x1="420" y1="80" x2="455" y2="80" />
          <polygon points="455,80 448,77 448,83" fill="currentColor" />
          <rect x="400" y="110" width="40" height="30" rx="2" />
          <text x="406" y="128" className="text-white/50 text-[9px]" fill="currentColor">H(s)</text>
          <path d="M440,80 L440,125 L400,125" />
          <path d="M400,125 L350,125 L350,85" />
          <circle cx="350" cy="80" r="4" />
          <text x="348" y="76" className="text-white/40 text-[8px]" fill="currentColor">+</text>
          <text x="342" y="90" className="text-white/40 text-[8px]" fill="currentColor">-</text>
          <text x="375" y="55" className="text-white/40 text-[9px] italic" fill="currentColor">Closed-loop Feedback</text>

          {/* ADC / DAC */}
          <rect x="520" y="50" width="130" height="70" rx="3" />
          <polygon points="530,60 580,60 570,110 530,110" />
          <text x="540" y="90" className="text-white/50 text-[10px] font-bold" fill="currentColor">ADC</text>
          <line x1="510" y1="85" x2="530" y2="85" />
          <line x1="575" y1="85" x2="595" y2="85" />
          <polygon points="595,60 635,60 645,110 595,110" />
          <text x="605" y="90" className="text-white/50 text-[10px] font-bold" fill="currentColor">DAC</text>
          <line x1="640" y1="85" x2="660" y2="85" />
          <text x="535" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Mixed Signal Conversion</text>
        </svg>
      );
    case 'me-ped':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Thyristor */}
          <line x1="30" y1="80" x2="60" y2="80" strokeWidth="1.5" />
          <polygon points="60,65 60,95 85,80" strokeWidth="1.5" />
          <line x1="85" y1="65" x2="85" y2="95" strokeWidth="2" />
          <line x1="85" y1="80" x2="115" y2="80" strokeWidth="1.5" />
          <line x1="72" y1="88" x2="60" y2="105" strokeWidth="1.2" />
          <text x="45" y="55" className="text-white/40 text-[9px]" fill="currentColor">SCR / IGBT</text>

          {/* Inverter */}
          <rect x="170" y="50" width="110" height="70" rx="3" />
          <text x="200" y="90" className="text-white/50 text-[10px] font-bold" fill="currentColor">INVERTER</text>
          <line x1="145" y1="75" x2="170" y2="75" />
          <line x1="145" y1="95" x2="170" y2="95" />
          <text x="145" y="65" className="text-white/40 text-[8px]" fill="currentColor">DC IN</text>
          <line x1="280" y1="85" x2="305" y2="85" />
          <text x="290" y="75" className="text-white/40 text-[8px]" fill="currentColor">AC OUT</text>

          {/* PWM */}
          <rect x="350" y="50" width="130" height="70" rx="3" />
          <line x1="350" y1="85" x2="480" y2="85" strokeDasharray="3,3" className="opacity-30" />
          <path d="M360,105 L365,105 L365,65 L370,65 L370,105 L380,105 L380,65 L395,65 L395,105 L405,105 L405,65 L430,65 L430,105 L440,105 L440,65 L455,65 L455,105 L465,105 L465,65 L470,65 L470,105" strokeWidth="1.5" />
          <text x="360" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">PWM Gate Driver Signals</text>

          {/* Motor */}
          <circle cx="560" cy="85" r="25" />
          <text x="550" y="88" className="text-white/60 text-[11px] font-bold" fill="currentColor">3~ M</text>
          <line x1="515" y1="75" x2="535" y2="75" />
          <line x1="515" y1="85" x2="535" y2="85" />
          <line x1="515" y1="95" x2="535" y2="95" />
          <text x="510" y="65" className="text-white/40 text-[8px]" fill="currentColor">U,V,W</text>
          <text x="535" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Variable Freq Drive</text>
        </svg>
      );
    case 'me-se':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Columns */}
          <line x1="30" y1="120" x2="150" y2="120" strokeWidth="2" />
          <rect x="45" y="60" width="15" height="60" fill="currentColor" className="opacity-20" />
          <rect x="120" y="60" width="15" height="60" fill="currentColor" className="opacity-20" />
          <rect x="45" y="60" width="15" height="60" />
          <rect x="120" y="60" width="15" height="60" />
          <rect x="35" y="50" width="115" height="10" />
          <line x1="92" y1="20" x2="92" y2="50" strokeWidth="2" />
          <polygon points="92,50 88,42 96,42" fill="currentColor" />
          <text x="80" y="15" className="text-white/50 text-[8px] font-bold" fill="currentColor">P = 500kN</text>
          <text x="35" y="135" className="text-white/40 text-[8px]" fill="currentColor">Support Reactions</text>

          {/* I-beam */}
          <path d="M220,50 L270,50 L270,58 L252,58 L252,102 L270,102 L270,110 L220,110 L220,102 L238,102 L238,58 L220,58 Z" strokeWidth="1.5" />
          <line x1="210" y1="80" x2="280" y2="80" strokeDasharray="3,3" className="opacity-40" />
          <text x="210" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">I-Beam Profile</text>

          {/* Moment */}
          <rect x="340" y="50" width="130" height="70" rx="3" />
          <line x1="355" y1="85" x2="455" y2="85" />
          <path d="M355,85 Q405,125 455,85" strokeWidth="2" />
          <text x="390" y="105" className="text-white/50 text-[8px] font-bold" fill="currentColor">M_max</text>
          <text x="345" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Bending Moment (kNm)</text>

          {/* Rebars */}
          <rect x="520" y="55" width="130" height="60" rx="2" strokeDasharray="1,2" />
          <line x1="525" y1="65" x2="645" y2="65" strokeWidth="1.8" />
          <line x1="525" y1="105" x2="645" y2="105" strokeWidth="1.8" />
          <line x1="540" y1="65" x2="540" y2="105" />
          <line x1="565" y1="65" x2="565" y2="105" />
          <line x1="590" y1="65" x2="590" y2="105" />
          <line x1="615" y1="65" x2="615" y2="105" />
          <line x1="640" y1="65" x2="640" y2="105" />
          <text x="535" y="42" className="text-white/40 text-[9px] italic" fill="currentColor">Reinforcement Detail</text>
        </svg>
      );
    case 'science-humanities':
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Atom */}
          <circle cx="80" cy="85" r="7" fill="currentColor" />
          <ellipse cx="80" cy="85" rx="30" ry="10" transform="rotate(30 80 85)" />
          <ellipse cx="80" cy="85" rx="30" ry="10" transform="rotate(-30 80 85)" />
          <ellipse cx="80" cy="85" rx="30" ry="10" transform="rotate(90 80 85)" />
          <circle cx="95" cy="60" r="2" fill="currentColor" />
          <circle cx="65" cy="110" r="2" fill="currentColor" />
          <circle cx="108" cy="95" r="2" fill="currentColor" />
          <text x="50" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Quantum Physics</text>

          {/* Beaker */}
          <path d="M195,50 L205,50 L205,70 L225,110 A10,10 0 0,1 215,120 L185,120 A10,10 0 0,1 175,110 L195,70 Z" strokeWidth="1.5" />
          <line x1="183" y1="100" x2="217" y2="100" />
          <circle cx="195" cy="90" r="2" />
          <circle cx="205" cy="82" r="1.5" />
          <circle cx="190" cy="78" r="1" />
          <text x="170" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Molecular Chemistry</text>

          {/* Prism */}
          <polygon points="310,50 280,105 340,105" strokeWidth="1.5" />
          <line x1="240" y1="85" x2="295" y2="78" />
          <line x1="325" y1="80" x2="365" y2="60" strokeWidth="1.5" />
          <line x1="325" y1="80" x2="365" y2="72" strokeWidth="1.0" className="opacity-70" />
          <line x1="325" y1="80" x2="365" y2="85" strokeWidth="0.8" className="opacity-40" />
          <text x="260" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Optics Dispersal</text>

          {/* Calculus */}
          <rect x="410" y="50" width="130" height="70" rx="3" className="opacity-25" />
          <text x="420" y="70" className="text-white/50 text-[10px] font-mono" fill="currentColor">∫ (3x² + ln x) dx</text>
          <text x="420" y="88" className="text-white/40 text-[8px] font-mono" fill="currentColor">e^(iπ) + 1 = 0</text>
          <text x="420" y="105" className="text-white/40 text-[8px] font-mono" fill="currentColor">lim [x→0] sin(x)/x = 1</text>
          <text x="420" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Applied Mathematics</text>

          {/* DNA */}
          <path d="M580,50 Q595,85 610,85 T640,85 T670,50" />
          <path d="M580,120 Q595,85 610,85 T640,85 T670,120" strokeDasharray="2,1" className="opacity-60" />
          <line x1="590" y1="70" x2="590" y2="100" />
          <line x1="605" y1="80" x2="605" y2="90" />
          <line x1="625" y1="88" x2="625" y2="82" />
          <line x1="645" y1="98" x2="645" y2="72" />
          <text x="590" y="40" className="text-white/40 text-[9px] italic" fill="currentColor">Cellular Biology</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 820 160" preserveAspectRatio="xMinYMax meet" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="100" cy="80" r="20" />
          <circle cx="100" cy="80" r="5" />
          <path d="M100,50 L100,55 M100,105 L100,110 M70,80 L75,80 M125,80 L130,80" strokeWidth="2" />
          <rect x="180" y="50" width="120" height="60" rx="3" />
          <text x="195" y="85" className="text-white/40 text-[18px] font-mono" fill="currentColor">&lt;/&gt;</text>
          <path d="M340,80 Q360,40 380,80 T420,80 T460,80" strokeWidth="1.5" />
          <text x="360" y="110" className="text-white/40 text-[8px]" fill="currentColor">KIOT ENGINEERING</text>
        </svg>
      );
  }
};
