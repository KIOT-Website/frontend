import AboutUs from '../components/AboutUs/AboutUs'
import { motion } from 'framer-motion'

const AboutUsPage = () => {
  return (
    <motion.div
      key="aboutUs"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <AboutUs />
    </motion.div>
  )
}

export default AboutUsPage
