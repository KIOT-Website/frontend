import VisionMission from '../components/VisionMission/VisionMission'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const OurValuesPage = () => {
  useEffect(() => {
    const hiddenScrollbarClass = 'page-scrollbar-hidden'

    document.documentElement.classList.add(hiddenScrollbarClass)
    document.body.classList.add(hiddenScrollbarClass)

    return () => {
      document.documentElement.classList.remove(hiddenScrollbarClass)
      document.body.classList.remove(hiddenScrollbarClass)
    }
  }, [])

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
