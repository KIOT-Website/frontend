import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import Programs from '../components/Home/Programs'
import Placements from '../components/Home/Placements'
import CampusLife from '../components/Home/CampusLife'
import Achievers from '../components/Home/Achievers'
import Events from '../components/Home/Events'
import Testimonials from '../components/Home/Testimonials'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Stats />
      <Programs />
      <Placements />
      <CampusLife />
      <Achievers />
      <Events />
      <Testimonials />
    </motion.div>
  )
}

export default Home
