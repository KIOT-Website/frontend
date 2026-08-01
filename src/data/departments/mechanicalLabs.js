import { 
  Wrench, 
  Settings, 
  Flame, 
  Cpu, 
  CircuitBoard, 
  Ruler, 
  Layers, 
  Droplets,
  Car,
  Monitor,
  Building2
} from 'lucide-react'

export const mechanicalLabs = [
  {
    name: 'Industrial Linked Laboratories / COEs',
    equipments: [
      'Advanced Construction Management - L&T EduTech',
      'Automotive Technology - Ashok Leyland',
      'AI-driven Engineering Solutions - Creative Synergies Group',
      'CAD & Digital Manufacturing - Harita TechServ',
      'Energy Audit Centre - Sinetec Automation',
      'Embedded Technology - Firmware - American Megatrends International-AMI',
      'e-Yantra Robotics Lab - IIT – Bombay',
      'Software Defined Systems / ADAS with AUTOSAR - ANCIT / Harita Techserv',
      'Piping and Plant Design - Image Grafix',
      'Quality Engineering- Mech. - Nathan & Nathan Global Inc.',
      'Texas Instruments (TI) Innovation Lab - STEPS',
      'VLSI Testing & Post-Silicon Validation (PSV) - Tessolve Semiconductor',
      'Intelligent Elevator Systems and Industry 4.0 - KONE Elevators',
      'Industrial Automation: PLC & SCADA - GENN Automation',
      'Industry 4.0 - Delphi TVS',
          'CRM and HRM - ZOHO',
          'Japanese Language Centre - iTokyo'
    ],
    icon: Building2
  },
  {
    name: 'Engineering Practice Laboratory',
    equipment: 'Arc welding work stations, Lathe work setups, Carpentry work tables, Plumping work tables, Sheet metal work tables',
    icon: Wrench,
    equipments: [
      'Arc welding work stations',
      'Lathe work setups',
      'Carpentry work tables',
      'Plumping work tables',
      'Sheet metal work tables'
    ],
    incharge: 'Mr.M.Vinoth',
    technician: 'Mr.G.Arul Kumar'
  },
  {
    name: 'Reverse Engineering Laboratory',
    equipment: 'Computer systems, Bi Cycle, AWIM Jet Toy Kit, Washing Machine, Creo 4.0, AUTO CAD (Open-source), Bike Computer Mobile Application (Open Source)',
    icon: Monitor,
    equipments: [
      'Computer systems',
      'Bi Cycle',
      'AWIM Jet Toy Kit',
      'Washing Machine',
      'Creo 4.0',
      'AUTO CAD (Open-source)',
      'Bike Computer Mobile Application (Open Source)'
    ],
    incharge: 'Mr.A.Kamalakkannan',
    technician: 'Mr.G.Arul Kumar'
  },
  {
    name: 'CAD / CAM Laboratory',
    equipment: 'Computer Server, Computer systems, Microsoft Excel (Open source), MS word (Open-Source), AUTO CAD (Open-source), Python 3.13 (open Source), SOLIDWORKS 2025, FANUC / EDGECAM, ANSYS, Hypermesh, Matlab, Creo 4.0, A3 Size Plotter, Laser Printer',
    icon: Cpu,
    equipments: [
      'Computer Server',
      'Computer systems',
      'Microsoft Excel (Open source)',
      'MS word (Open-Source)',
      'AUTO CAD (Open-source)',
      'Python 3.13 (open Source)',
      'SOLIDWORKS 2025',
      'FANUC / EDGECAM',
      'ANSYS',
      'Hypermesh',
      'Matlab',
      'Creo 4.0',
      'A3 Size Plotter',
      'Laser Printer'
    ],
    incharge: 'Mr. J.Prakash',
    technician: 'Mr. T.Mohan'
  },
  {
    name: 'Production Technology Laboratory',
    equipment: 'Centre Lathes, Horizontal Milling Machines, Vertical Milling Machines, Shapers, Capstan & Turret Lathes, Surface Grinding Machines, Cylindrical Grinding Machines, Radial Drilling Machines, Gear Hobbling Machine, Gear Shaper Machine',
    icon: Settings,
    equipments: [
      'Centre Lathes',
      'Horizontal Milling Machines',
      'Vertical Milling Machines',
      'Shapers',
      'Capstan & Turret Lathes',
      'Surface Grinding Machines',
      'Cylindrical Grinding Machines',
      'Radial Drilling Machines',
      'Gear Hobbling Machine',
      'Gear Shaper Machine'
    ],
    incharge: 'Mr.K.N.Karthick',
    technician: 'Mr. R.Ganesan'
  },
  {
    name: 'Automotive Laboratory',
    equipment: 'STARTER MOTOR, BRAKE DRUM-FRONT AXLE, BRAKE DRUM-REAR AXLE, HUB AXLE, AIR BRAKE SYSTEM, AIR SUSPENSION, OIL COOLER, FRONT AXLE, REAR AXLE, DRIVE HEAD, EXHAUST AFTER TREATMENT SYSTEM - LINEAR',
    icon: Car,
    equipments: [
      'STARTER MOTOR',
      'BRAKE DRUM-FRONT AXLE',
      'BRAKE DRUM-REAR AXLE',
      'HUB AXLE',
      'AIR BRAKE SYSTEM',
      'AIR SUSPENSION',
      'OIL COOLER',
      'FRONT AXLE',
      'REAR AXLE',
      'DRIVE HEAD',
      'EXHAUST AFTER TREATMENT SYSTEM - LINEAR'
    ],
    incharge: 'Mr.P.Karthikeyan',
    technician: 'Mr. R.Ganesan'
  },
  {
    name: 'Mechatronics Laboratory',
    equipment: 'Basic Pneumatic Trainer Kit with Manual and Electrical controls / PLC Control, Basic Hydraulic Trainer Kit, Hydraulics and Pneumatics Systems Simulation Software, 8051 – Microcontroller kit with Stepper Motor and drive circuit sets, Image processing system with Hardware & Software',
    icon: CircuitBoard,
    equipments: [
      'Basic Pneumatic Trainer Kit with Manual and Electrical controls / PLC Control',
      'Basic Hydraulic Trainer Kit',
      'Hydraulics and Pneumatics Systems Simulation Software',
      '8051 – Microcontroller kit with Stepper Motor and drive circuit sets',
      'Image processing system with Hardware & Software'
    ],
    incharge: 'Mrs.A.Elavarasi',
    technician: 'Mr. R.Gopi'
  },
  {
    name: 'Metrology & Inspection Techniques Laboratory',
    equipment: 'Vernier Caliper, Micrometer, Vernier Height Gauge, Vernier depth Gauge, Slip Gauge Set, Gear Tooth Vernier, Mechanical Comparator, Bore Gauge, Telescope Gauge, Sine Bar, Profile Projector, Autocollimator, Tool Makers Microscope, Surface Finish Measuring Equipment, Sine Center',
    icon: Ruler,
    equipments: [
      'Vernier Caliper',
      'Micrometer',
      'Vernier Height Gauge',
      'Vernier depth Gauge',
      'Slip Gauge Set',
      'Gear Tooth Vernier',
      'Mechanical Comparator',
      'Bore Gauge',
      'Telescope Gauge',
      'Sine Bar',
      'Profile Projector',
      'Autocollimator',
      'Tool Makers Microscope',
      'Surface Finish Measuring Equipment',
      'Sine Center'
    ],
    incharge: 'Mr.R.Vinothkumar',
    technician: 'Mr. R.Gopi'
  },
  {
    name: 'Thermal Engineering Laboratory',
    equipment: 'Single Cylinder 4-Stroke Diesel Engine Test Ring With Electrical Dynamo Panel & Loading Panel, Single Cylinder 4-Stroke Slow Speed Diesel Engine Test Ring With Rope Brake Dynamo Meter Panel, Two Stage Twin Cylinder Air Compressor Test Ring With Panel, Refrigeration Test Rig, Air-Conditioning Test Rig',
    icon: Flame,
    equipments: [
      'Single Cylinder 4-Stroke Diesel Engine Test Ring With Electrical Dynamo Panel & Loading Panel',
      'Single Cylinder 4-Stroke Slow Speed Diesel Engine Test Ring With Rope Brake Dynamo Meter Panel',
      'Two Stage Twin Cylinder Air Compressor Test Ring With Panel',
      'Refrigeration Test Rig',
      'Air-Conditioning Test Rig'
    ],
    incharge: 'Mr.A.Gajendran',
    technician: 'Mr.C.Mathaiyan'
  },
  {
    name: 'Heat and Mass Transfer Laboratory',
    equipment: 'Lagged Pipe Apparatus, Natural Convection – vertical Cylinder Apparatus, Forced Convection Inside Tube Apparatus, Pin-Fin Apparatus, Stefan – Boltzmann Apparatus, Emissivity Measurement Apparatus, Parallel / Counter Flow Heat Exchanger Apparatus',
    icon: Flame,
    equipments: [
      'Lagged Pipe Apparatus',
      'Natural Convection – vertical Cylinder Apparatus',
      'Forced Convection Inside Tube Apparatus',
      'Pin-Fin Apparatus',
      'Stefan – Boltzmann Apparatus',
      'Emissivity Measurement Apparatus',
      'Parallel / Counter Flow Heat Exchanger Apparatus'
    ],
    incharge: 'Mr.P. Divagaran',
    technician: 'Mr.C.Mathaiyan'
  },
  {
    name: 'STRENGTH OF MATERIALS LABORATORY',
    equipment: 'Electronic Universal Testing Machine, Torsion Testing Machine, Impact Testing Machine, Rockwell Hardness Testing Machine, Brinell Hardness Testing Machine, Spring Testing Machine',
    icon: Layers,
    equipments: [
      'Electronic Universal Testing Machine',
      'Torsion Testing Machine',
      'Impact Testing Machine',
      'Rockwell Hardness Testing Machine',
      'Brinell Hardness Testing Machine',
      'Spring Testing Machine'
    ],
    incharge: 'Mr. L.M. Nirmal ,AP/ Civil',
    technician: 'Mr.C.Pradeep Kumar, LT/Civil'
  },
  {
    name: 'FLUID MECHANICS AND MACHINERY LABORATORY',
    equipment: 'Metacentric Height Apparatus Setup, Venturi meter setup, Friction Apparatus Setup, Centrifugal Pump Setup, Reciprocating Pump, Reaction Turbine Setup, Gear Oil Pump',
    icon: Droplets,
    equipments: [
      'Metacentric Height Apparatus Setup',
      'Venturi meter setup',
      'Friction Apparatus Setup',
      'Centrifugal Pump Setup',
      'Reciprocating Pump',
      'Reaction Turbine Setup',
      'Gear Oil Pump'
    ],
    incharge: 'Mr.B. Sathishkumar, AP/ Civil',
    technician: 'Mr. S. Selvaraj LT/Civil'
  }
]
