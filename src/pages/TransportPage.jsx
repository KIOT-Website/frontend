import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Bus, Compass, ArrowLeft, Search, Navigation, X, ShieldCheck, Phone, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import busImage from '../assets/life@kiot/collge bus.webp'

const BUS_ROUTES = [
    { id: 1, from: "KR Thoppur", to: "KIOT", stops: "KR Thoppur, Steel Plant, Maramangalathu Patty, Medical College, Pall Pannai, Sithanoor, Solampalam, KIOT" },
    { id: 2, from: "Bhavani Bus Stand", to: "KIOT", stops: "Bhavani Bus Stand, Anthiyur Pirivu, Bhavani Old Bus Stand, Kalingarayanpalayam, Lakshmi Nagar, Colony Hospital, Komarapalayam, Aangur Road, Rajam Theater, Kathari Privu, Valaiyakaranur, Pallakkapalayam, Pachampalayam, Kavandanur, ICL, Vaikundham, Thalaiyur, KIOT" },
    { id: 3, from: "Salem Prabath", to: "KIOT", stops: "Prabath, KIOT" },
    { id: 4, from: "Thevur", to: "KIOT", stops: "Kanniyalam Patti, Thevur, Maylampatti, Palakaran Kottai, Kullampatti, Moolapathai, Vellari Velli, Housing Board, Edappadi, Vellandi Valasu, Sunnambu Soolai, Rangampalayam, Perivu Road, Vellaiyampalayam, Kuthadi Palayam, Kalipatti Perivu Road, RK Theater & Mill, KIOT" },
    { id: 6, from: "Namakkal", to: "KIOT", stops: "Namakkal Bus Stand, Salem Road, Chellappampatti, Buthansanthai, Kalangani, Puthu Chathiram, Andaloor Gate, Gurusamipalayam, Vaiyappam Malai, Aathumedu, Kottapalayam, M.Mettupalayam, Mallai Santhapavadi, Mallasamuthiram, Kalippati, Attayampatty, KIOT" },
    { id: 7, from: "Sivadha Puram", to: "KIOT", stops: "Sivadha Puram, Panakadu, Thirumalai Giri, Nallampatty, Murungapatty, Chittar Kovil, K.K Nagar, Kadaiyampatty, Elampillai Santhi Studio, Elampillai Bustand, Perumagovundampatti, Vembadithalam, KIOT" },
    { id: 9, from: "Panikkanur", to: "KIOT", stops: "Panikkanur, Samuthiram, Pudhupalaym, Sadaiyampalayam, Koranampatty, Moolappathai, Pallipatti, Katchipalli, Konganapuram, Erumapatty Privu, Mattampatty, Kannantheri, Ondipannai, Sunda Mettur, Alaganur, Magudanchavadi, KIOT" },
    { id: 10, from: "Salem Yercaud Adivaaram", to: "KIOT", stops: "Salem Yercaud Adivaaram, Law College, Kollapatti, Gorimadu, Housing Board, Central Jail, Hasthampatty, Vincent, KIOT" },
    { id: 11, from: "Kannakurichi", to: "KIOT", stops: "Kannakurichi, Housing Unit, Iyenthar Maaligahi, Ramanathapuram, Chinna Muniyappan Kovil, Chinnathirupathi, Manakkadu, KIOT" },
    { id: 12, from: "Rasipuram", to: "KIOT", stops: "Rasipuram Old Bus Stand, SRV School, Attayampatty Privu, Athanoor, Aaramathampalayam, Oolaipatti, Nadupatti, Vellapillayar Kovil, Vennandur, Anna Silai, Kamarajar Silai, Sappaiyapuram, Ramalingam Hospital, Mariyamman Kovil, KIOT" },
    { id: 13, from: "Salem Vijay Hospital", to: "KIOT", stops: "Vijaya Hospital, Ramakrishnapark, Ramakrishna Road, Saradha College, Fair Lands, Alagapuram, KIOT" },
    { id: 14, from: "Salem Pilliyar Nagar", to: "KIOT", stops: "Salem Pilliyar Nagar, T.M.S.Set, Patta Kovil, Rajaganapathi Kovil, CSI School & Municipality Office, KIOT" },
    { id: 15, from: "Salem Ammapettai", to: "KIOT", stops: "Jothi School, Holy Cross School, Udayapatty By-Pass, Kumaragiri, KIOT" },
    { id: 17, from: "Sowdeshwari College", to: "KIOT", stops: "Kondalampatty Bye Pass, Kondalampatty, Sandhai Pettai, Neikarapatti, Poolavari Pirivu, Ariyanoor, Veerapandi, Palampatty, Birogy, S-Palam, Nainampatti, KIOT" },
    { id: 18, from: "Salem Kuppanur", to: "KIOT", stops: "Salem Kuppanur, Valasaiur, Pallipatti, Veemanuer, Veeranam, Manarpalayam Privu, Vaikalpattari, KIOT" },
    { id: 19, from: "Vanavasi", to: "KIOT", stops: "Vanavasi, Soorapalli, Jalakandapuram, Selavadai, Tharamangalam, Thuttam Patti, Chinna Pillaiyer Pananchary, Madathur, Edangana Salai Shengal Sulai, Karikadai, KIOT" },
    { id: 20, from: "Chekkapatti", to: "KIOT", stops: "Chekkapatti, Elachipalayam, Kumaramangalam, Valarai Gate, T.Gode Bus Stand, Kailasam Palayam, Chinnathambi Palayam, Vattur Road, More Palayam, Sembampalayam, Kallukadai, TCMS, Suriyagoundampalayam, Malasamutharam High School, Marulaiyampalayam, KIOT" },
    { id: 21, from: "Mallur", to: "KIOT", stops: "Mallur, Earikarai, Santhiur, Nilavara Patti, Alagu Nagar, KIOT" },
    { id: 22, from: "Mettur", to: "KIOT", stops: "Mettur, Madha Kovil, Chinna Park, Sam Palli, Raman Nagar, Kunjandiyer, Verakkal, Nanga Valli, Periya Sorakai, Kullanur, Seranganur, Chinnappanpatti, Elampillai, KIOT" },
    { id: 23, from: "Perumal Kovil Medu", to: "KIOT", stops: "Perumal Kovil Medu, Mutthanayacken Patty, Paagal Patty, Rrddy Patty, Junction, T.P.T Sona College, State Bank Colony, KIOT" },
    { id: 24, from: "Pillukadai", to: "KIOT", stops: "Pillukadai, Dhadagapatty Gate, KIOT" },
    { id: 25, from: "Mangalapuram", to: "KIOT", stops: "Mangalapuram, Mettala, Namagiripettai, Kakaveri, Rasipuram TVS, Rasipuram Old Bus Stand, SRV School, Masakalipatti Pirivu, KIOT" },
    { id: 26, from: "Ammapattai", to: "KIOT", stops: "Ammapattai, Ammapattai Jothi, Saradhas, Easan, KIOT" },
    { id: 27, from: "Mecheri", to: "KIOT", stops: "M A M Petrol Bunk, Meachari, Sathapadi, Kamaneri, Sinthamaniyur, Palikadai, Tharamangalam, Post Office, KIOT" },
    { id: 29, from: "Vellalapatti", to: "KIOT", stops: "Vellalappatti, Karuppur, Karumbaalai, Dalmiya, Mamangam, Sankar Theatre, Kuranguchavati, Seeragapady, KIOT" },
    { id: 30, from: "Erode Bus Stand", to: "KIOT", stops: "Erode Bus Stand, Karungalpalayam, Register Office, Pallipalayam, Otta Methai, Veppadai, Sanniyasi Patti Railway Gate, Bhavani Perivu Road, Pacha Kadu, Sangari Police Station, Sangari Old Bus Stand, Sangari New Bus Stand, Konganapuram Pirivu, KIOT" },
    { id: 31, from: "Ammapettai Jothi Stop", to: "KIOT", stops: "Ammapettai Jothi Stop, Guruvayur Kovil, Palaniyandi Hospital, KIOT" },
    { id: 32, from: "Salem Four Roads", to: "KIOT", stops: "Salem Four Roads, Salem New Bus Stand, Annapoorna Hospital, KIOT" },
    { id: 33, from: "Kootathupatti", to: "KIOT", stops: "Kootathupatti, A N Mangalam, Kullampatti, A Pattinam HR School, Ayiotheyapattinam, Udyapatty, Seelanaiyakanpatti Bye Pass, KIOT" },
    { id: 34, from: "Salem Old Bus Stand", to: "KIOT", stops: "Salem Old Bus Stand, Javulikkadai, Annathana Patti, Kalyana Mandabam, Power House, KIOT" },
    { id: 35, from: "Ponnamapettai Gate", to: "KIOT", stops: "Chennai Cakes, Puthu Mariyaman Kovil, Water Tank, Ponnammapettai Gate, Guruvayurappan Kovil, KIOT" },
    { id: 37, from: "Pudhu Road", to: "KIOT", stops: "Pudhu Road, Reddipatti By Pass, BPC Gas Bunk, AVR Roundana, RTO By Pass, Neikarappatti, Seergapadi, Rakipatti, KIOT" },
    { id: 38, from: "Vincent", to: "KIOT", stops: "Vincent, Gandhi Road, Sundar Lodge 7 Arts, Apsara Down, Nethimedu, KIOT" },
    { id: 39, from: "Dharmapuri", to: "KIOT", stops: "Dharmapuri, Nallampalli, Thomparakkampatti, Palayamputhur Toll Gate, Thoppur, Jodu Kuli, Thevatipatti, Poosari Patti, Pannapatti, Kamalapuram, Omalur Bus Stand, Puliyampatty, Toll Gate, Periyar University, Karuppur Engg. College, KIOT" },
    { id: 40, from: "Periyar University", to: "KIOT", stops: "Toll Gate Periyar University, Govt Engg College, Karumbalai, Dalmia Board, Five Road, 5 Theatre ARRS, 3 Road, Jawahar Mill, Thiruvagoundanur Bye Pass, KIOT" },
    { id: 41, from: "Panamarathupatty", to: "KIOT", stops: "Panamarathupatty, Panamarathupatty Privu, Seelanaickenpatty Bye Pass, NPR School, Divya Theatre, Kondalampatty Bye Pass, KIOT" },
    { id: 42, from: "Mettupatty Toll Gate", to: "KIOT", stops: "Mettupatty Toll Gate, Karipatty, Minnampalli, Masinaickenpatty, Erumapalayam, Sanniyasigundu, KIOT" },
    { id: 44, from: "Manakkadu", to: "KIOT", stops: "Manakkadu, Vincent, Sundar Lodge 7 Arts, Tiruvagoundanur Bye Pass, KIOT" },
    { id: 45, from: "Absara Down", to: "KIOT", stops: "Absara Down, Nethimedu, KIOT" },
    { id: 47, from: "Gorimadu", to: "KIOT", stops: "Gorimadu, Housing Board, Central Jail, Hasthampatty, Vincent, KIOT" },
    { id: 48, from: "Ramakrishna Road", to: "KIOT", stops: "Ramakrishna Road, Vijaya Hospital, Mithula Hotel, Saradha College, New Busstand, KIOT" },
    { id: 49, from: "Omalur", to: "KIOT", stops: "Omalur, Mecheri Privu, Wisdom School, Sewttipatty Privu, Tharamangalam, Chinnappampaaty, KIOT" },
    { id: 50, from: "Aalampalayam", to: "KIOT", stops: "Aalampalayam, SPB Colony, Anna Nagar, KSR College, Varappalayam, Thokkavadi, Kootapalli, Rajagoundampalayam, Santha Pettai, T.Code New-Old Bus Stand, Setharampalayam, Sangagiri RS, Kolikaal Natham, Vadugapatti, Kancham Puthur, Thalaiyur, RK Theater & Mill, KIOT" },
    { id: 51, from: "Thevur (Route 51)", to: "KIOT", stops: "Edappadi, Konganapuram, Vaiguntham, Rangampalayam, Perivu Road, Vellaiyampalayam, Kuthadi Palayam, Kalipatti Perivu Road, RK Theater & Mill, KIOT" },
    { id: 52, from: "Pakkanadu", to: "KIOT", stops: "Aadaiyur, Pakkanadu, Vannakuttai, Sowriyur, Alamaram, Jalagandapuram, Kapprathampatti, Panikkanur, Etikuttai Medu, Aegapuram, Koothampalayam, Thailampatti, Thadikaranur, Theppakuttai, Perumagovundampatti, Vembadithalam, KIOT" },
    { id: 53, from: "Tholasampatty", to: "KIOT", stops: "Thulasampatti, Amarakunthi, Tharamangalam, Post Office, KIOT" },
    { id: 54, from: "Aathur", to: "KIOT", stops: "Aathur, Narasingapuram, Selliyampalayam, Kothambadi, Pethanayakkanpalayam, Putharagovundampalayam, Valappadi, Muthampatti, Sashanchavadi, Mettupatti, KIOT" }
];

const ROUTE_DETAILS = {
    1: [
        { sno: 1, stop: "KR THOPPUR", morning: "7:20 AM", evening: "-" },
        { sno: 2, stop: "STEEL PLANT", morning: "7:30 AM", evening: "-" },
        { sno: 3, stop: "MARAMANGALATHU PATTY", morning: "7:35 AM", evening: "-" },
        { sno: 4, stop: "MEDICAL COLLEGE", morning: "7:40 AM", evening: "-" },
        { sno: 5, stop: "PALL PANNAI", morning: "7:44 AM", evening: "-" },
        { sno: 6, stop: "SITHANOOR", morning: "7:49 AM", evening: "-" },
        { sno: 7, stop: "SOLAMPALAM", morning: "7:55 AM", evening: "-" },
        { sno: 8, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    2: [
        { sno: 1, stop: "BHAVANI BUS STAND", morning: "7:15 AM", evening: "-" },
        { sno: 2, stop: "ANTHIYUR PIRIVU", morning: "7:17 AM", evening: "-" },
        { sno: 3, stop: "BHAVANI OLD BUS STAND", morning: "7:20 AM", evening: "-" },
        { sno: 4, stop: "KALINGARAYANPALAYAM", morning: "7:22 AM", evening: "-" },
        { sno: 5, stop: "LAKSHMI NAGAR", morning: "7:25 AM", evening: "-" },
        { sno: 6, stop: "COLONY HOSPITAL", morning: "7:33 AM", evening: "-" },
        { sno: 7, stop: "KOMARAPALAYAM", morning: "7:35 AM", evening: "-" },
        { sno: 8, stop: "AANGUR ROAD", morning: "7:37 AM", evening: "-" },
        { sno: 9, stop: "RAJAM THEATER", morning: "7:39 AM", evening: "-" },
        { sno: 10, stop: "KATHARI PIRIVU", morning: "7:40 AM", evening: "-" },
        { sno: 11, stop: "VALAIYAKARANUR", morning: "7:42 AM", evening: "-" },
        { sno: 12, stop: "PALLAKKAPALAYAM", morning: "7:48 AM", evening: "-" },
        { sno: 13, stop: "PACHAMPALAYAM", morning: "7:55 AM", evening: "-" },
        { sno: 14, stop: "KAVANDANUR", morning: "8:00 AM", evening: "-" },
        { sno: 15, stop: "ICL", morning: "8:02 AM", evening: "-" },
        { sno: 16, stop: "VAIKUNDHAM", morning: "8:20 AM", evening: "-" },
        { sno: 17, stop: "THALAIYUR", morning: "8:25 AM", evening: "-" },
        { sno: 18, stop: "KIOT", morning: "8:40 AM", evening: "-" }
    ],
    3: [
        { sno: 1, stop: "PRABATH", morning: "8:10 AM", evening: "-" },
        { sno: 2, stop: "KIOT", morning: "8:40 AM", evening: "-" }
    ],
    4: [
        { sno: 1, stop: "KANNIYALAM PATTI", morning: "7:10 AM", evening: "-" },
        { sno: 2, stop: "THEVUR", morning: "7:15 AM", evening: "-" },
        { sno: 3, stop: "MAYLAMPATTI", morning: "7:18 AM", evening: "-" },
        { sno: 4, stop: "PALAKARAN KOTTAI", morning: "7:25 AM", evening: "-" },
        { sno: 5, stop: "KULLAMPATTI", morning: "7:27 AM", evening: "-" },
        { sno: 6, stop: "MOOLAPATHAI", morning: "7:37 AM", evening: "-" },
        { sno: 7, stop: "VELLARI VELLI", morning: "7:47 AM", evening: "-" },
        { sno: 8, stop: "HOUSING BOARD", morning: "7:55 AM", evening: "-" },
        { sno: 9, stop: "EDAPPADI", morning: "8:00 AM", evening: "-" },
        { sno: 10, stop: "VELLANDI VALASU", morning: "8:02 AM", evening: "-" },
        { sno: 11, stop: "SUNNAMBU SOOLAI", morning: "8:05 AM", evening: "-" },
        { sno: 12, stop: "RANGAMPALAYAM", morning: "8:10 AM", evening: "-" },
        { sno: 13, stop: "PERIVU ROAD", morning: "8:13 AM", evening: "-" },
        { sno: 14, stop: "VELLAIYAMPALAYAM", morning: "8:20 AM", evening: "-" },
        { sno: 15, stop: "KUTHADI PALAYAM", morning: "8:22 AM", evening: "-" },
        { sno: 16, stop: "KALIPATTI PERIVU ROAD", morning: "8:25 AM", evening: "-" },
        { sno: 17, stop: "R.K.THEATER & MILL", morning: "8:30 AM", evening: "-" },
        { sno: 18, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    6: [
        { sno: 1, stop: "NAMAKKAL BUS STAND", morning: "7:05 AM", evening: "-" },
        { sno: 2, stop: "SALEM ROAD", morning: "7:08 AM", evening: "-" },
        { sno: 3, stop: "CHELLAPPAMPATTI", morning: "7:20 AM", evening: "-" },
        { sno: 4, stop: "BUTHANSANTHAI", morning: "7:28 AM", evening: "-" },
        { sno: 5, stop: "KALANGANI", morning: "7:32 AM", evening: "-" },
        { sno: 6, stop: "PUTHU CHATHIRAM", morning: "7:37 AM", evening: "-" },
        { sno: 7, stop: "ANDALOOR GATE", morning: "7:40 AM", evening: "-" },
        { sno: 8, stop: "GURUSAMIPALAYAM", morning: "7:44 AM", evening: "-" },
        { sno: 9, stop: "VAIYAPPAM MALAI", morning: "7:49 AM", evening: "-" },
        { sno: 10, stop: "AATHUMEDU", morning: "7:55 AM", evening: "-" },
        { sno: 11, stop: "KOTTAPALAYAM", morning: "8:00 AM", evening: "-" },
        { sno: 12, stop: "M.METTUPALAYAM", morning: "8:05 AM", evening: "-" },
        { sno: 13, stop: "MALLAI SANTHAPAVADI", morning: "8:10 AM", evening: "-" },
        { sno: 14, stop: "MALLASAMUTHIRAM", morning: "8:15 AM", evening: "-" },
        { sno: 15, stop: "KALIPPATI", morning: "8:20 AM", evening: "-" },
        { sno: 16, stop: "ATTAYAMPATTY", morning: "8:25 AM", evening: "-" },
        { sno: 17, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    7: [
        { sno: 1, stop: "SIVADHA PURAM", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "PANAKADU", morning: "7:50 AM", evening: "-" },
        { sno: 3, stop: "THIRUMALAIGIRI", morning: "7:55 AM", evening: "-" },
        { sno: 4, stop: "NALLAMPATTY", morning: "8:00 AM", evening: "-" },
        { sno: 5, stop: "MURUNGAPATTY", morning: "8:05 AM", evening: "-" },
        { sno: 6, stop: "CHITTAR KOVIL", morning: "8:10 AM", evening: "-" },
        { sno: 7, stop: "K.K NAGAR", morning: "8:15 AM", evening: "-" },
        { sno: 8, stop: "KADAIYAM PATTY", morning: "8:20 AM", evening: "-" },
        { sno: 9, stop: "ELAMPILLAI SANTHI STUDIO", morning: "8:25 AM", evening: "-" },
        { sno: 10, stop: "ELAMPILLAI BUSTAND", morning: "8:30 AM", evening: "-" },
        { sno: 11, stop: "PERUMAGOVUNDAMPATTI", morning: "8:32 AM", evening: "-" },
        { sno: 12, stop: "VEMBADITHALAM", morning: "8:35 AM", evening: "-" },
        { sno: 13, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    9: [
        { sno: 1, stop: "PANIKKANUR", morning: "7:35 AM", evening: "-" },
        { sno: 2, stop: "SAMUTHIRAM", morning: "7:39 AM", evening: "-" },
        { sno: 3, stop: "PUDHUPALAYAM", morning: "7:42 AM", evening: "-" },
        { sno: 4, stop: "SADAIYAMPALAYAM", morning: "7:45 AM", evening: "-" },
        { sno: 5, stop: "KORANAMPATTY", morning: "7:48 AM", evening: "-" },
        { sno: 6, stop: "MOOLAPATHAI", morning: "7:55 AM", evening: "-" },
        { sno: 7, stop: "PALLIPATTI", morning: "7:57 AM", evening: "-" },
        { sno: 8, stop: "KATCHIPALLI", morning: "8:00 AM", evening: "-" },
        { sno: 9, stop: "KONGANAPURAM", morning: "8:05 AM", evening: "-" },
        { sno: 10, stop: "ERUMAPATTY PRIVU", morning: "8:10 AM", evening: "-" },
        { sno: 11, stop: "MATTAMPATTY", morning: "8:12 AM", evening: "-" },
        { sno: 12, stop: "KANNANTHERI", morning: "8:15 AM", evening: "-" },
        { sno: 13, stop: "ONDIPANNAI", morning: "8:18 AM", evening: "-" },
        { sno: 14, stop: "SUNDA METTUR", morning: "8:22 AM", evening: "-" },
        { sno: 15, stop: "ALAGANUR", morning: "8:25 AM", evening: "-" },
        { sno: 16, stop: "MAGUDANCHAVADI", morning: "8:30 AM", evening: "-" },
        { sno: 17, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    10: [
        { sno: 1, stop: "SALEM YERCAUD ADIVAARAM", morning: "7:40 AM", evening: "-" },
        { sno: 2, stop: "LAW COLLEGE", morning: "7:43 AM", evening: "-" },
        { sno: 3, stop: "KOLLAPATTI", morning: "7:45 AM", evening: "-" },
        { sno: 4, stop: "GORIMADU", morning: "7:47 AM", evening: "-" },
        { sno: 5, stop: "HOUSING BOARD", morning: "7:49 AM", evening: "-" },
        { sno: 6, stop: "CENTRAL JAIL", morning: "7:52 AM", evening: "-" },
        { sno: 7, stop: "HASTHAMPATTY", morning: "7:57 AM", evening: "-" },
        { sno: 8, stop: "VINCENT", morning: "8:00 AM", evening: "-" },
        { sno: 9, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    11: [
        { sno: 1, stop: "KANNAKURICHI", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "HOUSING UNIT", morning: "7:47 AM", evening: "-" },
        { sno: 3, stop: "IYENTHAR MAALIGAHI", morning: "7:48 AM", evening: "-" },
        { sno: 4, stop: "RAMANATHAPURAM", morning: "7:50 AM", evening: "-" },
        { sno: 5, stop: "CHINNA MUNIYAPPAN KOVIL", morning: "7:53 AM", evening: "-" },
        { sno: 6, stop: "CHINNATHIRUPATHI", morning: "7:55 AM", evening: "-" },
        { sno: 7, stop: "MANAKKADU", morning: "7:58 AM", evening: "-" },
        { sno: 8, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    12: [
        { sno: 1, stop: "RASIPURAM OLD BUS STAND", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "SRV SCHOOL", morning: "7:52 AM", evening: "-" },
        { sno: 3, stop: "ATTAYAMPATTY PRIVU", morning: "7:55 AM", evening: "-" },
        { sno: 4, stop: "ATHANOOR", morning: "8:00 AM", evening: "-" },
        { sno: 5, stop: "AARAMATHAMPALAYAM", morning: "8:05 AM", evening: "-" },
        { sno: 6, stop: "OOLAIPATTI", morning: "8:10 AM", evening: "-" },
        { sno: 7, stop: "NADUPATTI", morning: "8:15 AM", evening: "-" },
        { sno: 8, stop: "VELLAPILLAYAR KOVIL", morning: "8:20 AM", evening: "-" },
        { sno: 9, stop: "VENNANDUR", morning: "8:22 AM", evening: "-" },
        { sno: 10, stop: "ANNA SILAI", morning: "8:23 AM", evening: "-" },
        { sno: 11, stop: "KAMARAJAR SILAI", morning: "8:24 AM", evening: "-" },
        { sno: 12, stop: "SAPPAIYAPURAM", morning: "8:28 AM", evening: "-" },
        { sno: 13, stop: "RAMALINGAM HOISPITAL", morning: "8:32 AM", evening: "-" },
        { sno: 14, stop: "MARIYAMMAN KOVIL", morning: "8:35 AM", evening: "-" },
        { sno: 15, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    13: [
        { sno: 1, stop: "VIJAYA HOSPITAL", morning: "8:05 AM", evening: "-" },
        { sno: 2, stop: "RAMAKRISHNAPARK", morning: "8:07 AM", evening: "-" },
        { sno: 3, stop: "RAMAKRISHNA ROAD", morning: "8:10 AM", evening: "-" },
        { sno: 4, stop: "SARADHA COLLEGE", morning: "8:12 AM", evening: "-" },
        { sno: 5, stop: "FAIR LANDS", morning: "8:14 AM", evening: "-" },
        { sno: 6, stop: "ALAGAPURAM", morning: "8:15 AM", evening: "-" },
        { sno: 7, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    14: [
        { sno: 1, stop: "SALEM PILLIYAR NAGAR", morning: "7:40 AM", evening: "-" },
        { sno: 2, stop: "T.M.S.SET", morning: "7:45 AM", evening: "-" },
        { sno: 3, stop: "PATTAKOVIL", morning: "7:48 AM", evening: "-" },
        { sno: 4, stop: "RAJAGANAPATHIKOVIL", morning: "7:53 AM", evening: "-" },
        { sno: 5, stop: "CSI SCHOOL & MUNICIPALITY OFFICE", morning: "8:00 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    15: [
        { sno: 1, stop: "JOTHI SCHOOL", morning: "7:55 AM", evening: "-" },
        { sno: 2, stop: "HOLY CROSS SCHOOL", morning: "7:57 AM", evening: "-" },
        { sno: 3, stop: "UDAYAPATTY BY-PASS", morning: "8:00 AM", evening: "-" },
        { sno: 4, stop: "KUMARAGIRI", morning: "8:05 AM", evening: "-" },
        { sno: 5, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    17: [
        { sno: 1, stop: "KONDALAMPATTY BYE PASS", morning: "8:10 AM", evening: "-" },
        { sno: 2, stop: "KONDALAMPATTY", morning: "8:12 AM", evening: "-" },
        { sno: 3, stop: "SANDHAI PETTAI", morning: "8:14 AM", evening: "-" },
        { sno: 4, stop: "NEIKARAPATTI", morning: "8:15 AM", evening: "-" },
        { sno: 5, stop: "POOLAVARI PIRIVU", morning: "8:22 AM", evening: "-" },
        { sno: 6, stop: "ARIYANOOR", morning: "8:25 AM", evening: "-" },
        { sno: 7, stop: "VEERAPANDI", morning: "8:28 AM", evening: "-" },
        { sno: 8, stop: "PALAMPATTY", morning: "8:30 AM", evening: "-" },
        { sno: 9, stop: "BIROGY", morning: "8:32 AM", evening: "-" },
        { sno: 10, stop: "S-PALAM", morning: "8:34 AM", evening: "-" },
        { sno: 11, stop: "NAINAMPATTI", morning: "8:36 AM", evening: "-" },
        { sno: 12, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    18: [
        { sno: 1, stop: "SALEM KUPPANUR", morning: "7:15 AM", evening: "-" },
        { sno: 2, stop: "VALASAIUR", morning: "7:20 AM", evening: "-" },
        { sno: 3, stop: "PALLIPATTI", morning: "7:25 AM", evening: "-" },
        { sno: 4, stop: "VEEMANUER", morning: "7:30 AM", evening: "-" },
        { sno: 5, stop: "VEERANAM", morning: "7:35 AM", evening: "-" },
        { sno: 6, stop: "MANARPALAYAM PRIVU", morning: "7:40 AM", evening: "-" },
        { sno: 7, stop: "VAIKALPATTARI", morning: "7:45 AM", evening: "-" },
        { sno: 8, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    19: [
        { sno: 1, stop: "VANAVASI", morning: "7:25 AM", evening: "-" },
        { sno: 2, stop: "SOORAPALLI", morning: "7:30 AM", evening: "-" },
        { sno: 3, stop: "JALAKANDAPURAM", morning: "7:35 AM", evening: "-" },
        { sno: 4, stop: "SELAVADI", morning: "7:45 AM", evening: "-" },
        { sno: 5, stop: "THARAMANGALAM", morning: "8:00 AM", evening: "-" },
        { sno: 6, stop: "THUTTAM PATTI", morning: "8:05 AM", evening: "-" },
        { sno: 7, stop: "CHINNA PILLAIYER, PANANCHARY", morning: "8:10 AM", evening: "-" },
        { sno: 8, stop: "MADATHUR", morning: "8:15 AM", evening: "-" },
        { sno: 9, stop: "EDANGANA SALAI,SHENGALSULAI", morning: "8:20 AM", evening: "-" },
        { sno: 10, stop: "KARIKADAI", morning: "8:25 AM", evening: "-" },
        { sno: 11, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    20: [
        { sno: 1, stop: "CHEKKAPATTI", morning: "7:25 AM", evening: "-" },
        { sno: 2, stop: "ELACHIPALAYAM", morning: "7:30 AM", evening: "-" },
        { sno: 3, stop: "KUMARAMANGALAM", morning: "7:35 AM", evening: "-" },
        { sno: 4, stop: "VALARAI GATE", morning: "7:45 AM", evening: "-" },
        { sno: 5, stop: "T.GODE-BUS STAND", morning: "7:55 AM", evening: "-" },
        { sno: 6, stop: "KAILASAM PALAYAM", morning: "8:00 AM", evening: "-" },
        { sno: 7, stop: "CHINNATHAMBI PALAYAM", morning: "8:05 AM", evening: "-" },
        { sno: 8, stop: "VATTUR ROAD", morning: "8:08 AM", evening: "-" },
        { sno: 9, stop: "MORE PALAYAM", morning: "8:10 AM", evening: "-" },
        { sno: 10, stop: "SEMBAMPALAYAM", morning: "8:15 AM", evening: "-" },
        { sno: 11, stop: "KALLUKADAI", morning: "8:18 AM", evening: "-" },
        { sno: 12, stop: "TCMS", morning: "8:20 AM", evening: "-" },
        { sno: 13, stop: "SURIYAGOUNDAMPALAYAM", morning: "8:22 AM", evening: "-" },
        { sno: 14, stop: "MALASAMUTHARAM HIGH SCHOOL", morning: "8:25 AM", evening: "-" },
        { sno: 15, stop: "MARULAIYAMPALAYAM", morning: "8:30 AM", evening: "-" },
        { sno: 16, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    21: [
        { sno: 1, stop: "MALLUR", morning: "7:55 AM", evening: "-" },
        { sno: 2, stop: "EARIKARAI", morning: "7:58 AM", evening: "-" },
        { sno: 3, stop: "SANTHIUR", morning: "8:03 AM", evening: "-" },
        { sno: 4, stop: "NILAVARA PATTI", morning: "8:15 AM", evening: "-" },
        { sno: 5, stop: "ALAGU NAGAR", morning: "8:17 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    22: [
        { sno: 1, stop: "METTUR", morning: "7:00 AM", evening: "-" },
        { sno: 2, stop: "MADHA KOVIL", morning: "7:02 AM", evening: "-" },
        { sno: 3, stop: "CHINNA PARK", morning: "7:05 AM", evening: "-" },
        { sno: 4, stop: "SAM PALLI", morning: "7:15 AM", evening: "-" },
        { sno: 5, stop: "RAMAN NAGAR", morning: "7:17 AM", evening: "-" },
        { sno: 6, stop: "KUNJANDIYER", morning: "7:25 AM", evening: "-" },
        { sno: 7, stop: "VERAKKAL", morning: "7:35 AM", evening: "-" },
        { sno: 8, stop: "NANGA VALLI", morning: "7:50 AM", evening: "-" },
        { sno: 9, stop: "PERIYA SORAKAI", morning: "7:52 AM", evening: "-" },
        { sno: 10, stop: "KULLANUR", morning: "7:55 AM", evening: "-" },
        { sno: 11, stop: "SERANGANUR", morning: "8:00 AM", evening: "-" },
        { sno: 12, stop: "CHINNAPANPATTI", morning: "8:15 AM", evening: "-" },
        { sno: 13, stop: "ELAMPILLAI", morning: "8:30 AM", evening: "-" },
        { sno: 14, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    23: [
        { sno: 1, stop: "PERUMAL KOVIL MEDU", morning: "7:40 AM", evening: "-" },
        { sno: 2, stop: "MUTTHANAYACKEN PATTY", morning: "7:45 AM", evening: "-" },
        { sno: 3, stop: "PAAGAL PATTY", morning: "7:50 AM", evening: "-" },
        { sno: 4, stop: "RRDDY PATTY", morning: "8:07 AM", evening: "-" },
        { sno: 5, stop: "JUNCTION", morning: "8:10 AM", evening: "-" },
        { sno: 6, stop: "T.P.T (SONA COLLEGE)", morning: "8:15 AM", evening: "-" },
        { sno: 7, stop: "STATE BANK COLONY", morning: "8:17 AM", evening: "-" },
        { sno: 8, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    24: [
        { sno: 1, stop: "PILLUKADAI", morning: "8:05 AM", evening: "-" },
        { sno: 2, stop: "DHADAGAPATTY GATE", morning: "8:07 AM", evening: "-" },
        { sno: 3, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    25: [
        { sno: 1, stop: "MANGALAPURAM", morning: "7:10 AM", evening: "-" },
        { sno: 2, stop: "METTALA", morning: "7:20 AM", evening: "-" },
        { sno: 3, stop: "NAMAGIRIPATTAI", morning: "7:35 AM", evening: "-" },
        { sno: 4, stop: "KAKAVERI", morning: "7:40 AM", evening: "-" },
        { sno: 5, stop: "RASIPURAM TVS", morning: "7:55 AM", evening: "-" },
        { sno: 6, stop: "RASIPURAM OLD BUS STAND", morning: "8:00 AM", evening: "-" },
        { sno: 7, stop: "SRV SCHOOL", morning: "8:03 AM", evening: "-" },
        { sno: 8, stop: "MASAKALIPATTI PIRIVU", morning: "8:08 AM", evening: "-" },
        { sno: 9, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    26: [
        { sno: 1, stop: "AMMAPATTAI", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "AMMAPATTAI JOTHI", morning: "7:47 AM", evening: "-" },
        { sno: 3, stop: "SARADHAS", morning: "7:50 AM", evening: "-" },
        { sno: 4, stop: "EASAN", morning: "7:55 AM", evening: "-" },
        { sno: 5, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    27: [
        { sno: 1, stop: "M A M PETROL BUNK", morning: "7:10 AM", evening: "-" },
        { sno: 2, stop: "MEACHARI", morning: "7:20 AM", evening: "-" },
        { sno: 3, stop: "SATHAPADI", morning: "7:25 AM", evening: "-" },
        { sno: 4, stop: "KAMANERI", morning: "7:28 AM", evening: "-" },
        { sno: 5, stop: "SINTHAMANIYUR", morning: "7:30 AM", evening: "-" },
        { sno: 6, stop: "PALIKADAI", morning: "7:35 AM", evening: "-" },
        { sno: 7, stop: "THARAMANGALAM", morning: "8:00 AM", evening: "-" },
        { sno: 8, stop: "POST OFFICE", morning: "8:02 AM", evening: "-" },
        { sno: 9, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    29: [
        { sno: 1, stop: "VELLALAPPATTI", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "KARUPPUR", morning: "7:55 AM", evening: "-" },
        { sno: 3, stop: "KARUMBAALAI", morning: "8:00 AM", evening: "-" },
        { sno: 4, stop: "DALMIYA", morning: "8:02 AM", evening: "-" },
        { sno: 5, stop: "MAMANGAM", morning: "8:05 AM", evening: "-" },
        { sno: 6, stop: "SANKAR THEATRE", morning: "8:07 AM", evening: "-" },
        { sno: 7, stop: "KURANGUCHAVATI", morning: "8:10 AM", evening: "-" },
        { sno: 8, stop: "SEERAGAPADY", morning: "8:30 AM", evening: "-" },
        { sno: 9, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    30: [
        { sno: 1, stop: "ERODE BUS STAND", morning: "7:35 AM", evening: "-" },
        { sno: 2, stop: "KARUNGALPALAYAM", morning: "7:40 AM", evening: "-" },
        { sno: 3, stop: "REGISTER OFFICE", morning: "7:41 AM", evening: "-" },
        { sno: 4, stop: "PALLIPALAYAM", morning: "7:45 AM", evening: "-" },
        { sno: 5, stop: "OTTA METHAI", morning: "7:46 AM", evening: "-" },
        { sno: 6, stop: "VEPPADAI", morning: "7:58 AM", evening: "-" },
        { sno: 7, stop: "SANNIYASI PATTI RAILWAY GATE", morning: "8:03 AM", evening: "-" },
        { sno: 8, stop: "BHAVANI PERIVU ROAD", morning: "8:07 AM", evening: "-" },
        { sno: 9, stop: "PACHA KADU", morning: "8:10 AM", evening: "-" },
        { sno: 10, stop: "SANGARI POLICE STATION", morning: "8:12 AM", evening: "-" },
        { sno: 11, stop: "SANGARI OLD BUS STAND", morning: "8:15 AM", evening: "-" },
        { sno: 12, stop: "SANGARI NEW BUS STAND", morning: "8:18 AM", evening: "-" },
        { sno: 13, stop: "KONGANAPURAM PIRIVU", morning: "8:20 AM", evening: "-" },
        { sno: 14, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    31: [
        { sno: 1, stop: "AMMAPETTAI (JOTHI STOP)", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "GURUVAYUR KOVIL", morning: "7:52 AM", evening: "-" },
        { sno: 3, stop: "PALANIYANDI HOSPITAL", morning: "7:55 AM", evening: "-" },
        { sno: 4, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    32: [
        { sno: 1, stop: "SALEM FOUR ROADS", morning: "8:05 AM", evening: "-" },
        { sno: 2, stop: "SALEM NEW BUS STAND", morning: "8:07 AM", evening: "-" },
        { sno: 3, stop: "ANNAPOORNA HOSPITAL", morning: "8:35 AM", evening: "-" },
        { sno: 4, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    33: [
        { sno: 1, stop: "KOOTATHUPATTI", morning: "7:55 AM", evening: "-" },
        { sno: 2, stop: "A N MANGALAM", morning: "8:05 AM", evening: "-" },
        { sno: 3, stop: "KULLAMPATTI", morning: "8:06 AM", evening: "-" },
        { sno: 4, stop: "A PATTINAM HR SCHOOL", morning: "8:07 AM", evening: "-" },
        { sno: 5, stop: "AYIOTHEYAPATTINAM", morning: "8:00 AM", evening: "-" },
        { sno: 6, stop: "UDYAPATTY", morning: "8:10 AM", evening: "-" },
        { sno: 7, stop: "SEELANAIYAKANPATTI BYE PASS", morning: "8:30 AM", evening: "-" },
        { sno: 8, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    34: [
        { sno: 1, stop: "SALEM OLD BUS STAND", morning: "8:05 AM", evening: "-" },
        { sno: 2, stop: "JAVULIKKADAI", morning: "8:07 AM", evening: "-" },
        { sno: 3, stop: "ANNATHANA PATTI", morning: "8:10 AM", evening: "-" },
        { sno: 4, stop: "KALYANA MANDABAM", morning: "8:14 AM", evening: "-" },
        { sno: 5, stop: "POWER HOUSE", morning: "8:15 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    35: [
        { sno: 1, stop: "CHENNAI CAKES", morning: "7:40 AM", evening: "-" },
        { sno: 2, stop: "PUTHU MARIYAMAN KOVIL", morning: "7:44 AM", evening: "-" },
        { sno: 3, stop: "WATER TANK", morning: "7:46 AM", evening: "-" },
        { sno: 4, stop: "PONNAMMAPETTAI GATE", morning: "7:50 AM", evening: "-" },
        { sno: 5, stop: "GURUVAYURAPPAN KOVIL", morning: "7:52 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    37: [
        { sno: 1, stop: "PUDHU ROAD", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "REDDIPATTI BY PASS", morning: "7:52 AM", evening: "-" },
        { sno: 3, stop: "BPC GAS BUNK", morning: "7:55 AM", evening: "-" },
        { sno: 4, stop: "AVR ROUNDANA", morning: "8:00 AM", evening: "-" },
        { sno: 5, stop: "RTO BY PASS", morning: "8:05 AM", evening: "-" },
        { sno: 6, stop: "NEIKARAPPATTI", morning: "8:15 AM", evening: "-" },
        { sno: 7, stop: "SEERGAPADI", morning: "8:20 AM", evening: "-" },
        { sno: 8, stop: "RAKIPATTI", morning: "8:25 AM", evening: "-" },
        { sno: 9, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    38: [
        { sno: 1, stop: "VINCENT", morning: "7:55 AM", evening: "-" },
        { sno: 2, stop: "GANDHI ROAD", morning: "7:58 AM", evening: "-" },
        { sno: 3, stop: "SUNDAR LODGE -7 ARTS", morning: "8:02 AM", evening: "-" },
        { sno: 4, stop: "APSARA DOWN", morning: "8:07 AM", evening: "-" },
        { sno: 5, stop: "NETHIMEDU", morning: "8:15 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    39: [
        { sno: 1, stop: "DHARMAPURI", morning: "6:40 AM", evening: "-" },
        { sno: 2, stop: "NALLAMPALLI", morning: "6:50 AM", evening: "-" },
        { sno: 3, stop: "THOMPARAKKAMPATTI", morning: "6:55 AM", evening: "-" },
        { sno: 4, stop: "PALAYAMPUTHUR TOLL GATE", morning: "7:00 AM", evening: "-" },
        { sno: 5, stop: "THOPPUR", morning: "7:10 AM", evening: "-" },
        { sno: 6, stop: "JODU KULI", morning: "7:20 AM", evening: "-" },
        { sno: 7, stop: "THEVATIPATTI", morning: "7:25 AM", evening: "-" },
        { sno: 8, stop: "POOSARI PATTI", morning: "7:30 AM", evening: "-" },
        { sno: 9, stop: "PANNAPATTI", morning: "7:35 AM", evening: "-" },
        { sno: 10, stop: "KAMALAPURAM", morning: "7:40 AM", evening: "-" },
        { sno: 11, stop: "OMALUR BUS STAND", morning: "7:45 AM", evening: "-" },
        { sno: 12, stop: "PULIYAMPATTY", morning: "7:48 AM", evening: "-" },
        { sno: 13, stop: "TOLL GATE", morning: "7:50 AM", evening: "-" },
        { sno: 14, stop: "PERIYAR UNIVERSITY", morning: "7:52 AM", evening: "-" },
        { sno: 15, stop: "KARUPPUR ENGG. COLLEGE", morning: "8:00 AM", evening: "-" },
        { sno: 16, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    40: [
        { sno: 1, stop: "TOLL GATE ( PERIYAR UNIVERSITY)", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "GOVT ENGG COLLEGE", morning: "7:55 AM", evening: "-" },
        { sno: 3, stop: "KARUMBALAI", morning: "7:58 AM", evening: "-" },
        { sno: 4, stop: "DALMIA BOARD", morning: "8:02 AM", evening: "-" },
        { sno: 5, stop: "FIVE ROAD", morning: "8:12 AM", evening: "-" },
        { sno: 6, stop: "5 THEATRE (ARRS)", morning: "8:15 AM", evening: "-" },
        { sno: 7, stop: "3 ROAD", morning: "8:17 AM", evening: "-" },
        { sno: 8, stop: "JAWAHAR MILL", morning: "8:20 AM", evening: "-" },
        { sno: 9, stop: "THIRUVAGOUNDANUR BYE PASS", morning: "8:22 AM", evening: "-" },
        { sno: 10, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    41: [
        { sno: 1, stop: "PANAMARATHUPATTY", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "PANAMARATHUPATTY PRIVU", morning: "7:55 AM", evening: "-" },
        { sno: 3, stop: "SEELANAICKENPATTY BYE PASS", morning: "7:58 AM", evening: "-" },
        { sno: 4, stop: "NPR SCHOOL", morning: "8:02 AM", evening: "-" },
        { sno: 5, stop: "DIVYA THEATRE", morning: "8:12 AM", evening: "-" },
        { sno: 6, stop: "KONDALAMPATTY BYE PASS", morning: "8:15 AM", evening: "-" },
        { sno: 7, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    42: [
        { sno: 1, stop: "METTUPATTY TOLL GATE", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "KARIPATTY", morning: "7:48 AM", evening: "-" },
        { sno: 3, stop: "MINNAMPALLI", morning: "7:50 AM", evening: "-" },
        { sno: 4, stop: "MASINAICKENPATTY", morning: "7:55 AM", evening: "-" },
        { sno: 5, stop: "ERUMAPALAYAM", morning: "8:05 AM", evening: "-" },
        { sno: 6, stop: "SANNIYASIGUNDU", morning: "8:10 AM", evening: "-" },
        { sno: 7, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    44: [
        { sno: 1, stop: "MANAKKADU", morning: "7:58 AM", evening: "-" },
        { sno: 2, stop: "VINCENT", morning: "8:00 AM", evening: "-" },
        { sno: 3, stop: "SUNDAR LODGE, 7 ARTS", morning: "8:00 AM", evening: "-" },
        { sno: 4, stop: "TIRUVAGOUNDANUR BYE PASS", morning: "8:20 AM", evening: "-" },
        { sno: 5, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    45: [
        { sno: 1, stop: "ABSARA DOWN", morning: "7:45 AM", evening: "-" },
        { sno: 2, stop: "NETHIMEDU", morning: "7:55 AM", evening: "-" },
        { sno: 3, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    47: [
        { sno: 1, stop: "GORIMADU", morning: "7:47 AM", evening: "-" },
        { sno: 2, stop: "HOUSING BOARD", morning: "7:49 AM", evening: "-" },
        { sno: 3, stop: "CENTRAL JAIL", morning: "7:52 AM", evening: "-" },
        { sno: 4, stop: "HASTHAMPATTY", morning: "7:57 AM", evening: "-" },
        { sno: 5, stop: "VINCENT", morning: "8:00 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    48: [
        { sno: 1, stop: "RAMAKRISHNA ROAD", morning: "8:10 AM", evening: "-" },
        { sno: 2, stop: "VIJAYA HOSPITAL", morning: "8:15 AM", evening: "-" },
        { sno: 3, stop: "MITHULA HOTEL", morning: "8:17 AM", evening: "-" },
        { sno: 4, stop: "SARADHA COLLEGE", morning: "8:12 AM", evening: "-" },
        { sno: 5, stop: "NEW BUSSTAND", morning: "8:20 AM", evening: "-" },
        { sno: 6, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    49: [
        { sno: 1, stop: "OMALUR", morning: "7:40 AM", evening: "-" },
        { sno: 2, stop: "MECHERI PRIVU", morning: "7:45 AM", evening: "-" },
        { sno: 3, stop: "WISDOM SCHOOL", morning: "7:50 AM", evening: "-" },
        { sno: 4, stop: "SEWTTIPATTY PRIVU", morning: "7:50 AM", evening: "-" },
        { sno: 5, stop: "THARAMANGALAM", morning: "8:00 AM", evening: "-" },
        { sno: 6, stop: "CHINNAPPAMPAATY", morning: "8:10 AM", evening: "-" },
        { sno: 7, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    50: [
        { sno: 1, stop: "AALAMPALAYAM", morning: "7:15 AM", evening: "-" },
        { sno: 2, stop: "SPB COLONY", morning: "7:17 AM", evening: "-" },
        { sno: 3, stop: "ANNA NAGAR", morning: "7:19 AM", evening: "-" },
        { sno: 4, stop: "K.S.R COLLEGE", morning: "7:24 AM", evening: "-" },
        { sno: 5, stop: "VARAPPALAYAM", morning: "7:28 AM", evening: "-" },
        { sno: 6, stop: "THOKKAVADI", morning: "7:30 AM", evening: "-" },
        { sno: 7, stop: "KOOTAPALLI", morning: "7:32 AM", evening: "-" },
        { sno: 8, stop: "RAJAGOUNDAMPALAYAM", morning: "7:35 AM", evening: "-" },
        { sno: 9, stop: "SANTHA PETTAI", morning: "7:37 AM", evening: "-" },
        { sno: 10, stop: "T.CODE NEW-OLD BUS STAND", morning: "7:45 AM", evening: "-" },
        { sno: 11, stop: "SETHARAMPALAYAM", morning: "7:50 AM", evening: "-" },
        { sno: 12, stop: "SANGAGIRI RS", morning: "7:55 AM", evening: "-" },
        { sno: 13, stop: "KOLIKAAL NATHAM", morning: "8:10 AM", evening: "-" },
        { sno: 14, stop: "VADUGAPATTI", morning: "8:20 AM", evening: "-" },
        { sno: 15, stop: "KANCHAM PUTHUR", morning: "8:25 AM", evening: "-" },
        { sno: 16, stop: "THALAIYUR", morning: "8:30 AM", evening: "-" },
        { sno: 17, stop: "R.K.THEATER & MILL", morning: "8:32 AM", evening: "-" },
        { sno: 18, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    51: [
        { sno: 1, stop: "EDAPPADI", morning: "8:00 AM", evening: "-" },
        { sno: 2, stop: "KONGANAPURAM", morning: "8:02 AM", evening: "-" },
        { sno: 3, stop: "VAIGUNTHAM", morning: "8:05 AM", evening: "-" },
        { sno: 4, stop: "RANGAMPALAYAM", morning: "8:10 AM", evening: "-" },
        { sno: 5, stop: "PERIVU ROAD", morning: "8:13 AM", evening: "-" },
        { sno: 6, stop: "VELLAIYAMPALAYAM", morning: "8:20 AM", evening: "-" },
        { sno: 7, stop: "KUTHADI PALAYAM", morning: "8:22 AM", evening: "-" },
        { sno: 8, stop: "KALIPATTI PERIVU ROAD", morning: "8:25 AM", evening: "-" },
        { sno: 9, stop: "R.K.THEATER & MILL", morning: "8:30 AM", evening: "-" },
        { sno: 10, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    52: [
        { sno: 1, stop: "AADAIYUR", morning: "7:10 AM", evening: "-" },
        { sno: 2, stop: "PAKKANADU", morning: "7:13 AM", evening: "-" },
        { sno: 3, stop: "VANNAKUTTAI", morning: "7:15 AM", evening: "-" },
        { sno: 4, stop: "SOWRIYUR", morning: "7:18 AM", evening: "-" },
        { sno: 5, stop: "ALAMARAM", morning: "7:20 AM", evening: "-" },
        { sno: 6, stop: "JALAGANDAPURAM", morning: "7:30 AM", evening: "-" },
        { sno: 7, stop: "KAPPRATHAMPATTI", morning: "7:35 AM", evening: "-" },
        { sno: 8, stop: "PANIKKANUR", morning: "7:40 AM", evening: "-" },
        { sno: 9, stop: "ETIKUTTAI MEDU", morning: "8:00 AM", evening: "-" },
        { sno: 10, stop: "AEGAPURAM", morning: "8:05 AM", evening: "-" },
        { sno: 11, stop: "KOOTHAMPALAYAM", morning: "8:10 AM", evening: "-" },
        { sno: 12, stop: "THAILAMPATTI", morning: "8:13 AM", evening: "-" },
        { sno: 13, stop: "THADIKARANUR", morning: "8:15 AM", evening: "-" },
        { sno: 14, stop: "THEPPAKUTTAI", morning: "8:17 AM", evening: "-" },
        { sno: 15, stop: "PERUMAGOVUNDAMPATTI", morning: "8:25 AM", evening: "-" },
        { sno: 16, stop: "VEMBADITHALAM", morning: "8:30 AM", evening: "-" },
        { sno: 17, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    53: [
        { sno: 1, stop: "THULASAMPATTI", morning: "7:50 AM", evening: "-" },
        { sno: 2, stop: "AMARAKUNTHI", morning: "7:55 AM", evening: "-" },
        { sno: 3, stop: "THARAMANGALAM", morning: "8:00 AM", evening: "-" },
        { sno: 4, stop: "POST OFFICE", morning: "8:02 AM", evening: "-" },
        { sno: 5, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ],
    54: [
        { sno: 1, stop: "AATHUR", morning: "6:45 AM", evening: "-" },
        { sno: 2, stop: "NARASINGAPURAM", morning: "6:50 AM", evening: "-" },
        { sno: 3, stop: "SELLIYAMPALAYAM", morning: "6:52 AM", evening: "-" },
        { sno: 4, stop: "KOTHAMBADI", morning: "6:55 AM", evening: "-" },
        { sno: 5, stop: "PETHANAYAKKANPALAYAM", morning: "7:05 AM", evening: "-" },
        { sno: 6, stop: "PUTHARAGOVUNDAMPALAYAM", morning: "7:10 AM", evening: "-" },
        { sno: 7, stop: "VALAPPADI", morning: "7:20 AM", evening: "-" },
        { sno: 8, stop: "MUTHAMPATTI", morning: "7:25 AM", evening: "-" },
        { sno: 9, stop: "SASHANCHAVADI", morning: "7:30 AM", evening: "-" },
        { sno: 10, stop: "METTUPATTI", morning: "7:35 AM", evening: "-" },
        { sno: 11, stop: "KIOT ARRIVAL", morning: "8:40 AM", evening: "-" }
    ]
};

const formatStopName = (name) => {
    if (!name) return "";
    return name.toLowerCase().split(' ').map(word => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const upperCases = ['icl', 'kiot', 'rto', 'tvs', 'srv', 'ksr', 'tcms', 'bpc', 'avr', 'sld', 'mam', 'am', 'pm', 'nh', 'kr', 'spb'];
        if (upperCases.includes(cleanWord.toLowerCase())) {
            return word.toUpperCase();
        }
        const match = word.match(/[a-z]/i);
        if (match) {
            const idx = match.index;
            return word.slice(0, idx) + word.charAt(idx).toUpperCase() + word.slice(idx + 1);
        }
        return word;
    }).join(' ');
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
                                <h2 className="text-lg font-semibold text-[#ffc107] tracking-[2px] uppercase">Campus Transport</h2>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-[#224292] tracking-tighter leading-none">
                                Building <span className="text-[#ffc107]">Convenience</span> <br />
                                For Every Student
                            </h2>
                        </div>

                        <p className="text-black font-bold text-base md:text-lg leading-relaxed text-justify">
                            Knowledge Institute of Technology (KIOT) operates extensive bus services for students and faculty, covering an 80 km radius across Salem, Namakkal, Dharmapuri, and Erode districts. Our fleet is maintained to the highest safety standards to ensure a comfortable commute.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="tel:9790019191"
                                className="inline-flex items-center gap-4 bg-[#224292] hover:bg-[#1a3475] px-5 py-3.5 rounded-2xl border border-transparent shadow-lg shadow-black/10 transition-all duration-300 group"
                            >
                                <div className="w-9 h-9 rounded-xl bg-[#ffc107] text-[#224292] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                                    <Phone size={16} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest leading-none mb-1">Transport Manager</p>
                                    <p className="text-sm font-bold text-white mb-0.5">Sekar S</p>
                                    <p className="text-xs font-medium text-white/80 leading-none">9790019191</p>
                                </div>
                            </a>

                            <a
                                href="tel:9750917595"
                                className="inline-flex items-center gap-4 bg-[#ffc107] hover:bg-[#e0a800] px-5 py-3.5 rounded-2xl border border-transparent shadow-lg shadow-black/10 transition-all duration-300 group"
                            >
                                <div className="w-9 h-9 rounded-xl bg-[#224292] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                                    <Phone size={16} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[9px] font-bold text-[#224292]/70 uppercase tracking-widest leading-none mb-1">Asst. Transport Manager</p>
                                    <p className="text-sm font-bold text-[#224292] mb-0.5">Shankarkumar N</p>
                                    <p className="text-xs font-medium text-[#224292]/90 leading-none">9750917595</p>
                                </div>
                            </a>
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

            <div className="max-w-[96vw] xl:max-w-[1550px] mx-auto px-2 md:px-4 mt-16">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200/80">
                    {/* Search Bar Section */}
                    <div className="p-6 md:p-8 bg-[#224292] flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none mb-2">Bus Route Directory</h3>
                            <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{BUS_ROUTES.length} Active Routes • 4 Districts Covered</p>
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

                    <div className="w-full overflow-x-hidden">
                        <table className="w-full text-left table-fixed border-separate border-spacing-0">
                            <thead>
                                <tr className="bg-slate-50 relative z-[999]">
                                    <th className="hidden sm:table-cell px-4 py-4 text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wider text-center w-[8%] border-b border-slate-200 bg-slate-50 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] relative">No.</th>
                                    <th className="px-4 py-4 text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wider w-[36%] sm:w-[24%] border-b border-slate-200 bg-slate-50 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] relative">From</th>
                                    <th className="px-4 py-4 text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wider w-[59%] sm:w-[63%] border-b border-slate-200 bg-slate-50 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] relative">Route Stops (Click for Timings)</th>
                                    <th className="px-4 py-4 text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wider w-[5%] text-right border-b border-slate-200 bg-slate-50 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] relative"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRoutes.map((route, idx) => {
                                    const isSandal = idx % 2 === 0;
                                    const rowBg = isSandal ? "bg-[#FCFAF6]" : "bg-white";
                                    const hoverBg = isSandal ? "group-hover:bg-[#FAF6F0]" : "group-hover:bg-slate-50/50";
                                    return (
                                        <motion.tr
                                            key={route.id}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.02 }}
                                            onClick={() => setSelectedRoute(route)}
                                            className="group cursor-pointer active:scale-[0.99] relative"
                                            style={{ zIndex: filteredRoutes.length - idx }}
                                        >
                                            <td className={`hidden sm:table-cell px-4 py-4 border-b border-slate-100 ${rowBg} ${hoverBg} transition-colors text-center shadow-[0_4px_6px_-4px_rgba(0,0,0,0.12)] relative`}>
                                                <div className="w-10 h-10 rounded-lg bg-[#224292]/5 flex items-center justify-center text-[#224292] font-medium text-sm transition-all mx-auto">
                                                    {route.id}
                                                </div>
                                            </td>
                                            <td className={`px-4 py-4 border-b border-slate-100 ${rowBg} ${hoverBg} transition-colors shadow-[0_4px_6px_-4px_rgba(0,0,0,0.12)] relative`}>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-800 transition-colors">{route.from}</span>
                                                    <span className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mt-0.5">To KIOT</span>
                                                </div>
                                            </td>
                                            <td className={`px-4 py-4 border-b border-slate-100 ${rowBg} ${hoverBg} transition-colors shadow-[0_4px_6px_-4px_rgba(0,0,0,0.12)] relative`}>
                                                <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed break-words">{route.stops}</p>
                                            </td>
                                            <td className={`px-4 py-4 border-b border-slate-100 ${rowBg} ${hoverBg} transition-colors text-right shadow-[0_4px_6px_-4px_rgba(0,0,0,0.12)] relative`}>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#ffc107]/20 flex items-center justify-center text-[#224292] transition-colors shrink-0 shadow-sm ml-auto">
                                                    <ChevronRight size={16} />
                                                </div>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
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

                    <div className="p-8 bg-[#FAF6F0] border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="text-[#224292]" size={24} />
                            <p className="text-xs font-semibold text-[#224292]">
                                Click on any route row to view detailed morning timings.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#ffc107]/10 px-4 py-2.5 rounded-lg border border-[#ffc107]/30 text-xs text-[#224292] font-semibold">
                            <span className="font-bold text-[#ffc107] uppercase tracking-wider mr-1">Note:</span> Students, Faculty and Staff can come 5 min. earlier to their bus stop.
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
                            className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative flex flex-col border border-slate-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedRoute(null)}
                                className="absolute right-6 top-8 z-[110] bg-[#224292] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl hover:bg-[#ffc107] hover:text-[#224292] transition-all group"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-6 md:p-12 border-b border-slate-100 bg-white shrink-0">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-[#ffc107] rounded-2xl flex items-center justify-center text-[#224292] shadow-lg shrink-0">
                                        <Bus size={28} />
                                    </div>
                                    <div>
                                        <h1 className="text-xl md:text-3xl font-black text-[#224292] tracking-tighter leading-none uppercase">{selectedRoute.from} Route</h1>
                                        <p className="text-[10px] md:text-xs font-black text-[#ffc107] tracking-[3px] uppercase mt-1">Bus Number {selectedRoute.id}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-8">
                                    <div className="w-3 h-3 rounded-full bg-[#ffc107]" />
                                    <span className="text-[10px] font-black text-[#224292] uppercase tracking-widest">Official Route Timings (Morning Trip)</span>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto px-6 md:px-12 pb-8 md:pb-12 bg-white">
                                {ROUTE_DETAILS[selectedRoute.id] ? (
                                    <table className="w-full text-left table-auto border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="hidden sm:table-cell py-3.5 text-[10px] font-black text-[#224292] uppercase tracking-widest text-center border-b border-slate-100 w-20">S.No</th>
                                                <th className="py-3.5 text-[10px] font-black text-[#224292] uppercase tracking-widest border-b border-slate-100">Stop Point</th>
                                                <th className="py-3.5 text-[10px] font-black text-[#224292] uppercase tracking-widest text-center border-b border-slate-100 w-36">Start Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ROUTE_DETAILS[selectedRoute.id].map((detail, dIdx) => (
                                                <tr key={dIdx} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="hidden sm:table-cell py-3 text-[11px] font-medium text-slate-400 text-center border-b border-slate-100/50">{detail.sno}</td>
                                                    <td className="py-3 text-[12px] font-medium text-slate-700 break-words border-b border-slate-100/50">{formatStopName(detail.stop)}</td>
                                                    <td className="py-3 text-[12px] font-semibold text-[#224292] text-center border-b border-slate-100/50">{detail.morning}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
