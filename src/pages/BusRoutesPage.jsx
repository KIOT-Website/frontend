import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bus, MapPin, Clock, ArrowLeft, Search, Navigation, Info, ShieldCheck, Calendar, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  { id: 23, from: "Mutthanayacken Patty", to: "KIOT", stops: "Mutthanayacken Patti, Paagal Patti, Reddipatti, Junction, Sona College, Ford Company, Seeragapaadi, KIOT" },
  { id: 24, from: "Pillukadai", to: "KIOT", stops: "Ponnama Pet Gate, Pillukadai, Thaathagapatti, Nilavarapatti, Panamaratthu Patti Pirivu, KIOT" },
  { id: 25, from: "Namagiripettai", to: "KIOT", stops: "Namagiri Pettai, Kakaveri, Singalanthapuram, Rasipuram, SRV School, Naachipatti, Sabayapuram, Hospital, Mariyamman Kovil (Attaiyampatti), KIOT" },
  { id: 26, from: "Ammapettai", to: "KIOT", stops: "Ammapettai, Jothi, Sarathas, Ammapettai Colony, Holy Cross, Seelanaikanpatti Bye Pass, KIOT" },
  { id: 27, from: "Mecheri", to: "KIOT", stops: "Mecheari, Tulasampatti, Tharamangalam, Kachupalli, Konganapuram, Kannandheri, KIOT" },
  { id: 28, from: "CSI School", to: "KIOT", stops: "Salem Municipality Office, Apsara Down, Annadhanapatty, Nethimedu, KIOT" },
  { id: 29, from: "Vellalapatti", to: "KIOT", stops: "Vellalapatti, Karuppur, Karumbalai, Salem New Bustand, Ram Complex, Vidhyamandhir School, 3 - Roads, Jawahar Mill, KIOT" },
  { id: 30, from: "Rangampalayam", to: "KIOT", stops: "Rangampalayam, Erode Bus Stand, Karungalpalayam, Pallipalayam, Veppadai, Sankari, KIOT" },
  { id: 31, from: "Elampillai", to: "KIOT", stops: "Sithar Kovil, Ealumathanoor, Elampillai, Vembadithalam, KIOT" }
];

const TRAVEL_PLANS = [
  {
    title: "Plan A",
    occasion: "All Working Days",
    routes: "All Routes (Routes 1 to 31)"
  },
  {
    title: "Plan B",
    occasion: "Training & Exams",
    details: [
      "Anna University Examinations Days - 1.30 pm",
      "Evening Placement Training Classes Days - 6.30 pm"
    ],
    routes: [
      "KIOT to Salem New bus stand (Via: Thiruvagoundanoor Bye Pass, RTO Bye Pass)",
      "KIOT to Salem Old Bus stand (Via: Nethimedu, Prapath)",
      "KIOT to Tharamagalam (Via: Ellampillai, Chinnapampatti)",
      "KIOT to Komarapalayam (Via: Magudanchavadi, Sankari)",
      "KIOT to Attaymapatti",
      "KIOT to Kakapalayam"
    ]
  },
  {
    title: "Plan C",
    occasion: "Special Occasions",
    details: ["Republic Day & Independence Day etc., (Holiday Flag Hosting)"],
    routes: [
      "Salem New Bus Stand to RTO Bye Pass, Ariyanoor, Kakapalayam, KIOT",
      "Adivaram, Hasthampatti, Salem Old Bus Stand, Prapath, Nethimedu, Kondalampatti, Attayampatti, KIOT",
      "Mettur, Tharamangalam, Chinnapampatti, Elampillai, KIOT",
      "Chithoor, Bhavani, Komarapalayam, Sankari, Magudanchavadi, KIOT",
      "Erode, Pallipalayam, Tiruchengode, Malasamuthiram, Attayampatti, KIOT"
    ]
  },
  {
    title: "Plan D",
    occasion: "Staff Meetings",
    routes: [
      "Salem New Bus Stand to RTO Bye Pass, Ariyanoor, Kakapalayam, KIOT",
      "Adivaram, Hasthampatti, Salem Old Bus Stand, Prapath, Nethimedu, Kondalampatti, Attayampatti, KIOT",
      "Pick up at Kakapalayam."
    ]
  }
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
    { sno: 9, stop: "7-Arts College", morning: "8:05 am", evening: "5:40 pm" },
    { sno: 10, stop: "Power House", morning: "8:14 am", evening: "5:35 pm" },
    { sno: 11, stop: "Balamurugan Kovil", morning: "8:35 am", evening: "5:15 pm" },
    { sno: 12, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  11: [
    { sno: 1, stop: "Kannakurichi", morning: "7:45 am", evening: "6:05 pm" },
    { sno: 2, stop: "Housing Unit", morning: "7:47 am", evening: "6:03 pm" },
    { sno: 3, stop: "Iyenthar Maaligahi", morning: "7:48 am", evening: "5:58 pm" },
    { sno: 4, stop: "Ramanathapuram", morning: "7:50 am", evening: "5:56 pm" },
    { sno: 5, stop: "Chinna Muniyappan Kovil", morning: "7:53 am", evening: "5:53 pm" },
    { sno: 6, stop: "Chinnathirupathi", morning: "7:55 am", evening: "5:50 pm" },
    { sno: 7, stop: "Manakkadu", morning: "7:58 am", evening: "5:47 pm" },
    { sno: 8, stop: "Gandhi Road", morning: "8:00 am", evening: "5:45 pm" },
    { sno: 9, stop: "Sundar Lodge", morning: "8:03 am", evening: "5:42 pm" },
    { sno: 10, stop: "Palace Theatre", morning: "8:05 am", evening: "5:39 pm" },
    { sno: 11, stop: "Uthamasolapuram", morning: "8:22 am", evening: "5:22 pm" },
    { sno: 12, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  12: [
    { sno: 1, stop: "Thottiyanthottam", morning: "7:25 am", evening: "6:25 pm" },
    { sno: 2, stop: "Kandhampalayam", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 3, stop: "Chithalandhur", morning: "7:35 am", evening: "6:15 pm" },
    { sno: 4, stop: "Valari Gate", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 5, stop: "Mandaga Palayam", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 6, stop: "T.Gode-Salem Road", morning: "7:58 am", evening: "5:52 pm" },
    { sno: 7, stop: "Kailasampalayam", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 8, stop: "Chinnathambi Palayam", morning: "8:03 am", evening: "5:46 pm" },
    { sno: 9, stop: "Vattur Road", morning: "8:06 am", evening: "5:43 pm" },
    { sno: 10, stop: "More Palayam", morning: "8:09 am", evening: "5:40 pm" },
    { sno: 11, stop: "Sembampalayam", morning: "8:12 am", evening: "5:37 pm" },
    { sno: 12, stop: "Kallukadai", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 13, stop: "TCMS", morning: "8:18 am", evening: "5:32 pm" },
    { sno: 14, stop: "Suriyagoundampalayam", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 15, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  13: [
    { sno: 1, stop: "Salem 5 Roads", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 2, stop: "Alagapuram", morning: "7:52 am", evening: "5:55 pm" },
    { sno: 3, stop: "Fair Lands", morning: "7:53 am", evening: "5:50 pm" },
    { sno: 4, stop: "Saradha College", morning: "7:55 am", evening: "5:48 pm" },
    { sno: 5, stop: "Ramakrishna Road", morning: "7:56 am", evening: "5:45 pm" },
    { sno: 6, stop: "Ramakrishna park", morning: "7:58 am", evening: "5:43 pm" },
    { sno: 7, stop: "Vijaya Hospital", morning: "7:59 am", evening: "5:40 pm" },
    { sno: 8, stop: "4 Roads", morning: "8:02 am", evening: "5:38 pm" },
    { sno: 9, stop: "KIOT", morning: "8:30 am", evening: "5:10 pm" }
  ],
  14: [
    { sno: 1, stop: "Salem Pilliyar Nagar", morning: "7:40 am", evening: "5:55 pm" },
    { sno: 2, stop: "T.M.S.Set", morning: "7:45 am", evening: "5:51 pm" },
    { sno: 3, stop: "Pattakovil", morning: "7:48 am", evening: "5:48 pm" },
    { sno: 4, stop: "Rajaganapathikovil", morning: "7:53 am", evening: "5:43 pm" },
    { sno: 5, stop: "Salem Old Bus Stand", morning: "8:00 am", evening: "5:40 pm" },
    { sno: 6, stop: "Line Medu", morning: "8:10 am", evening: "5:30 pm" },
    { sno: 7, stop: "Annathana Patti", morning: "8:12 am", evening: "5:28 pm" },
    { sno: 8, stop: "Neikkaarapatti", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 9, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  15: [
    { sno: 1, stop: "Aalampalayam", morning: "7:30 am", evening: "6:30 pm" },
    { sno: 2, stop: "SPB Colony", morning: "7:35 am", evening: "6:25 pm" },
    { sno: 3, stop: "Anna Nagar", morning: "7:36 am", evening: "6:22 pm" },
    { sno: 4, stop: "Kuchipalayam", morning: "7:40 am", evening: "6:17 pm" },
    { sno: 5, stop: "Varapalayam", morning: "7:42 am", evening: "6:14 pm" },
    { sno: 6, stop: "Thokkavadi", morning: "7:45 am", evening: "6:10 pm" },
    { sno: 7, stop: "Kootapalli", morning: "7:50 am", evening: "6:05 pm" },
    { sno: 8, stop: "Rajagoundampalayam", morning: "7:51 am", evening: "6:02 pm" },
    { sno: 9, stop: "Santhapettai", morning: "7:52 am", evening: "6:00 pm" },
    { sno: 10, stop: "T.Gode New-Old Bus Stand", morning: "7:55 am", evening: "5:55 pm" },
    { sno: 11, stop: "Kolikalnatham", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 12, stop: "Vadugapatti", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 13, stop: "Magudanchavadi", morning: "8:32 am", evening: "5:20 pm" },
    { sno: 14, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  16: [
    { sno: 1, stop: "Aathur", morning: "6:55 am", evening: "6:55 pm" },
    { sno: 2, stop: "Narasingapuram", morning: "7:00 am", evening: "6:50 pm" },
    { sno: 3, stop: "Selliyampalayam", morning: "7:02 am", evening: "6:47 pm" },
    { sno: 4, stop: "Kothambadi", morning: "7:05 am", evening: "6:45 pm" },
    { sno: 5, stop: "Pethanayakkanpalayam", morning: "7:15 am", evening: "6:40 pm" },
    { sno: 6, stop: "Putharagovundampalayam", morning: "7:20 am", evening: "6:35 pm" },
    { sno: 7, stop: "Valappadi", morning: "7:30 am", evening: "6:25 pm" },
    { sno: 8, stop: "Muthampatti", morning: "7:35 am", evening: "6:20 pm" },
    { sno: 9, stop: "Sashanchavadi", morning: "7:40 am", evening: "6:15 pm" },
    { sno: 10, stop: "Mettupatti", morning: "7:45 am", evening: "6:10 pm" },
    { sno: 11, stop: "Karipatti", morning: "7:48 am", evening: "6:07 pm" },
    { sno: 12, stop: "Minnampalli", morning: "7:52 am", evening: "6:02 pm" },
    { sno: 13, stop: "Authiyapattinam", morning: "7:58 am", evening: "5:55 pm" },
    { sno: 14, stop: "Udiyappatti", morning: "8:02 am", evening: "5:50 pm" },
    { sno: 15, stop: "Kumaragiri", morning: "8:07 am", evening: "5:43 pm" },
    { sno: 16, stop: "Erumapalayam", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 17, stop: "Dhivya Theatre", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 18, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  17: [
    { sno: 1, stop: "Sowdeshwari College", morning: "8:10 am", evening: "5:50 pm" },
    { sno: 2, stop: "Kondalampatty Bye Pass", morning: "8:12 am", evening: "5:48 pm" },
    { sno: 3, stop: "Kondalampatty", morning: "8:15 am", evening: "5:45 pm" },
    { sno: 4, stop: "Neikarapatti", morning: "8:17 am", evening: "5:43 pm" },
    { sno: 5, stop: "Boolavari Privu", morning: "8:20 am", evening: "5:40 pm" },
    { sno: 6, stop: "Arayanoor", morning: "8:26 am", evening: "5:35 pm" },
    { sno: 7, stop: "Veerapandi", morning: "8:28 am", evening: "5:32 pm" },
    { sno: 8, stop: "Palampatti", morning: "8:30 am", evening: "5:30 pm" },
    { sno: 9, stop: "Byrogy", morning: "8:32 am", evening: "5:28 pm" },
    { sno: 10, stop: "S-Palam", morning: "8:34 am", evening: "5:25 pm" },
    { sno: 11, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  18: [
    { sno: 1, stop: "Aachankuttapatti", morning: "7:20 am", evening: "6:45 pm" },
    { sno: 2, stop: "Salem Kuppanur", morning: "7:22 am", evening: "6:40 pm" },
    { sno: 3, stop: "Valasaiur", morning: "7:28 am", evening: "6:30 pm" },
    { sno: 4, stop: "Pallipatti", morning: "7:30 am", evening: "6:17 pm" },
    { sno: 5, stop: "Veemanuer", morning: "7:35 am", evening: "6:12 pm" },
    { sno: 6, stop: "Veeranam", morning: "7:37 am", evening: "6:10 pm" },
    { sno: 7, stop: "Manarpalayam Privu", morning: "7:37 am", evening: "6:10 pm" },
    { sno: 8, stop: "Vaikalpattari", morning: "7:39 am", evening: "6:07 pm" },
    { sno: 9, stop: "Puthu Mariyaman Kovil", morning: "7:42 am", evening: "6:04 pm" },
    { sno: 10, stop: "Water Tank", morning: "7:43 am", evening: "6:02 pm" },
    { sno: 11, stop: "Ponnamapatti Railway Gate", morning: "7:45 am", evening: "6:00 pm" },
    { sno: 12, stop: "Kanginagar", morning: "8:05 am", evening: "5:40 pm" },
    { sno: 13, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  19: [
    { sno: 1, stop: "Vanavasi", morning: "7:20 am", evening: "6:30 pm" },
    { sno: 2, stop: "Soorapalli", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 3, stop: "Jalakandapuram", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 4, stop: "Selavadi", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 5, stop: "Tharamangalam", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 6, stop: "Thuttam Patti", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 7, stop: "Chinna Pillaiyer, Pananchary", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 8, stop: "Madathur", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 9, stop: "Edangana Salai, Shengalsulai", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 10, stop: "Karikadai", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 11, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  20: [
    { sno: 1, stop: "Rayarpalayam", morning: "7:25 am", evening: "6:25 pm" },
    { sno: 2, stop: "Eliyampalayam", morning: "7:28 am", evening: "6:22 pm" },
    { sno: 3, stop: "Kumaramangalam Privu", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 4, stop: "Mettupalayam", morning: "7:32 am", evening: "6:18 pm" },
    { sno: 5, stop: "Thimmaravuthampatty", morning: "7:35 am", evening: "6:15 pm" },
    { sno: 6, stop: "Elachipalayam", morning: "7:40 am", evening: "6:10 pm" },
    { sno: 7, stop: "Kurusamy Palayam", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 8, stop: "Vayappamalai", morning: "8:00 am", evening: "5:55 pm" },
    { sno: 9, stop: "Karungalpatti", morning: "8:02 am", evening: "5:48 pm" },
    { sno: 10, stop: "Kallukadai(Akp)", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 11, stop: "Kottapalayam", morning: "8:08 am", evening: "5:42 pm" },
    { sno: 12, stop: "Kattupalayam", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 13, stop: "M.Mettupalayam", morning: "8:13 am", evening: "5:37 pm" },
    { sno: 14, stop: "Mallai-Sandhai Pavadi", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 15, stop: "Mallasamudram", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 16, stop: "Kalipatti", morning: "8:28 am", evening: "5:22 pm" },
    { sno: 17, stop: "Attyampatti", morning: "8:32 am", evening: "5:18 pm" },
    { sno: 18, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  21: [
    { sno: 1, stop: "Javuli Kadai", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 2, stop: "Gugai", morning: "8:07 am", evening: "5:43 pm" },
    { sno: 3, stop: "Prabath", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 4, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  22: [
    { sno: 1, stop: "Mettur", morning: "7:00 am", evening: "6:35 pm" },
    { sno: 2, stop: "Madha Kovil", morning: "7:02 am", evening: "6:33 pm" },
    { sno: 3, stop: "Chinna Park", morning: "7:05 am", evening: "6:30 pm" },
    { sno: 4, stop: "Sam Palli", morning: "7:15 am", evening: "6:25 pm" },
    { sno: 5, stop: "Raman Nagar", morning: "7:17 am", evening: "6:23 pm" },
    { sno: 6, stop: "Kunjandiyer", morning: "7:25 am", evening: "6:15 pm" },
    { sno: 7, stop: "Verakkal", morning: "7:35 am", evening: "6:05 pm" },
    { sno: 8, stop: "Nanga Valli", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 9, stop: "Periya Sorakai", morning: "7:52 am", evening: "5:58 pm" },
    { sno: 10, stop: "Kullanur", morning: "7:55 am", evening: "5:55 pm" },
    { sno: 11, stop: "Seranganur", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 12, stop: "Chinnapanpatti", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 13, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  23: [
    { sno: 1, stop: "Mutthunayacken Patty", morning: "7:35 am", evening: "6:10 pm" },
    { sno: 2, stop: "Paagal Patty", morning: "7:40 am", evening: "6:05 pm" },
    { sno: 3, stop: "Rrddy Patty", morning: "8:07 am", evening: "5:43 pm" },
    { sno: 4, stop: "Junction", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 5, stop: "T.P.T", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 6, stop: "State Bank Colony", morning: "8:17 am", evening: "5:33 pm" },
    { sno: 7, stop: "Ford Compay", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 8, stop: "Seeragapaddy", morning: "8:28 am", evening: "5:22 pm" },
    { sno: 9, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  24: [
    { sno: 1, stop: "Pillukadai", morning: "8:00 am", evening: "5:50 pm" },
    { sno: 2, stop: "Dhadagapatty Gate", morning: "8:02 am", evening: "5:48 pm" },
    { sno: 3, stop: "Alagu Nagar", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 4, stop: "Nilavara Patti", morning: "8:07 am", evening: "5:43 pm" },
    { sno: 5, stop: "Panamarathu Patti", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 6, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  25: [
    { sno: 1, stop: "Namagiripattai", morning: "7:30 am", evening: "6:08 pm" },
    { sno: 2, stop: "Kakaveri", morning: "7:35 am", evening: "6:03 pm" },
    { sno: 3, stop: "Singalandhapuram", morning: "7:45 am", evening: "5:53 pm" },
    { sno: 4, stop: "Rasipuram New Bustand", morning: "8:00 am", evening: "5:48 pm" },
    { sno: 5, stop: "Srv School", morning: "8:05 am", evening: "5:43 pm" },
    { sno: 6, stop: "Minnakkalprivu", morning: "8:23 am", evening: "5:28 pm" },
    { sno: 7, stop: "Nachi Patti", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 8, stop: "Sabayapuram", morning: "8:27 am", evening: "5:23 pm" },
    { sno: 9, stop: "Attayampatti Hospital & Kovil", morning: "8:30 am", evening: "5:20 pm" },
    { sno: 10, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  26: [
    { sno: 1, stop: "Ammapettai", morning: "7:50 am", evening: "6:00 pm" },
    { sno: 2, stop: "Ammapettai Jothi", morning: "7:52 am", evening: "5:58 pm" },
    { sno: 3, stop: "Saradhas", morning: "7:55 am", evening: "5:55 pm" },
    { sno: 4, stop: "Easan", morning: "7:58 am", evening: "5:52 pm" },
    { sno: 5, stop: "Ammapettai Colony", morning: "8:05 am", evening: "5:45 pm" },
    { sno: 6, stop: "Holly Cross", morning: "8:07 am", evening: "5:42 pm" },
    { sno: 7, stop: "Selanayakkanpatti Bye Pass", morning: "8:18 am", evening: "5:32 pm" },
    { sno: 8, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  27: [
    { sno: 1, stop: "Mecheri", morning: "7:20 am", evening: "6:35 pm" },
    { sno: 2, stop: "Sathapadi", morning: "7:25 am", evening: "6:28 pm" },
    { sno: 3, stop: "Kamaneri", morning: "7:28 am", evening: "6:25 pm" },
    { sno: 4, stop: "Thulasampatti", morning: "7:35 am", evening: "6:18 pm" },
    { sno: 5, stop: "Amarakunthi", morning: "7:40 am", evening: "6:13 pm" },
    { sno: 6, stop: "Pallipatti", morning: "8:00 am", evening: "5:53 pm" },
    { sno: 7, stop: "Kachupalli", morning: "8:04 am", evening: "5:48 pm" },
    { sno: 8, stop: "Mulapaathai", morning: "8:07 am", evening: "5:45 pm" },
    { sno: 9, stop: "Konganapuram", morning: "8:15 am", evening: "5:37 pm" },
    { sno: 10, stop: "Mattam Patti", morning: "8:18 am", evening: "5:33 pm" },
    { sno: 11, stop: "Kannantheri", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 12, stop: "Ondipanai", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 13, stop: "Sunda Mettur", morning: "8:22 am", evening: "5:28 pm" },
    { sno: 14, stop: "Alaganoor", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 15, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  28: [
    { sno: 1, stop: "CSI School", morning: "8:00 am", evening: "6:00 pm" },
    { sno: 2, stop: "Apsara Town", morning: "8:02 am", evening: "5:50 pm" },
    { sno: 3, stop: "Annathana Patti", morning: "8:10 am", evening: "5:41 pm" },
    { sno: 4, stop: "Nethimedu", morning: "8:13 am", evening: "5:38 pm" },
    { sno: 5, stop: "Kalyanamandabam", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 6, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  29: [
    { sno: 1, stop: "Vellalapatti", morning: "7:45 am", evening: "6:20 pm" },
    { sno: 2, stop: "Karuppur", morning: "7:55 am", evening: "6:10 pm" },
    { sno: 3, stop: "Karumbalai", morning: "8:00 am", evening: "6:05 pm" },
    { sno: 4, stop: "Salem New Bustand", morning: "8:08 am", evening: "5:44 pm" },
    { sno: 5, stop: "Ram Complex", morning: "8:10 am", evening: "5:42 pm" },
    { sno: 6, stop: "Vidhyamandhir School", morning: "8:12 am", evening: "5:40 pm" },
    { sno: 7, stop: "3 - Roads", morning: "8:18 am", evening: "5:33 pm" },
    { sno: 8, stop: "Jawahar Mill", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 9, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  30: [
    { sno: 1, stop: "Rangampalayam", morning: "7:20 am", evening: "6:30 pm" },
    { sno: 2, stop: "Employment office, Diesel shed", morning: "7:25 am", evening: "6:25 pm" },
    { sno: 3, stop: "Sooram Patti 4 Road", morning: "7:30 am", evening: "6:20 pm" },
    { sno: 4, stop: "Erode Bus Stand", morning: "7:35 am", evening: "6:15 pm" },
    { sno: 5, stop: "Karungalpalayam", morning: "7:40 am", evening: "6:12 pm" },
    { sno: 6, stop: "Register Office", morning: "7:41 am", evening: "6:10 pm" },
    { sno: 7, stop: "Pallipalayam", morning: "7:45 am", evening: "6:07 pm" },
    { sno: 8, stop: "Otta Methai", morning: "7:46 am", evening: "6:05 pm" },
    { sno: 9, stop: "Veppadai", morning: "7:58 am", evening: "5:52 pm" },
    { sno: 10, stop: "Sanniyasi Patti Railway Gate", morning: "8:03 am", evening: "5:47 pm" },
    { sno: 11, stop: "Bhavani Perivu Road", morning: "8:07 am", evening: "5:43 pm" },
    { sno: 12, stop: "Pacha Kadu", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 13, stop: "Sangari Police Station", morning: "8:12 am", evening: "5:38 pm" },
    { sno: 14, stop: "Sangari Old Bus Stand", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 15, stop: "Sangari New Bus Stand", morning: "8:18 am", evening: "5:32 pm" },
    { sno: 16, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ],
  31: [
    { sno: 1, stop: "Elampillai Santhi Studio", morning: "8:10 am", evening: "5:40 pm" },
    { sno: 2, stop: "Elampillai Bustand", morning: "8:12 am", evening: "5:37 pm" },
    { sno: 3, stop: "Elampilli Market", morning: "8:15 am", evening: "5:35 pm" },
    { sno: 4, stop: "Perumagovundampatti", morning: "8:20 am", evening: "5:30 pm" },
    { sno: 5, stop: "Vembadithalam", morning: "8:25 am", evening: "5:25 pm" },
    { sno: 6, stop: "Naduvaneari", morning: "8:28 am", evening: "5:22 pm" },
    { sno: 7, stop: "Railway Palam", morning: "8:30 am", evening: "5:20 pm" },
    { sno: 8, stop: "KIOT", morning: "8:40 am", evening: "5:10 pm" }
  ]
};

const BusRoutesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRoutes = BUS_ROUTES.filter(route => 
    route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.stops.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.id.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#FCFDFD] pb-20 font-sans">
      {/* Premium Header */}
      <div className="bg-[#18357a] pt-20 pb-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                <ArrowLeft size={16} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Back to Campus Life</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-white/60 font-black text-[10px] uppercase tracking-[8px] mb-4 block">Logistics & Connectivity</span>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-wider leading-tight">
                Bus Route <span className="text-white/80">Details</span>
              </h1>
              <p className="text-white/60 mt-4 max-w-xl font-bold text-sm leading-relaxed">
                KIOT operates a comprehensive fleet of buses across 4 districts. Click on any route to view detailed timings and stop points.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="text-right">
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Emergency / Inquiry</p>
                    <p className="text-lg font-black text-white tracking-wider leading-none">86681 53815</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-lg shadow-black/20">
                    <Phone size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 lg:px-12 -mt-20 relative z-20">
        
        {/* Quick Stats & Search */}
        <div className="bg-white rounded-[2rem] p-3 shadow-xl border-none mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search route..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-xl text-xs font-bold text-[#18357a] focus:ring-2 focus:ring-[#18357a]/10 placeholder:text-slate-400"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none px-6 py-3 bg-slate-50 rounded-xl flex items-center gap-3">
                    <Navigation size={16} className="text-[#18357a]" />
                    <div className="leading-none">
                        <span className="text-[9px] font-black text-[#18357a]/40 uppercase block mb-0.5">Fleet Total</span>
                        <span className="text-base font-black text-[#18357a]">31</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Route Table Section */}
        <div className="mb-16 overflow-hidden rounded-3xl shadow-2xl border border-slate-100">
          {/* Main Title Bar */}
          <div className="bg-[#000080] py-8 text-center px-4">
            <h2 className="text-white text-2xl md:text-3xl font-black tracking-widest leading-tight">
              Bus Route Details
            </h2>
          </div>
          
          <div className="bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-4 py-6 text-base font-black text-[#18357a] tracking-wider text-center border-r border-slate-200 w-28">
                      Route No.
                    </th>
                    <th className="px-8 py-6 text-base font-black text-[#18357a] tracking-wider border-r border-slate-200">
                      Route
                    </th>
                    <th className="px-8 py-6 text-base font-black text-[#18357a] tracking-wider text-center">
                      Bus Route
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRoutes.map((route, index) => (
                    <tr 
                      key={route.id} 
                      onClick={() => setSelectedRoute(route)}
                      className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:text-[#ffc107] transition-all duration-200 group cursor-pointer active:scale-[0.99]`}
                    >
                      <td className="px-4 py-5 border-r border-slate-200/50">
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-black group-hover:text-[#ffc107] transition-colors">
                            {route.id}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 border-r border-slate-200/50">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-lg font-black group-hover:text-[#ffc107] transition-colors leading-tight">{route.from}</span>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 tracking-tighter">
                                <span>to</span>
                                <span className="group-hover:text-[#ffc107]/60 transition-colors">KIOT</span>
                            </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-[14px] font-bold group-hover:text-[#ffc107]/80 transition-colors leading-relaxed">
                          {route.stops}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredRoutes.length === 0 && (
                <div className="p-20 text-center space-y-4 bg-slate-50">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-slate-300 shadow-sm">
                        <Search size={32} />
                    </div>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">No routes found matching your search</p>
                </div>
            )}
          </div>
        </div>

        {/* Compact Logistics Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg flex flex-col items-center text-center gap-2 hover:shadow-xl transition-all">
                <span className="text-[9px] font-black text-[#18357a]/40 uppercase tracking-widest">Attayampatty to KIOT</span>
                <span className="text-xl font-black text-[#18357a]">08:45 AM</span>
                <div className="mt-2 w-8 h-[2px] bg-slate-200 rounded-full" />
            </div>

            <div className="bg-[#18357a] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-2 hover:shadow-[#18357a]/20 transition-all border border-white/5">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">KIOT to Attayampatty</span>
                <span className="text-xl font-black text-white">05:10 PM</span>
                <div className="mt-2 w-8 h-[2px] bg-white/20 rounded-full" />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg flex flex-col items-center text-center gap-2 hover:shadow-xl transition-all">
                <span className="text-[9px] font-black text-[#18357a]/40 uppercase tracking-widest">Kakapalayam to KIOT</span>
                <span className="text-xl font-black text-[#18357a]">08:45 & 08:50</span>
                <div className="mt-2 w-8 h-[2px] bg-slate-200 rounded-full" />
            </div>

            <div className="bg-[#18357a] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-2 hover:shadow-[#18357a]/20 transition-all border border-white/5">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">KIOT to Kakapalayam</span>
                <span className="text-xl font-black text-white">05:10 PM</span>
                <div className="mt-2 w-8 h-[2px] bg-white/20 rounded-full" />
            </div>
        </div>

        {/* Travelling Plans & Operations Table */}
        <div className="mb-16 overflow-hidden rounded-3xl">
          {/* Main Title Bar */}
          <div className="bg-[#000080] py-5 text-center">
            <h2 className="text-white text-lg md:text-xl font-black tracking-widest leading-loose">
              Travelling Plan & Operations
            </h2>
          </div>
          
          <div className="bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-6 py-5 text-sm font-black text-[#18357a] tracking-wider text-center border-r border-slate-200 w-32">
                      Plan No.
                    </th>
                    <th className="px-8 py-5 text-sm font-black text-[#18357a] tracking-wider border-r border-slate-200 w-1/3">
                      Occasion & Timings
                    </th>
                    <th className="px-8 py-5 text-sm font-black text-[#18357a] tracking-wider">
                      Route Coverage / Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TRAVEL_PLANS.map((plan, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-slate-100 transition-colors group`}
                    >
                      <td className="px-6 py-4 border-r border-slate-200/50">
                        <div className="flex flex-col items-center justify-center gap-1">
                          <div className="w-8 h-8 rounded-full bg-[#18357a] text-white flex items-center justify-center text-sm font-black">
                            {plan.title.split(' ')[1]}
                          </div>
                          <span className="text-[9px] font-black text-[#18357a] uppercase">{plan.title}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4 border-r border-slate-200/50">
                        <div className="flex flex-col gap-2">
                            <span className="text-[13px] font-black text-[#18357a] uppercase leading-tight">{plan.occasion}</span>
                            {plan.details && (
                                <div className="space-y-1">
                                    {plan.details.map((detail, dIdx) => (
                                        <div key={dIdx} className="flex gap-2 text-[9px] font-bold text-slate-500 leading-tight">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#18357a]/20 mt-1 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        {Array.isArray(plan.routes) ? (
                            <div className="flex flex-col gap-2">
                                {plan.routes.map((route, rIdx) => (
                                    <div key={rIdx} className="text-[11px] font-black text-[#18357a] bg-slate-50 p-3 rounded-xl border border-slate-100 uppercase leading-tight">
                                        {route}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-[12px] font-black text-[#18357a] uppercase leading-relaxed">
                                    {plan.routes}
                                </p>
                            </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 bg-[#18357a]/5 p-8 rounded-[2rem] border-2 border-dashed border-[#18357a]/10 text-center">
            <ShieldCheck size={32} className="mx-auto text-[#18357a] mb-4 opacity-20" />
            <p className="text-sm font-bold text-[#18357a] max-w-2xl mx-auto leading-relaxed">
                KIOT is committed to safe transit. For any last-minute changes in routes due to road works or specific institutional needs, please refer to the official notice board or contact the transport manager.
            </p>
        </div>

        {/* Modal Overlay for Route Details */}
        <AnimatePresence>
          {selectedRoute && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#18357a]/95 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[3rem] shadow-2xl relative flex flex-col border border-slate-100"
              >
                {/* Refined Close Button - Smaller and repositioned */}
                <button 
                  onClick={() => setSelectedRoute(null)}
                  className="absolute right-6 top-12 z-[110] bg-[#18357a] text-white w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group border-2 border-white"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header Info with Bus driving effect */}
                <div className="shrink-0 bg-white p-8 pt-24 md:p-12 md:pt-20 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between px-10 gap-6 rounded-t-[3rem] relative overflow-hidden">
                    {/* Animated Bus Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-50 overflow-hidden">
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="h-full w-40 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent"
                        />
                    </div>
                    <div className="absolute top-1 left-4">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 20, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1, type: 'spring' }}
                            className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-b-lg border border-t-0 border-slate-200 shadow-sm"
                        >
                            <Bus size={12} className="text-[#18357a]" />
                            <span className="text-[9px] font-black text-[#18357a] uppercase tracking-widest">Bus No. {selectedRoute.id}</span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center md:items-start relative z-10">
                        <div className="flex items-center gap-4 mb-2">
                             <div className="w-12 h-12 bg-[#18357a] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#18357a]/20">
                                <Bus size={24} />
                             </div>
                             <div>
                                <h1 className="text-[18px] md:text-[28px] font-black text-[#18357a] uppercase tracking-tighter leading-none">{selectedRoute.from} Route</h1>
                             </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-[10px] font-black text-[#18357a] uppercase bg-slate-50 px-8 py-4 rounded-[1.5rem] border border-slate-100 shadow-sm">
                        <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-[#18357a] shadow-inner" /> Morning Trip</span>
                        <span className="flex items-center gap-3 border-l pl-6 border-slate-200"><div className="w-2.5 h-2.5 rounded-full bg-slate-300" /> Evening Trip</span>
                    </div>
                </div>

                {/* Detail Table Area */}
                <div className="flex-1 overflow-y-auto scrollbar-hide md:px-4 pb-8 bg-slate-50/30" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {ROUTE_DETAILS[selectedRoute.id] ? (
                      <div className="md:p-4">
                        <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white">
                          <style>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                          `}</style>
                          <table className="w-full text-left border-separate border-spacing-0">
                            <thead className="z-10">
                              <tr>
                                <th className="sticky top-0 z-20 px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-widest text-center border-b border-slate-200 bg-slate-100 shadow-[inset_0_-1px_0_rgba(226,232,240,1)]">S.No</th>
                                <th className="sticky top-0 z-20 px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-widest border-b border-slate-200 bg-slate-100 shadow-[inset_0_-1px_0_rgba(226,232,240,1)]">Bus Stop Point</th>
                                <th className="sticky top-0 z-20 px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-widest text-center border-b border-slate-200 bg-slate-100 shadow-[inset_0_-1px_0_rgba(226,232,240,1)]">Start (AM)</th>
                                <th className="sticky top-0 z-20 px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-widest text-center border-b border-slate-200 bg-slate-100 shadow-[inset_0_-1px_0_rgba(226,232,240,1)]">Return (PM)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                              {ROUTE_DETAILS[selectedRoute.id].map((detail, dIdx) => (
                                <tr key={dIdx} className="hover:bg-slate-50 transition-colors group">
                                  <td className="px-6 py-4 text-[10px] font-bold text-slate-300 text-center">{detail.sno}</td>
                                  <td className="px-6 py-4 text-[11px] font-black text-[#18357a] uppercase">{detail.stop}</td>
                                  <td className="px-6 py-4 text-[11px] font-black text-[#18357a] text-center">{detail.morning}</td>
                                  <td className="px-6 py-4 text-[11px] font-black text-[#18357a] text-center">{detail.evening}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 px-8">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                          <Bus size={40} />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[#18357a] font-black uppercase text-xs tracking-widest">Schedule Updates In Progress</p>
                          <p className="text-slate-400 font-medium text-[10px] max-w-[250px]">Detailed timings for Route {selectedRoute.id} will be available shortly.</p>
                        </div>
                        <button 
                            onClick={() => setSelectedRoute(null)}
                            className="mt-6 px-10 py-3 bg-[#18357a] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#18357a]/90 transition-all font-sans"
                        >
                            Close / Back
                        </button>
                      </div>
                    )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default BusRoutesPage;
