import React from 'react'
import { motion } from 'framer-motion'
import Accreditation from '../components/Accreditation/Accreditation'

const AccreditationPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
    >
       <Accreditation />
    </motion.div>
  )
}

export default AccreditationPage
