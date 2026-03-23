import EventsComponent from '../components/Events/EventsPage'
import { motion } from 'framer-motion'

const EventsPage = () => (
  <motion.div
    key="events"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
  >
    <EventsComponent />
  </motion.div>
)

export default EventsPage
