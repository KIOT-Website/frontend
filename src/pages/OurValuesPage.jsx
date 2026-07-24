import VisionMission from '../components/VisionMission/VisionMission'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const OurValuesPage = () => {

  return (
    <motion.div
      key="ourValues"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <VisionMission />
    </motion.div>
  )
}

export default OurValuesPage
