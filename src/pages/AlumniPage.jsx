import React from 'react'
import { motion } from 'framer-motion'
import AlumniHero from '../components/Alumni/AlumniHero'
import AlumniIntro from '../components/Alumni/AlumniIntro'
import AlumniCorePurpose from '../components/Alumni/AlumniCorePurpose'
import AlumniInsights from '../components/Alumni/AlumniInsights'
import AlumniVoices from '../components/Alumni/AlumniVoices'

const AlumniPage = () => {
  return (
    <div className="bg-[#FCFDFD] min-h-screen">
      <AlumniHero />
      <AlumniIntro />
      <AlumniCorePurpose />
      <AlumniInsights />
      <AlumniVoices />
      
      {/* 
        Phase 5 will be added here:
        5. SUCCESS STORIES (Modern Grid)
      */}
    </div>
  )
}

export default AlumniPage

