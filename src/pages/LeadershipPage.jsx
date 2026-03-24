import Leadership from '../components/Leadership/Leadership'
import { motion } from 'framer-motion'

const LeadershipPage = () => (
  <motion.div
    key="leadership"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
  >
    <Leadership />
  </motion.div>
)

export default LeadershipPage
