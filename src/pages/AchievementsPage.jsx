import React from 'react'
import { motion } from 'framer-motion'
import Achievements from '../components/Achievements/Achievements'

const AchievementsPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
    >
       <Achievements />
    </motion.div>
  )
}

export default AchievementsPage
