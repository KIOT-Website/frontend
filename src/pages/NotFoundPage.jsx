import UnderConstruction from '../components/UnderConstruction/UnderConstruction'
import { motion } from 'framer-motion'

const NotFoundPage = () => (
  <motion.div
    key="construction"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
  >
    <UnderConstruction />
  </motion.div>
)

export default NotFoundPage
