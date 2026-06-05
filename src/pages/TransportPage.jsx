import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Bus, Compass, ArrowLeft, Search, Navigation, X, ShieldCheck, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import busImage from '../assets/life@kiot/collge bus.webp'

const BUS_ROUTES = [
  { id: 1, from: "KR Thoppur", to: "KIOT", stops: "K.R. Thoppur, Maramangalathu Patti, Steel Plant, Paul Pannai, Pudhu Road, RTO Bye-Pass, KIOT" },
  { id: 2, from: "Reliance Bunk", to: "KIOT", stops: "Reliance Bunk, Komarapalayam, ICL, Sankari, Vaikundham, KIOT" },
  { id: 3, from: "Chithaar", to: "KIOT", stops: "Chithar, Bhavani Bus Stand, Lakshmi Nagar, Valaiyakaranoor, Muniyappan Kovil, Pachampalayam, Kuppanoor Bye Pass, Thaaliyur, KIOT" },
  { id: 4, from: "Thevur", to: "KIOT", stops: "Kaaniyalam Patti, Thevoor, Idappadi, Vellayampalayam, Kalipatti Pirivu Road, RK Mandapam, KIOT" },
  { id: 6, from: "Namakkal", to: "KIOT", stops: "Namakkal, Buthansanthai, Aandalur Gate, Mallur, Atthanoor, VP Kovil, Vennanthur, KIOT" },
  { id: 7, from: "Sivadha Puram", to: "KIOT", stops: "Sivadhapuram, Thirumalai Giri, Murungapatti, Chitthar Kovil, Reddiyur, KK Nagar,Kadaiyaampatti, Elampillai, Vembadithalam, KIOT" },
  { id: 8, from: "Sowriyur", to: "KIOT", stops: "Showriyur, Samuthiram, Ettikuttamedu, Aegapuram, theppakuttaiI, Thaadikaranoor, Kolippur, Elampillai, Vembadithalam, KIOT" },
  { id: 9, from: "Dharmapuri", to: "KIOT", stops: "Dharmapuri, Nallampalli, Thoppur, Theevattipatti, Kamalapuram, Omalur, Karuppur, Mamangam, Koranguchavadi, Thiruvagoundanoor Bye Pass, Chinna Seeragapadi, KIOT" },
  { id: 10, from: "Yercaud Adivaram", to: "KIOT", stops: "Adivaaram, Law College, Kollapatti, Gorimedu, Asthampatti, Vincent, Collector Office, Netthimedu, Kalyana Mandabam, KIOT" },
  { id: 11, from: "Kannankuruchi", to: "KIOT", stops: "Kannakuruchi, Judge Road, Chinna Thirupathi, Muniyappan Kovil, Manakkadu, Pillaiyar Nagar, Maravaneri, Sundar Lodge, Palace Theater, Valluvar Silai, Apsara Down, Uthamasolapuram, KIOT" },
  { id: 12, from: "Thottiyanthottam", to: "KIOT", stops: "Vellur, Paramatthi, Kanthampalayam, Sitthaalanthoor,Housing Board, Valarai Gate, Salem Road, Kailasampalayam, Kallukadai, TCMS, Suriya Goundam Palayam, KIOT" },
  { id: 13, from: "Salem 5 Roads", to: "KIOT", stops: "Five Road, Alagapuram, Sarada College, Ramakrishna Park, Vijiya Hospital, Four Roads, KIOT" },
  { id: 14, from: "Salem Pilliyar Nagar", to: "KIOT", stops: "Pillaiyar Nagar, Patta Kovil, Raja Ganapathi Kovil, Old Bus Stand, Line Medu, Annathaana Patti, Neikkaara Patti, KIOT" },
  { id: 15, from: "Aalampalayam", to: "KIOT", stops: "Aalampalayam, SPB Colony, Anjipanai, KSR College, Thokkavadi, Kootapalli, Tiruchengode, Kozhikaal Nattham, Vaduga Patti, Magudanchavadi, KIOT" },
  { id: 16, from: "Attur", to: "KIOT", stops: "Attur, Pathanaikanpalayam, Vazhappadi, Mutthampatti, Sesanchavadi, Mettupatti, Karipatti, Minnampalli, Ayothiyapattinam, Udayapatti, Sanniyasi Gundu, Erumapalayam, Seelanaickenpatti Bye Pass, Divya Theater, KIOT" },
  { id: 17, from: "Sowdeshwari College", to: "KIOT", stops: "Sowdeshwari College, Kondalampatti Bye Pass, Kondalampatti, Poolavari Privu, Ariyanoor, Veerapandi, Paalampatti, S.Palam, KIOT" },
  { id: 18, from: "Salem Kuppanur", to: "KIOT", stops: "Kuppanoor, Valasiyur, Palli Patti, Veeranam, Thaathampatti, Mannaar Palayam Pirivu, Vaaikka Pattarai, Ammapet, Holycross, KIOT" },
  { id: 19, from: "Vanavasi", to: "KIOT", stops: "Vanavaasi, Soorapalli, Jalakandapuram, Selavadai, Tharamangalam, Madathur, Karikadai, KIOT" },
  { id: 20, from: "Rayarpalayam", to: "KIOT", stops: "Raayar Palayam, Unjanai, Kumaramangalam Pirivu, Mettu Palayam, Elachipalayam, Vaiyappam Malai, Morangam, Kotta Palayam, Mallasamuthiram Sandai Pavadi, Mallasamuthiram, Kalipatti, Attaiyampatti, KIOT" },
  { id: 21, from: "Javuli Kadai (Salem)", to: "KIOT", stops: "Javuli Kadai, Gugai, Pirapath, KIOT" },
  { id: 22, from: "Mettur", to: "KIOT", stops: "Mettur Bus Stand, Gunjandiyur, Veerakal, Nangavalli, Sooragai, Chinnappam Patti, Elampillai, KIOT" },
  { id: 23, from: "Mutthanayacken Patty", to: "KIOT", stops: "Mutthanayacken Patty, Paagal Patty, Reddipatti, Junction, Sona College, Ford Company, Seeragapaadi, KIOT" },
  { id: 24, from: "Pillukadai", to: "KIOT", stops: "Ponnama Pet Gate, Pillukadai, Thaathagapatti, Nilavarapatti, Panamaratthu Patti Pirivu, KIOT" },
  { id: 25, from: "Namagiripettai", to: "KIOT", stops: "Namagiri Pettai, Kakaveri, Singalanthapuram, Rasipuram, SRV School, Naachipatti, Sabayapuram, Hospital, Mariyamman Kovil (Attaiyampatti), KIOT" },
  { id: 26, from: "Ammapettai", to: "KIOT", stops: "Ammapettai, Jothi, Sarathas, Ammapettai Colony, Holy Cross, Seelanaikanpatti Bye Pass, KIOT" },
  { id: 27, from: "Mecheri", to: "KIOT", stops: "Mecheari, Tulasampatti, Tharamangalam, Kachupalli, Konganapuram, Kannandheri, KIOT" },
  { id: 28, from: "CSI School", to: "KIOT", stops: "Salem Municipality Office, Apsara Down, Annadhanapatty, Nethimedu, KIOT" },
  { id: 29, from: "Vellalapatti", to: "KIOT", stops: "Vellalapatti, Karuppur, Karumbalai, Salem New Bustand, Ram Complex, Vidhyamandhir School, 3 - Roads, Jawahar Mill, KIOT" },
  { id: 30, from: "Rangampalayam", to: "KIOT", stops: "Rangampalayam, Erode Bus Stand, Karungalpalayam, Pallipalayam, Veppadai, Sankari, KIOT" },
  { id: 31, from: "Elampillai", to: "KIOT", stops: "Sithar Kovil, Ealumathanoor, Elampillai, Vembadithalam, KIOT" }
];

const ROUTE_DETAILS = {
  1: [
    { sno: 1, stop: "KR Thoppur", morning: "7:25 am", evening: "6:10 pm" },
    { sno: 2, stop: "Steel Plant", morning: "7:35 am", evening: "5:57 pm" },
    { sno: 3, stop: "Maramangalathu Patty", morning: "7:40 am", evening: "5:52 pm" },
    { sno: 4, stop: "Medical College", morning: "7:55 am", evening: "5:47 pm" },
    { sno: 5, stop: "Pall Pannai", morning: "8:00 am", evening: "5:42 pm" },
    { sno: 6, stop: "Sithanoor", morning: "8:01 am", evening: "5:40 pm" },
    { sno: 7, stop: "Solampalam", morning: "8:05 am", evening: "5:35 pm" },
    { sno: 8, stop: "Puthu Road", morning: "8:07 am", evening: "5:33 pm" },
    { sno: 9, stop: "RDO Bye Pass", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 10, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  2: [
    { sno: 1, stop: "Reliance Bunk", morning: "7:40 am", evening: "6:00 pm" },
    { sno: 2, stop: "Colony Hospital", morning: "7:42 am", evening: "5:57 pm" },
    { sno: 3, stop: "Kumarapalayam", morning: "7:45 am", evening: "5:55 pm" },
    { sno: 4, stop: "Aangur Road", morning: "7:47 am", evening: "5:53 pm" },
    { sno: 5, stop: "Rajam Theater", morning: "7:49 am", evening: "5:51 pm" },
    { sno: 6, stop: "Kathari Perivu", morning: "7:50 am", evening: "5:50 pm" },
    { sno: 7, stop: "Kavandanur", morning: "8:02 am", evening: "5:40 pm" },
    { sno: 8, stop: "ICL", morning: "8:03 am", evening: "5:39 pm" },
    { sno: 9, stop: "Konganapuram Privuroad", morning: "8:15 am", evening: "5:37 pm" },
    { sno: 10, stop: "RTO - Office Toll Gate", morning: "8:18 am", evening: "5:34 pm" },
    { sno: 11, stop: "Vaigundham", morning: "8:20 am", evening: "5:32 pm" },
    { sno: 12, stop: "Thalaiyur", morning: "8:24 am", evening: "5:28 pm" },
    { sno: 13, stop: "Kaligovundampalayam", morning: "8:26 am", evening: "5:26 pm" },
    { sno: 14, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  3: [
    { sno: 1, stop: "Chithaar", morning: "7:15 am", evening: "6:40 pm" },
    { sno: 2, stop: "Kuttamuniappan Kovil", morning: "7:20 am", evening: "6:33 pm" },
    { sno: 3, stop: "3 Road", morning: "7:23 am", evening: "6:30 pm" },
    { sno: 4, stop: "Kurappanaaikkanpalayam", morning: "7:28 am", evening: "6:25 pm" },
    { sno: 5, stop: "Bhavani New Bus Stand", morning: "7:33 am", evening: "6:20 pm" },
    { sno: 6, stop: "Anthiyur Perivu", morning: "7:35 am", evening: "6:18 pm" },
    { sno: 7, stop: "Bhavani Old Bustand", morning: "7:38 am", evening: "6:15 pm" },
    { sno: 8, stop: "Kalingarayanpalayam", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 9, stop: "Lakshminagar", morning: "7:43 am", evening: "6:07 pm" },
    { sno: 10, stop: "Valayakaranur", morning: "7:53 am", evening: "5:57 pm" },
    { sno: 11, stop: "Tan India", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 12, stop: "Muniappan Kovil", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 13, stop: "Pachampalayam", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 14, stop: "Chinnagovundanur Bye Pass", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 15, stop: "Kuppanur Bye Pass", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 16, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  4: [
    { sno: 1, stop: "Kanniyalam Patti", morning: "7:25 am", evening: "6:15 pm" },
    { sno: 2, stop: "Thevur", morning: "7:40 am", evening: "6:00 pm" },
    { sno: 3, stop: "Maylampatti", morning: "7:42 am", evening: "5:58 pm" },
    { sno: 4, stop: "Moolapathai", morning: "7:45 am", evening: "5:55 pm" },
    { sno: 5, stop: "Kunchampalayam", morning: "7:49 am", evening: "5:51 pm" },
    { sno: 6, stop: "Edappadi", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 7, stop: "Vellandi Valasu", morning: "8:02 am", evening: "5:48 pm" },
    { sno: 8, stop: "Sunnambu Soolai", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 9, stop: "Rangampalayam", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 10, stop: "Perivu Road", morning: "8:12 am", evening: "5:38 pm" },
    { sno: 11, stop: "Velliyampalayam", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 12, stop: "Kuthadi Palayam", morning: "8:17 am", evening: "5:33 pm" },
    { sno: 13, stop: "Kalipatti Perivu Road", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 14, stop: "R.K.Theater & Mill", morning: "8:30 am", evening: "5:20 pm" },
    { sno: 15, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  6: [
    { sno: 1, stop: "Namakkal Bus Stand", morning: "7:15 am", evening: "6:25 pm" },
    { sno: 2, stop: "Salem Road", morning: "7:18 am", evening: "6:21 pm" },
    { sno: 3, stop: "Chellappampatti", morning: "7:30 am", evening: "6:16 pm" },
    { sno: 4, stop: "Buthansanthai", morning: "7:35 am", evening: "6:11 pm" },
    { sno: 5, stop: "Kalangani", morning: "7:38 am", evening: "6:08 pm" },
    { sno: 6, stop: "Puthu Chathiram", morning: "7:45 am", evening: "6:05 pm" },
    { sno: 7, stop: "Andaloor Gate", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 8, stop: "Mallur", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 9, stop: "Amman Kovil", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 10, stop: "Attayampatti Privu", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 11, stop: "Athanoor", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 12, stop: "Vellapillayar Kovil", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 13, stop: "Venanthur", morning: "8:30 am", evening: "5:20 pm" },
    { sno: 14, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  7: [
    { sno: 1, stop: "Sivadha Puram", morning: "7:45 am", evening: "6:15 pm" },
    { sno: 2, stop: "Panakadu", morning: "7:50 am", evening: "6:10 pm" },
    { sno: 3, stop: "Thirumalaigiri", morning: "7:55 am", evening: "6:05 pm" },
    { sno: 4, stop: "Nallampatty", morning: "8:00 am", evening: "6:00 pm" },
    { sno: 5, stop: "Murungapatty", morning: "8:05 am", evening: "5:55 pm" },
    { sno: 6, stop: "Chittar Kovil", morning: "8:10 am", evening: "5:50 pm" },
    { sno: 7, stop: "K.K Nagar", morning: "8:15 am", evening: "5:45 pm" },
    { sno: 8, stop: "Kadaiyam Patty", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 9, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  8: [
    { sno: 1, stop: "Sowriyur", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 2, stop: "Jalagandapuram Market", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 3, stop: "Kapparthampatti", morning: "7:45 am", evening: "6:05 pm" },
    { sno: 4, stop: "Karikampatti", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 5, stop: "Panikkanur", morning: "7:53 am", evening: "5:57 pm" },
    { sno: 6, stop: "Etikuttai Medu", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 7, stop: "Aegapuram", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 8, stop: "Theppakuttai", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 9, stop: "Thailampatti & Kolipur", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 10, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  9: [
    { sno: 1, stop: "Dharmapuri", morning: "6:40 am", evening: "7:10 pm" },
    { sno: 2, stop: "Nallampalli", morning: "6:50 am", evening: "7:00 pm" },
    { sno: 3, stop: "Thomparakkampatti", morning: "6:55 am", evening: "6:55 pm" },
    { sno: 4, stop: "Palayamputhur Toll Gate", morning: "7:00 am", evening: "6:50 pm" },
    { sno: 5, stop: "Thoppur", morning: "7:10 am", evening: "6:40 pm" },
    { sno: 6, stop: "Jodu Kuli", morning: "7:20 am", evening: "6:30 pm" },
    { sno: 7, stop: "Thevatipatti", morning: "7:25 am", evening: "6:25 pm" },
    { sno: 8, stop: "Poosari Patti", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 9, stop: "Pannapatti", morning: "7:35 am", evening: "6:15 pm" },
    { sno: 10, stop: "Kamalapuram", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 11, stop: "Omalur Bus Stand", morning: "7:45 am", evening: "6:05 pm" },
    { sno: 12, stop: "Puliyampatty", morning: "7:48 am", evening: "6:02 pm" },
    { sno: 13, stop: "Toll Gate", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 14, stop: "Periyar University", morning: "7:52 am", evening: "5:58 pm" },
    { sno: 15, stop: "Karumbalai", morning: "7:59 am", evening: "5:51 pm" },
    { sno: 16, stop: "Dalmiya", morning: "8:01 am", evening: "5:50 pm" },
    { sno: 17, stop: "Sankar Theatre", morning: "8:04 am", evening: "5:47 pm" },
    { sno: 18, stop: "Kuranguchavati", morning: "8:06 am", evening: "5:45 pm" },
    { sno: 19, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  10: [
    { sno: 1, stop: "Salem Yercaud Adivaaram", morning: "7:45 am", evening: "6:10 pm" },
    { sno: 2, stop: "Law College", morning: "7:48 am", evening: "6:08 pm" },
    { sno: 3, stop: "Kollapatti", morning: "7:50 am", evening: "6:06 pm" },
    { sno: 4, stop: "Gorimadu", morning: "7:52 am", evening: "6:04 pm" },
    { sno: 5, stop: "Housing Board", morning: "7:54 am", evening: "6:02 pm" },
    { sno: 6, stop: "Central Jail", morning: "7:57 am", evening: "5:57 pm" },
    { sno: 7, stop: "Hasthampatty", morning: "8:00 am", evening: "5:55 pm" },
    { sno: 8, stop: "Vincent", morning: "8:03 am", evening: "5:42 pm" },
    { sno: 10, stop: "Power House", morning: "8:14 am", evening: "5:35 pm" },
    { sno: 11, stop: "Balamurugan Kovil", morning: "8:35 am", evening: "5:15 pm" },
    { sno: 12, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ]
};

const TransportPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRoute, setSelectedRoute] = useState(null);
    const routesRef = useRef(null);

    const filteredRoutes = BUS_ROUTES.filter(route => 
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.stops.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.id.toString().includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            <div className="max-w-7xl mx-auto px-6 py-10 relative z-20 border-b border-slate-100">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 bg-[#224292] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                                    <Bus size={20} />
                                </div>
                                <h2 className="text-xl font-black text-[#ffc107] tracking-[2px] uppercase">Campus Transport</h2>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter leading-none">
                                Building <span className="text-[#ffc107]">Convenience</span> <br/> 
                                For Every Student
                            </h2>
                        </div>

                        <p className="text-black font-bold text-base md:text-lg leading-relaxed text-justify">
                            Knowledge Institute of Technology (KIOT) operates extensive bus services for students and faculty, covering an 80 km radius across Salem, Namakkal, Dharmapuri, and Erode districts. Our fleet is maintained to the highest safety standards to ensure a comfortable commute.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                             <div className="flex items-center gap-3 bg-[#224292]/5 px-6 py-3 rounded-2xl border border-[#224292]/10">
                                <Phone size={18} className="text-[#224292]" />
                                <div>
                                    <p className="text-[10px] font-black text-[#224292]/40 uppercase leading-none mb-1">Emergency Help</p>
                                    <p className="text-sm font-black text-[#224292]">86681 53815</p>
                                </div>
                             </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-slate-50 rounded-[2rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-white group-hover:border-[#ffc107]/20 transition-all duration-500">
                            <img 
                                src={busImage} 
                                alt="KIOT Transport Fleet" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
                    {/* Search Bar Section */}
                    <div className="p-8 bg-[#224292] flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2">Bus Route Directory</h3>
                            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">31 Active Routes • 4 Districts Covered</p>
                        </div>
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search by area or route no..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all font-bold text-sm"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-xs font-black text-[#224292] uppercase tracking-[2px] text-center w-24">No.</th>
                                    <th className="px-8 py-5 text-xs font-black text-[#224292] uppercase tracking-[2px]">From</th>
                                    <th className="px-8 py-5 text-xs font-black text-[#224292] uppercase tracking-[2px]">Route Stops (Click for Timings)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredRoutes.map((route, idx) => (
                                    <motion.tr 
                                        key={route.id}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.02 }}
                                        onClick={() => setSelectedRoute(route)}
                                        className="group hover:bg-slate-50 transition-all cursor-pointer active:scale-[0.99]"
                                    >
                                        <td className="px-8 py-5">
                                            <div className="w-10 h-10 rounded-lg bg-[#ffc107]/10 flex items-center justify-center text-[#224292] font-black group-hover:bg-[#ffc107] transition-all">
                                                {route.id}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-base font-black text-[#224292] group-hover:text-[#ffc107] transition-colors">{route.from}</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">To KIOT</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <p className="text-sm font-bold text-slate-600 leading-relaxed group-hover:text-[#224292] transition-colors">{route.stops}</p>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredRoutes.length === 0 && (
                            <div className="p-20 text-center">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                    <Search size={32} />
                                </div>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No routes found matching your search</p>
                            </div>
                        )}
                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="text-[#ffc107]" size={24} />
                            <p className="text-xs font-bold text-slate-500">
                                Click on any route row to view detailed morning and evening timings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay for Route Details */}
            <AnimatePresence>
            {selectedRoute && (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-[#224292]/95 backdrop-blur-xl"
                >
                <motion.div 
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[3rem] shadow-2xl relative flex flex-col border border-slate-100 overflow-hidden"
                >
                    <button 
                        onClick={() => setSelectedRoute(null)}
                        className="absolute right-6 top-8 z-[110] bg-[#224292] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl hover:bg-[#ffc107] hover:text-[#224292] transition-all group"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8 md:p-12 border-b border-slate-100 bg-white shrink-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-[#ffc107] rounded-2xl flex items-center justify-center text-[#224292] shadow-lg">
                                <Bus size={28} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-[#224292] tracking-tighter leading-none uppercase">{selectedRoute.from} Route</h1>
                                <p className="text-xs font-black text-[#ffc107] tracking-[3px] uppercase mt-1">Bus Number {selectedRoute.id}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#224292]" />
                                <span className="text-[10px] font-black text-[#224292] uppercase tracking-widest">Morning Trip</span>
                            </div>
                            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
                                <div className="w-3 h-3 rounded-full bg-slate-300" />
                                <span className="text-[10px] font-black text-[#224292] uppercase tracking-widest">Evening Trip</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-slate-50/50">
                        {ROUTE_DETAILS[selectedRoute.id] ? (
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="px-6 py-4 text-[10px] font-black text-[#224292] uppercase tracking-widest text-center border-b border-slate-100">S.No</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-[#224292] uppercase tracking-widest border-b border-slate-100">Stop Point</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-[#224292] uppercase tracking-widest text-center border-b border-slate-100">Start (AM)</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-[#224292] uppercase tracking-widest text-center border-b border-slate-100">Return (PM)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {ROUTE_DETAILS[selectedRoute.id].map((detail, dIdx) => (
                                            <tr key={dIdx} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="px-6 py-4 text-[11px] font-bold text-slate-400 text-center">{detail.sno}</td>
                                                <td className="px-6 py-4 text-[12px] font-black text-[#224292] uppercase">{detail.stop}</td>
                                                <td className="px-6 py-4 text-[12px] font-black text-[#224292] text-center">{detail.morning}</td>
                                                <td className="px-6 py-4 text-[12px] font-black text-[#224292] text-center">{detail.evening}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-20 text-center space-y-4">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-slate-200">
                                    <Bus size={40} />
                                </div>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Schedule Updates In Progress</p>
                            </div>
                        )}
                    </div>
                </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default TransportPage
