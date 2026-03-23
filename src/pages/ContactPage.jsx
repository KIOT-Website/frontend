import Contact from '../components/Contact/Contact'
import { motion } from 'framer-motion'

const ContactPage = () => (
  <motion.div
    key="contact"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
  >
    <Contact />
  </motion.div>
)

export default ContactPage
