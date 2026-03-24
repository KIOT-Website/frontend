import React from 'react'
import { motion } from 'framer-motion'
import GoverningCouncil from '../components/GoverningCouncil/GoverningCouncil'

const GoverningCouncilPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
    >
       <GoverningCouncil />
    </motion.div>
  )
}

export default GoverningCouncilPage
