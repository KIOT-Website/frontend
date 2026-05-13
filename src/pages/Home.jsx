import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import Programs from '../components/Home/Programs'
import Placements from '../components/Home/Placements'
import CampusLife from '../components/Home/CampusLife'
import Achievers from '../components/Home/Achievers'
import Events from '../components/Home/Events'
import RecruitmentDrives from '../components/Home/RecruitmentDrives'
import Testimonials from '../components/Home/Testimonials'
import AboutKIOT from '../components/Home/AboutKIOT'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {[
        { Comp: AboutKIOT },
        { Comp: Stats },
        { Comp: Placements },
        { Comp: Programs },
        { Comp: CampusLife },
        { Comp: Achievers },
        { Comp: Events },
        { Comp: RecruitmentDrives },
        { Comp: Testimonials }
      ].map(({ Comp }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Comp />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Home
