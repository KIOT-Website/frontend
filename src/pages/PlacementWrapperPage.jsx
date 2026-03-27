import React from 'react'
import { motion } from 'framer-motion'
import PlacementSubPage from '../components/Placements/PlacementSubPage'

const PlacementWrapperPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
    >
       <PlacementSubPage />
    </motion.div>
  )
}

export default PlacementWrapperPage
