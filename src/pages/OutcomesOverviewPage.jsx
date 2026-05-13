import React from 'react'
import { motion } from 'framer-motion'
import OutcomesOverview from '../components/Placements/Records'
import PlacementHighlights from '../components/Placements/Records/PlacementHighlights'

const OutcomesOverviewPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PlacementHighlights />
      <OutcomesOverview />
    </motion.div>
  )
}

export default OutcomesOverviewPage
