import React from 'react'
import { motion } from 'framer-motion'
import AwardsRecognition from '../components/Accreditation/AwardsRecognition'

const AwardsRecognitionPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
    >
       <AwardsRecognition />
    </motion.div>
  )
}

export default AwardsRecognitionPage
