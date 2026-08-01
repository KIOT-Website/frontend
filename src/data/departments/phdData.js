import { FlaskConical, Microscope, Building2 } from 'lucide-react'

export const phdData = {
  name: 'Doctor of Philosophy',
    short: 'Ph.D.',
    duration: 'Full Time / Part Time',
    intake: '',
    affiliation: 'Anna University',
    accreditation: 'Recognized Research Center',
    placement: 'N/A',
    avgPackage: 'N/A',
    topPackage: 'N/A',
    icon: Microscope,
    color: '#18357a',
    tagline: 'Innovating Through Research.',
    overview: 'Our Research Centers are recognized by Anna University and offer doctoral programs in all major engineering and management disciplines.',
    whyChoose: ['Expert research supervisors', 'Modern research labs', 'Funding assistance for publications'],
    curriculum: [{ year: 'Course Work', semesters: ['Research Methodology', 'Advanced Domain Elective'] }],
    faculty: [{ name: 'Research Committee', designation: 'Coordinators', experience: '20+ Years', specialization: 'Multidisciplinary', rating: 5.0 }],
    labs: [
      {
        name: 'Industrial Linked Laboratories / COEs',
        equipments: [
          'CRM and HRM - ZOHO',
          'Japanese Language Centre - iTokyo'
        ],
        icon: Building2
      },

      
{ name: 'Research Center', equipment: 'Experimental Setup', icon: FlaskConical }],
};
