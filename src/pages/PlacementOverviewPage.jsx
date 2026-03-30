import React from 'react'
import { motion } from 'framer-motion'
import PlacementOverview from '../components/Placements/Overview'

const PlacementOverviewPage = () => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
    >
       <PlacementOverview />
    </motion.div>
  )
}

export default PlacementOverviewPage
