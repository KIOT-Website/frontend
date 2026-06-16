import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen,
  Search,
  FileText,
  Bookmark,
  ShieldCheck,
  History
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const DEPT_STATS = [
    { c: 'B.E Mech', t: 581, v: 3606 },
    { c: 'B.E Civil', t: 554, v: 2826 },
    { c: 'B.E CSE', t: 598, v: 2835 },
    { c: 'B.E ECE', t: 679, v: 2973 },
    { c: 'B.E EEE', t: 631, v: 2913 },
    { c: 'B.E E & CE', t: 141, v: 510 },
    { c: 'B.Tech. IT', t: 360, v: 1758 },
    { c: 'B.Tech. CSBS', t: 370, v: 1768 },
    { c: 'B.Tech. AI & DS', t: 305, v: 1511 },
    { c: 'M.E CSE', t: 284, v: 1106 },
    { c: 'M.E ISE', t: 285, v: 1188 },
    { c: 'M.E EST', t: 279, v: 1109 },
    { c: 'M.E VLSI', t: 280, v: 1112 },
    { c: 'MBA', t: 1095, v: 7309 },
    { c: 'MBA-IEV', t: 294, v: 1399 },
    { c: 'M.E AE', t: 54, v: 205 },
    { c: 'M.E PED', t: 52, v: 221 },
    { c: 'M.E SE', t: 57, v: 210 },
    { c: 'MCA', t: 185, v: 691 },
    { c: 'Science and Humanities', t: 360, v: 1350 }
]

const RARE_BOOKS = [
    { s: 1, t: "The King's English", a: "Fowler H.W, Fowler F.G", p: "Oxford at the Clarendon Press", y: 1954 },
    { s: 2, t: "Air Conditioning and Refrigeration", a: "William H. Severns, Julian R. Fellows", p: "John Wiley & Sons,Inc, London", y: 1958 },
    { s: 3, t: "Rings of Continuous Functions", a: "Gillman and Jerison", p: "Van Nostrand Company ,Affiliated East-West Press Pvt, Ltd, New Delhi.", y: 1960 },
    { s: 4, t: "Indroduction to Radar Systems", a: "Merrill I Skolnik", p: "Mcgraw-Hill Book Company", y: 1962 },
    { s: 5, t: "Measure Theory", a: "Paul R. Halmos", p: "Van Nostrand Company ,Affiliated East-West Press Pvt, Ltd, New Delhi.", y: 1962 },
    { s: 6, t: "An Introduction to Electrical Drawing Part I", a: "Gibbins", p: "Blackie & Son Limited, London and Glasgow", y: 1963 },
    { s: 7, t: "An Introduction to Riemannian Geometry and the Tensor calculus", a: "Weatherburn C.E", p: "Cambridge Universtiy Press", y: 1963 },
    { s: 8, t: "Intermediate Engineering Drawing", a: "Parkinson A C", p: "The English language book society, London", y: 1964 },
    { s: 9, t: "Physical Chemistry", a: "Mee A J", p: "The English Language Book Society", y: 1964 },
    { s: 10, t: "An Introduction to Electro Chemistry", a: "Samuel, Glasstone", p: "Van Nostrand Company,Affiliated East-West Press Pvt, Ltd, New Delhi.", y: 1965 },
    { s: 11, t: "An Introduction to Probability Theory and its Applications Volume II", a: "William Feller", p: "Wiley Eastern Limited ,New Delhi", y: 1966 },
    { s: 12, t: "Dynamics of A Particle and of Rigid Bodies", a: "Loney S.L", p: "Macmillan London Limited", y: 1966 },
    { s: 13, t: "Elements of Heat Engines", a: "Pandya N C", p: "Charotar Book Stall, W.Rly", y: 1967 },
    { s: 14, t: "Applied Thermodynamics", a: "Vallentine H R", p: "Springer", y: 1967 },
    { s: 15, t: "Elements of Applied Mechanics", a: "Junnarkar S B", p: "Charotar Book Stall, W.Rly", y: 1967 },
    { s: 16, t: "Elements of Physical Metallurgy", a: "Guy A G", p: "Oxford & IBH Publishing Co.", y: 1967 },
    { s: 17, t: "Machine Tool Design Vol 2", a: "Fedotyonok A, Yermakov V", p: "MIR Publishers", y: 1968 },
    { s: 18, t: "A Text Book on Applied Mathematics", a: "Wartikar P N, Wartikar J N", p: "A V Griha Prakashan", y: 1968 },
    { s: 19, t: "The Electric Welder", a: "Tsegelsky V", p: "MIR Publishers, Moscow", y: 1968 },
    { s: 20, t: "Linear Topological Spaces", a: "Kelley J.L, I. Namioka", p: "Van Nostrand Company-Affiliated East-West Press Pvt, Ltd, New Delhi.", y: 1968 },
    { s: 21, t: "Sound An Introductory Text-Book", a: "Govinda Rajan S.R, Murugaiyan T", p: "Rochouse & Sons Pvt, Madras-1", y: 1968 },
    { s: 22, t: "The Analysis of Laminated Composite Structures", a: "Lee R. Calcote", p: "Van Nostrand Reinhold Company", y: 1969 },
    { s: 23, t: "Mechanical Measurements", a: "Thomas G.Beckwith, N.Lewis Buck", p: "Oxford & IBH Publishing Co.", y: 1969 },
    { s: 24, t: "Basic Chess Endings", a: "Reuben Fine", p: "David Mckay Company, New York", y: 1969 },
    { s: 25, t: "A Guide to Patterns and Usage in English", a: "Hornby A. S", p: "The English Language Book Society, and Oxford University Press", y: 1969 },
    { s: 26, t: "Mathematical Methods in Physics and Engineering", a: "John W. Dettman", p: "McGraw Hill, New York", y: 1969 },
    { s: 27, t: "Communicative Algebra Volume I", a: "Oscar Zariski, Pierre Samuel", p: "Van Nostrand Company ,Affiliated East-West Press Pvt, Ltd, New Delhi.", y: 1969 },
    { s: 28, t: "Rings and Modules", a: "Paulo Ribenboim", p: "Interscience Publishers, London", y: 1969 },
    { s: 29, t: "An Introduction To Nonassociative Algebras", a: "Richar D. Schafer", p: "Academic Press,New York and London", y: 1969 },
    { s: 30, t: "Audel's Power Plant Engineers Guide", a: "Graham, Frank D", p: "D.B.Taraporevala Sons & Co Pvt Ltd; Bombay, 1970", y: 1970 },
    { s: 31, t: "Management fot the Smaller Company", a: "Elizabeth Marting", p: "D.B Taraporevala sons & Co, Bombay", y: 1970 },
    { s: 32, t: "The Corporate Planning Process", a: "Melville C Branch", p: "D.B Taraporevala sons & Co, Bombay", y: 1970 },
    { s: 33, t: "Design of Steel and Timber Structure", a: "Ramamrutham S", p: "Dhanpat Rai & sons, Delhi", y: 1970 },
    { s: 34, t: "Teaching English as a Foreign Language", a: "Gurrey P", p: "The English Language Book Society,London.", y: 1970 },
    { s: 35, t: "Weaving Calculations", a: "Sen Gupts R", p: "Taraporevala Sons & Co Bombay", y: 1971 },
    { s: 36, t: "Mechanics of Structures", a: "Junnarkar S B", p: "Vivek Publications, Bombay", y: 1972 },
    { s: 37, t: "Letter Assembly in Printing", a: "Wooldridge", p: "Focal Press, Newyork", y: 1972 },
    { s: 38, t: "How to Paly Winning Chess", a: "Fred Reinfeld", p: "Bantam Books, New York", y: 1972 },
    { s: 39, t: "Mechanics(Statics & Dynamics)", a: "Dharmapadam A V", p: "N/A", y: 1972 },
    { s: 40, t: "The Art and Craft of Writing", a: "Gorky M, Mayakovsky, Tolstoy A, Fedin K", p: "Progress Publishers,Moscow", y: 1972 },
    { s: 41, t: "The Teaching of Structural words and sentence patterns", a: "Hornby A S", p: "The English language book society", y: 1973 },
    { s: 42, t: "Metallurgy for Engineers", a: "Rollason E.C", p: "The English Language Book Society", y: 1973 },
    { s: 43, t: "Organic Chemistry Vol 1", a: "I L Finar", p: "The English Language Book Society", y: 1973 },
    { s: 44, t: "English Grammar A Linguistic study of its classes and structures", a: "Scott Bowley-Brockett Brown - Goddard", p: "The English Language Book Society", y: 1973 },
    { s: 45, t: "The Reader's Digest Great Encyclopaedic Dictionary", a: "N/A", p: "The Reader's Digest Association, London.", y: 1974 },
    { s: 46, t: "Structures", a: "Marshall & Nelson H M", p: "The English Language Book Society", y: 1974 },
    { s: 47, t: "Government and Politics in India (Since 1858 A.D)", a: "-", p: "-", y: 1974 },
    { s: 48, t: "Worked examples in Electrical Technology", a: "Theraja B L", p: "S.Chand & Company LTD, Delhi", y: 1975 },
    { s: 49, t: "Fundamentals of Electrical Safety", a: "Manoilov V", p: "MIR Publishers, Moscow", y: 1975 },
    { s: 50, t: "A Guide for Teachers and Parents On the Teaching of Modern Mathematics at the Primary Level", a: "Richard A. Pereira S.J", p: "Frank Bros. & Co, Delhi", y: 1975 },
    { s: 51, t: "History of India (from 1526 A.D) Ancillary", a: "-", p: "-", y: 1975 },
    { s: 52, t: "Kandhapuranam", a: "Ramasamy Pulavar", p: "Kazhagam", y: 1975 },
    { s: 53, t: "Structural Welding", a: "Chavan V K", p: "Dhanpat Rai & sons, Delhi", y: 1976 },
    { s: 54, t: "abc's of Air Conditioning", a: "Ernest Tricomi", p: "D.B Taraporevala sons & Co, Bombay", y: 1976 },
    { s: 55, t: "Structural Welding", a: "Chavan V K", p: "Dhanpat Rai & sons, Delhi", y: 1976 },
    { s: 56, t: "Principles of Metal Working", a: "Surender Kumar", p: "Oxford & IBH Publishing Co.", y: 1976 },
    { s: 57, t: "I Love the Word Impossible", a: "Ann Kiemel", p: "Tyndale House Publishers, England", y: 1976 },
    { s: 58, t: "Fundamentals of Machine Design", a: "Orlow P", p: "MIR Publishers, Moscow", y: 1976 },
    { s: 59, t: "Advanced Accounts", a: "Shukla M C, Grewal T S", p: "S.Chand & Co", y: 1976 },
    { s: 60, t: "Comparative Government", a: "N/A", p: "N/A", y: 1976 },
    { s: 61, t: "Introduction to Work Study", a: "Geneva", p: "Universal Book Corporation", y: 1977 },
    { s: 62, t: "Workshop Technology theory & Practice", a: "Gupta K N, Kaushish J P", p: "New Heights", y: 1977 },
    { s: 63, t: "Welding Technology", a: "Gupta K N, Kaushish J P", p: "New Heights", y: 1977 },
    { s: 64, t: "Engineering Physical Metallurgy", a: "Lakhtin Y", p: "MIR Publishers, Moscow", y: 1977 },
    { s: 65, t: "Automation in Electrical Power Systems", a: "Zabolotny P I", p: "MIR Publishers, Moscow", y: 1977 },
    { s: 66, t: "Maintenance Engineering Handbook", a: "Lindley R. Higgins, Editor-in- Chief Morrow L.C", p: "McGraw Hill, New York", y: 1977 },
    { s: 67, t: "The Monument Builders", a: "Robert Wernick", p: "Time Life Books", y: 1977 },
    { s: 68, t: "Metal Process Engineering", a: "Polukhin P, Grinberg B, Kantenik, Zhadan D, Vasilyev", p: "Mir Publishers, Moscow", y: 1977 },
    { s: 69, t: "Electronics Designer's Handbook", a: "Giacoletto L J", p: "McGraw Hill, New York", y: 1977 },
    { s: 70, t: "Geometrical Drawing for Art Students", a: "Morris I. H", p: "Durga Prasad, Yugal Kishor Baranwal Chhata Bazar, Muzaffarpur", y: 1978 },
    { s: 71, t: "Welding and Welding Technology", a: "Richard L Little", p: "Tata Mcgraw-Hill, Newdelhi", y: 1978 },
    { s: 72, t: "A textbook of Chemical Technology", a: "Shukla S D, Pandey G N", p: "Vikas Publishing House", y: 1978 },
    { s: 73, t: "Standard Handbook for Mechanical Engineers", a: "Theodore Baumeister, Eugene A Avallone, Theodore Baumeister III", p: "Mcgraw-Hill Book Company", y: 1978 },
    { s: 74, t: "Modern Physics", a: "Rajam J B", p: "S.Chand & Co", y: 1978 },
    { s: 75, t: "Principles of Metal Casting", a: "Richard W. Heine, Carl R. Loper, Philipc, Rosenthal", p: "Tata Mc-Graw Hill, New Delhi", y: 1978 },
    { s: 76, t: "Statics", a: "Khanna M.L", p: "Jai Prakash Nath & Co, Meerut City", y: 1978 },
    { s: 77, t: "Engineering Heat Transfer", a: "Gupta C P", p: "New Chand & Bros; Roorkee", y: 1979 },
    { s: 78, t: "Repair of Metal-Cutting Machines", a: "Pekelis G", p: "MIR Publishers; Moscow", y: 1979 },
    { s: 79, t: "Hospital", a: "Arthur Hailey", p: "-", y: 1979 },
    { s: 80, t: "Welding and cutting of Metals", a: "Khanapetov M", p: "MIR Publishers, Moscow", y: 1979 },
    { s: 81, t: "Waste water treatment", a: "Rao M N, Datta A K", p: "Oxford & IBH Publishing Co.", y: 1979 },
    { s: 82, t: "The book of Shipwrecks", a: "Kenneth Hudson and Ann Nicholls", p: "Macmillan London Limited", y: 1979 },
    { s: 83, t: "Still Flying", a: "Cornwell E L", p: "Ian Allan Ltd, London", y: 1979 },
    { s: 84, t: "Olympic Moscow over 175 Color Photographs", a: "Crescent", p: "Crescent Books, New York", y: 1979 },
    { s: 85, t: "The Living World", a: "Cathy Kilpatrick and Mark Lambert", p: "Macdonald", y: 1979 },
    { s: 86, t: "Elements of Workshop Technology Vol. II: Machine Tools", a: "Hajra S K, Choudhury, Bose S K", p: "Media Promoters & Publishers, Bombay", y: 1979 },
    { s: 87, t: "A Text Book of Engineering Chemistry", a: "Uppal M M", p: "Himalaya Publishing House, Bombay", y: 1980 },
    { s: 88, t: "A Text Book of Welding Technology", a: "Khanna O P", p: "Dhanpat Rai & sons, Delhi", y: 1980 },
    { s: 89, t: "Solve your Refrigeration Airconditioning Problems", a: "Kumar S", p: "New Heights", y: 1980 },
    { s: 90, t: "Alternating Current Machines", a: "Say M G", p: "The English Language Book Society and Pitman", y: 1980 },
    { s: 91, t: "Reinforced Concrete Structures Volume I", a: "Balkov V, E. Sigalov", p: "MIR Publishers - Moscow", y: 1981 },
    { s: 92, t: "Elements of Company Law", a: "Kuchhal M C", p: "A Mahavir Publication", y: 1981 },
    { s: 93, t: "A Brief Course of Higher Mathematics", a: "Kudryavtsev V A, Demldovich B P", p: "MIR Publishers, Moscow", y: 1981 },
    { s: 94, t: "Engineering Electromagnetics", a: "William H Hayt, JR", p: "Mcgraw-Hill International Book Company", y: 1981 },
    { s: 95, t: "Advanced Level Physics", a: "Nelkon M Parker", p: "Arnold - Heinemann, New Delhi", y: 1981 },
    { s: 96, t: "Frederic Engales", a: "N/A", p: "Ayal Mozhi Pathippagam", y: 1981 },
    { s: 97, t: "Industrial Engineering and Management", a: "Balasundaram K", p: "Sultan Chand & Sons,Delhi", y: 1982 },
    { s: 98, t: "Structural Design", a: "Alexander Kuznetsov", p: "MIR Publishers, Moscow", y: 1982 },
    { s: 99, t: "Elements of Engineering", a: "Ajwani B T", p: "Oxford & IBH Publishing Co.", y: 1982 },
    { s: 100, t: "Highway Engineering", a: "Khanna S K, Justo C E G", p: "N/A", y: 1982 },
    { s: 101, t: "Sri Mad Bagavad Geethai", a: "Nivaachaariyar", p: "The Little flower Company", y: 1982 },
    { s: 102, t: "Fitting Practice", a: "Makienko N I", p: "New Central Book Agency, Calcutta", y: 1983 },
    { s: 103, t: "Oil Hydraulics At The Service of Machines", a: "Lall B", p: "Mir Publishers,Mascow", y: 1983 },
    { s: 104, t: "A Text book of Machine Drawing", a: "Gupta R B", p: "Progressive Corporation Pvt.Ltd.,Bomba - Madras", y: 1983 },
    { s: 105, t: "Machine Design", a: "Sundararaja Moorthy, Shanmugam", p: "Khanna Publishers, Delhi.", y: 1983 },
    { s: 106, t: "Process Equipment Design Vessel Design", a: "Lloyd E Browmell, Edwin H Young", p: "Wiley Eastern Limited", y: 1983 },
    { s: 107, t: "Excellence in Management", a: "Northcote Parkinson, Rustomji M K", p: "N/A", y: 1983 },
    { s: 108, t: "Programming for Basic", a: "Subramanian N", p: "Oxford & IBH Publishing, Calcutta", y: 1984 },
    { s: 109, t: "Fluid Mechanics and Fluid Power Vol - 2", a: "Veeravalli S.V, Sanghi, Singh S.N", p: "IIT Delhi", y: 1984 },
    { s: 110, t: "Mechanical and Industrial Measurements", a: "Jain R K", p: "Orient Longman, Calcutta", y: 1984 },
    { s: 111, t: "Principles of Foundry Technology", a: "Jain P L", p: "Tata Mcgraw-Hill, Newdelhi", y: 1984 },
    { s: 112, t: "Management Information Systems Conceptual Foundations, Structure and Development", a: "Gordon B. Davis, Margrethe H. Olson", p: "McGraw Hill, New York", y: 1984 },
    { s: 113, t: "Experimental Methods for Engineers", a: "Jack P. Holman", p: "McGraw Hill, New York", y: 1984 },
    { s: 114, t: "Principles of Metal Working", a: "Surendar Kumar", p: "Oxford & IBH Publishing; New Delhi", y: 1985 },
    { s: 115, t: "An Introduction to Automatic Telephony", a: "Das P N", p: "Modern Book Agency Pvt LTD", y: 1985 },
    { s: 116, t: "An Introduction to Manual Telephony", a: "Das P N", p: "Modern Book Agency Pvt LTD", y: 1985 },
    { s: 117, t: "Probability and Expected Value", a: "N/A", p: "Sultan Chand & Sons", y: 1985 },
    { s: 118, t: "Business Economics", a: "Sankaran", p: "a.h. Wheeler&Co., Private Limited, Madras", y: 1985 },
    { s: 119, t: "A Text Book of Factory Organisation", a: "Banga T R", p: "Satya Prakashan, New Delhi.", y: 1985 },
    { s: 120, t: "Industrial Hydraulics", a: "John Pippenger, Tyler Hicks", p: "PHI, New Delhi.", y: 1985 },
    { s: 121, t: "Handbook for Lathe Operators and Foremen", a: "Leizerson O", p: "Mir Publishers,Mascow", y: 1985 },
    { s: 122, t: "Fluid Mechanics and Fluid Power Vol - 1", a: "Veeravalli S.V, Sanghi, Singh S.N", p: "IIT Delhi", y: 1985 },
    { s: 123, t: "Tool Design", a: "Cyril Donaldeon, George H. Lecain, Goold V C", p: "S.Chand & Company LTD, Delhi", y: 1985 },
    { s: 124, t: "The Motor Vehicle", a: "Newton K, W.Steeds, T K Garrett", p: "English Language Book Society", y: 1985 },
    { s: 125, t: "Fit for Life", a: "Harvey, Mariln Diamond", p: "Warner Books", y: 1985 },
    { s: 126, t: "Electronic Devices and Circuits", a: "Jacob Millman, Christos C.Halkias", p: "McGraw Hill, New York", y: 1985 },
    { s: 127, t: "Production Technology II", a: "Manian S S", p: "CBP Publishers", y: 1986 },
    { s: 128, t: "Programming With Pascal", a: "Gottfried S Byron", p: "Mc Graw Hill", y: 1986 },
    { s: 129, t: "Elements of Workshop Technology Vol - II Machine Tools", a: "Hajra Choudhury, Bose, Hajra Choudhury A.K", p: "Khanna Publishers, Delhi.", y: 1986 },
    { s: 130, t: "Strength of Materials", a: "Ramamrutham S", p: "Media Promoters & Publishers ,", y: 1986 },
    { s: 131, t: "Principles of Telegraphy", a: "Nripendra N Biswas", p: "Media Promoters & Publishers Pvt. Ltd.", y: 1986 },
    { s: 132, t: "Principles of Interactive Computer Graphics", a: "Willaiam M Newman, Robert F Sproull", p: "N/A", y: 1986 },
    { s: 133, t: "Hitler's Samurai The Waffen - SS in action", a: "Bruce Quarrie", p: "Guild Publishing,London", y: 1986 },
    { s: 134, t: "Thyristors Theory and Applications", a: "Sugandhi R K, Sugandhi K K", p: "Wiley Eastern Limited ,New Delhi", y: 1986 },
    { s: 135, t: "Fundamentals of Tool Design", a: "Wilson, Frank W", p: "PHI; New Delhi", y: 1987 },
    { s: 136, t: "Exploring the Unix System", a: "Kochan, Stephen G", p: "CBS Publishers & Distributors; New Delhi, 1987", y: 1987 },
    { s: 137, t: "Fitting Practice", a: "Makienko N", p: "MIR Publishers; Moscow", y: 1987 },
    { s: 138, t: "Bulk Electric Supply and Distribution", a: "Jain V K", p: "Galgotia Booksource; Gurgaon", y: 1987 },
    { s: 139, t: "Principles of Fluid Mechanics", a: "Natarajan M K", p: "Dhanpat Rai & Sons, Delhi.", y: 1987 },
    { s: 140, t: "Heat and Mass Transfer Data Book", a: "Kothandaraman C P, Subramanyan S", p: "Khanna Publishers, Delhi.", y: 1987 },
    { s: 141, t: "Machine Drawing", a: "Bhatt N D", p: "Dhanpat Rai & Sons, Delhi.", y: 1987 },
    { s: 142, t: "Beyond The Last Blue Mountain", a: "Lala R M", p: "Khanna Publishers, Delhi.", y: 1987 },
    { s: 143, t: "The Management Process", a: "Sohrab R. Davar and Nusli R. Davar", p: "PHI, New Delhi.", y: 1987 },
    { s: 144, t: "Elementary Engineering Drawing ( Plane and Solid Geometry)", a: "Bhatt N D", p: "Young Man & Co, Delhi", y: 1987 },
    { s: 145, t: "Network Analysis", a: "Van Valkenburg M E", p: "PHI Pvt.Ltd., New Delhi.", y: 1987 },
    { s: 146, t: "Courts of Love", a: "Jean Plaidy", p: "Fontana / Collins", y: 1987 },
    { s: 147, t: "Fundamentals of Engineering Thermodynamics", a: "John R.Howell , Richard O. Buckius", p: "Tata McGraw Hill, New York", y: 1987 },
    { s: 148, t: "Theory and Problems of Computer Graphics", a: "Roy A. Plastock, Gordon Kalley", p: "Schaum's Outline Series,London", y: 1987 },
    { s: 149, t: "Engineering Materials", a: "Surendra Singh", p: "Konark Publishers Pvt Ltd", y: 1987 },
    { s: 150, t: "Mathematics for Management An Introduction", a: "Raghavachari M", p: "McGraw Hill, New York", y: 1987 },
    { s: 151, t: "Introduction To Turbo Prolog", a: "Carl Townsend", p: "BPB Publications", y: 1988 },
    { s: 152, t: "Vector Mechanics for engineers", a: "Ferdinand P Beer, Russell Johnston", p: "Mcgraw-Hill Book Company", y: 1988 },
    { s: 153, t: "Refrigeration and Air Conditioning", a: "Arora C P", p: "Tata Mcgraw-Hill, Newdelhi", y: 1988 },
    { s: 154, t: "Fundamentals of Electricity and Magnetism", a: "Duggal B D, Chhabra C L", p: "Shoban Lal Nagin Chand & Co", y: 1988 },
    { s: 155, t: "Home Electronics Fix- IT Book", a: "Homer L Davidson", p: "TAB Books Inc.", y: 1988 },
    { s: 156, t: "The Soviet Union", a: "Library of Nations", p: "Time - Life Book - Amsterdam", y: 1988 },
    { s: 157, t: "Programming with Fortran 77A Structured Approach", a: "Dhaliwal R S", p: "Wiley Eastern Limited", y: 1989 },
    { s: 158, t: "Fluid Mechanics and Fluid Power", a: "Maiti B, Roy S, Dash S K, Som S K", p: "Allied Publishers Limited, New Delhi", y: 1989 },
    { s: 159, t: "The Golden Room", a: "Irving Wallace", p: "Corgi Books India Book Distributors", y: 1989 },
    { s: 160, t: "Problems on Heat Transfer", a: "Chattopadhyay P", p: "Khanna Publishers, Delhi.", y: 1989 },
    { s: 161, t: "A Text Book of Engineering Drawing", a: "Natarajan K V", p: "N/A", y: 1989 },
    { s: 162, t: "Mechanical Engineering design", a: "Joseph Edward Shigley", p: "Mcgrawhill", y: 1989 },
    { s: 163, t: "The Guinness Book of Records", a: "Donald McFarlan, Norris D. McWhirter", p: "Guinness Publishing Ltd", y: 1989 },
    { s: 164, t: "Designing for Quality: An Introduction to the best of Taguchi and Western Methods of Statistical Experimental Design", a: "Lochner, Robert H", p: "Chapman and Hall; London", y: 1990 },
    { s: 165, t: "An Introduction to the Principles of Communication Theory", a: "John C Hancock", p: "TMH", y: 1990 },
    { s: 166, t: "Electromagnetic waves & Radiating Systems", a: "Edward C Jordan", p: "PHI", y: 1990 },
    { s: 167, t: "Field Theory", a: "Gangadhar K A", p: "Khanna Publishers, Delhi", y: 1990 },
    { s: 168, t: "Automatic Control Systems", a: "Verma S N", p: "Khanna Publishers, Delhi", y: 1990 },
    { s: 169, t: "Innovation and Entre-Preneurship: Practice and Principles", a: "Drucker, Peter F", p: "Affiliated East-West Press; New Delhi", y: 1991 },
    { s: 170, t: "An Introduction to Thyristors and Their Applications", a: "Ramamoorty M", p: "Affiliated East - West Press Pvt. LTD", y: 1991 },
    { s: 171, t: "Principles of Refrigeration", a: "Roy J Dossat", p: "Wiley Easten Limited", y: 1991 },
    { s: 172, t: "AutoLISP in AutoCAD II: Language Description and Reference", a: "Schmidt, Jurg", p: "Galgotia Publications Pvt Ltd; New Delhi", y: 1992 },
    { s: 173, t: "Illustrated Forpro 2.0", a: "Robert Granillo", p: "BPB Publications", y: 1992 },
    { s: 174, t: "Introducing Systems Analysis and Design Volume 2", a: "Lee", p: "Galgotia Booksource", y: 1992 },
    { s: 175, t: "Advanced AutoCAD: Release 12.", a: "Thomas, Robert M", p: "BPB Publications; New Delhi, 1993", y: 1993 },
    { s: 176, t: "A Matter of Honour", a: "Jeffrey Archer", p: "Penguin Books", y: 1993 },
    { s: 177, t: "Machine Drawing", a: "Nagpal G R", p: "Khanna Publishers", y: 1994 },
    { s: 178, t: "Waste-to-Energy Technologies and Global Applications", a: "Efstratios N Kalogirou", p: "CRC Press", y: "N/A" },
    { s: 179, t: "Standardization in Smart Grids", a: "Mathias Uslar (et.al)", p: "Springer", y: "N/A" },
    { s: 180, t: "Natural Disaster Risk Management", a: "Ulrich Ranke", p: "Springer", y: "N/A" },
    { s: 181, t: "Genetically Modified Crops: Assessing Safety", a: "Atherton, Keith T", p: "Taylor & Francis; London", y: "N/A" },
    { s: 182, t: "Reliability Wearout Mechanisms in Advanced CMOS Technologies", a: "Strong, Alvin W", p: "John Wiley; New Jersey", y: "N/A" },
    { s: 183, t: "Maintenance Engineering Handbook", a: "Mobley, Keith R", p: "McGraw Hill", y: "N/A" },
    { s: 184, t: "Interventions, Controls, and Applications in Occupational Ergonomics", a: "Marras, William S", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 185, t: "Hazard Analysis Techniques for System Safety", a: "Ericson, Clifton", p: "John Wiley; New Jersey", y: "N/A" },
    { s: 186, t: "The Automotive Body Manufacturing Systems and Processes", a: "Omar, Mohammed A", p: "John Wiley; New Jersey", y: "N/A" },
    { s: 187, t: "Product Reliability, Maintainability, and Supportability Handbook", a: "Pecht, Michael", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 188, t: "Disaster Management Vol.1", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 189, t: "Disaster Management Vol.2", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 190, t: "Disaster Management Vol.3", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 191, t: "Disaster Management Vol.4", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 192, t: "Disaster Management Vol.5", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 193, t: "Disaster Management Vol.6", a: "Ghosh G K", p: "A.P.H.Publishing Corporation; New Delhi", y: "N/A" },
    { s: 194, t: "Disaster Management Vol.1 Natural Disasters", a: "Singh, K K", p: "APH Publishing Corporation; New Delhi", y: "N/A" },
    { s: 195, t: "Disaster Management Vol.2 Environmental Disasters", a: "Singh, K K", p: "APH Publishing Corporation; New Delhi", y: "N/A" },
    { s: 196, t: "Disaster Management. Vol.3 Manmade Disasters", a: "Singh, K K", p: "APH Publishing Corporation; New Delhi", y: "N/A" },
    { s: 197, t: "CRC Handbook of Laboratory Safety", a: "Furr, Keith A", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 198, t: "Applications of Cognitive Work Analysis", a: "Bisantz, Ann M", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 200, t: "Lubrication and Maintenance of Industrial Machinery: Best Practices and Reliability", a: "Gresham, Robert M", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 201, t: "Mechanical Principles and Systems for Industrial Maintenance", a: "Knotek, Richard", p: "Pearson Education; New Delhi", y: "N/A" },
    { s: 202, t: "Violence Assessment and Intervention: The Practitioner's Handbook", a: "Cawood, James S", p: "CRC Press; Boca Raton", y: "N/A" },
    { s: 203, t: "Hazardous Chemicals Safety and Compliance Handbook for the Metal Working Industries", a: "Pohanish, Richard P", p: "Industrial Press Inc; New York", y: "N/A" },
    { s: 204, t: "Maintenance Theory of Reliability", a: "Nakagawa, Tishio", p: "Springer; London", y: "N/A" },
    { s: 205, t: "Radiation Safety: Protection and Management for Homeland Security and Emergency Response", a: "Burchfield, Larry A", p: "John Wiley Sons Inc; New Delhi", y: "N/A" },
    { s: 206, t: "Environmental Encyclopedia", a: "Cunningham, William P", p: "Jaico Publishing House; New Delhi", y: "N/A" },
    { s: 207, t: "Environmental Encyclopedia", a: "Cunningham, William P", p: "Jaico Publishing House; New Delhi", y: "N/A" },
    { s: 208, t: "Electrical Safety Handbook", a: "Cadick, John", p: "McGraw Hill; New York", y: "N/A" },
    { s: 209, t: "Handbook of Environmental Laws, Acts, Guidelines, Compliances and Standards. Vol. 1", a: "Trivedy, R K", p: "BSP Publications; Hyderabad", y: "N/A" },
    { s: 210, t: "Handbook of Environmental Laws, Acts, Guidelines, Compliances and Standards.Vol. 2", a: "Trivedy, R K", p: "BSP Publications; Hyderabad", y: "N/A" },
    { s: 211, t: "Physical Design Automation of VLSI Systems", a: "Bryan Preas", p: "The Benjamin Cummings Publishing Company Inc/ California", y: "N/A" },
    { s: 212, t: "The Handbook of Optical Communication Networks", a: "Hussein T Mouftah", p: "CRC press", y: "N/A" },
    { s: 213, t: "Academic American Encyclopaedia A - Ang, Vol - 1", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 214, t: "Academic American Encyclopaedia A - Ang - AZ, Vol - 2", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 215, t: "Academic American Encyclopaedia B, Vol - 3", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 216, t: "Academic American Encyclopaedia C - CIT, Vol - 4", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 217, t: "Academic American Encyclopaedia CIT - CZ, Vol - 5", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 218, t: "Academic American Encyclopaedia D, Vol - 6", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 219, t: "Academic American Encyclopaedia E, Vol - 7", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 220, t: "Academic American Encyclopaedia F, Vol - 8", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 221, t: "Academic American Encyclopaedia G, Vol - 9", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 222, t: "Academic American Encyclopaedia H, Vol - 10", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 223, t: "Academic American Encyclopaedia I - J, Vol - 11", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 224, t: "Academic American Encyclopaedia K - L, Vol - 12", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 225, t: "Academic American Encyclopaedia M, Vol - 13", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 226, t: "Academic American Encyclopaedia N - O, Vol - 14", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 227, t: "Academic American Encyclopaedia P Vol - 15", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 228, t: "Academic American Encyclopaedia Q - R, Vol - 16", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 229, t: "Academic American Encyclopaedia S - SNO, Vol - 17", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 230, t: "Academic American Encyclopaedia SNO - SZ, Vol - 18", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 231, t: "Academic American Encyclopaedia T-U-V, Vol - 19", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 232, t: "Academic American Encyclopaedia W-X-Y-Z, Vol - 20", a: "-", p: "Grolier International, USA", y: "N/A" },
    { s: 233, t: "Academic American Encyclopaedia INDEX, Vol - 21", a: "-", p: "Grolier International, USA", y: "N/A" }
]

const LibraryBooksPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState('stats')

    const filteredRareBooks = RARE_BOOKS.filter(book => 
        book.t.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.p.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik">
            {/* Header */}
            <div className="pt-6 pb-6 px-6 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-[#224292] tracking-tighter leading-none">
                            Books & <span className="text-[#ffc107]">Collections</span>
                        </h1>
                    </div>

                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                        {[
                            { id: 'stats', label: 'Department Stats', icon: Bookmark },
                            { id: 'rare', label: 'Rare Repository', icon: History }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-xs font-bold tracking-widest transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-[#224292] text-white shadow-lg shadow-[#224292]/20' 
                                    : 'text-slate-500 hover:bg-[#ffc107] hover:text-[#224292]'
                                }`}
                            >
                                <tab.icon size={14} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 md:py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'stats' ? (
                        <motion.div
                            key="stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#224292]/5 overflow-hidden">
                                <div className="p-4 md:p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 rounded-t-[2rem] md:rounded-t-[2.5rem] relative overflow-hidden group">
                                     <div className="absolute top-0 left-0 w-64 h-64 bg-[#224292]/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                     
                                     <div className="flex items-center gap-6 relative z-10">
                                         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#224292] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                             <ShieldCheck size={28} />
                                         </div>
                                         <div>
                                             <h2 className="text-2xl font-bold text-[#224292] tracking-tight leading-none mb-2">Accession Statistics</h2>
                                             <div className="flex items-center gap-2">
                                                 <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                                 <p className="text-xs font-bold text-slate-400 tracking-[4px]">Verified Library Network</p>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="text-left md:text-right relative z-10">
                                         <p className="text-xs font-bold text-[#ffc107] tracking-[4px] leading-none mb-2">Total Volumes</p>
                                         <p className="text-4xl font-bold text-[#224292]">36,600</p>
                                     </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[600px] md:min-w-full text-left">
                                        <thead>
                                            <tr className="bg-[#224292] border-b border-[#224292]/10 shadow-md">
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px]">Course / Department</th>
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px] text-center">Titles</th>
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px] text-center">Volumes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {DEPT_STATS.map((row, i) => (
                                                <tr key={i} className="hover:bg-[#224292]/5 transition-colors group even:bg-slate-50/50">
                                                    <td className="px-4 md:px-8 py-4 font-bold text-[#224292] text-sm group-hover:text-[#ffc107] transition-colors">{row.c}</td>
                                                    <td className="px-4 md:px-8 py-4 text-center font-bold text-slate-500 text-sm whitespace-nowrap">{row.t.toLocaleString()}</td>
                                                    <td className="px-4 md:px-8 py-4 text-center font-bold text-[#224292] text-sm whitespace-nowrap">{row.v.toLocaleString()}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-[#224292]/5">
                                                <td className="px-4 md:px-8 py-5 md:py-6 font-bold text-[#224292] text-lg">Grand Total</td>
                                                <td className="px-4 md:px-8 py-5 md:py-6 text-center font-bold text-[#ffc107] text-xl">7,444</td>
                                                <td className="px-4 md:px-8 py-5 md:py-6 text-center font-bold text-[#224292] text-xl">36,600</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="rare"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {/* Rare Repository Section */}
                            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#224292]/5 overflow-hidden">
                                <div className="p-4 md:p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 rounded-t-[2rem] md:rounded-t-[2.5rem] relative overflow-hidden group">
                                     {/* Background Decor */}
                                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#224292]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-[#ffc107]/10 transition-all duration-1000" />
                                     
                                     <div className="flex items-center gap-6 relative z-10">
                                         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#ffc107] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                             <History size={28} />
                                         </div>
                                         <div>
                                             <h2 className="text-2xl font-bold text-[#224292] tracking-tight leading-none mb-2">Rare Book List</h2>
                                             <div className="flex items-center gap-2">
                                                 <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                                 <p className="text-xs font-bold text-slate-400 tracking-[4px]">Historical Archives</p>
                                             </div>
                                         </div>
                                     </div>

                                     <div className="relative flex-1 max-w-lg z-10">
                                         <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                         <input 
                                             type="text"
                                             value={searchQuery}
                                             onChange={(e) => setSearchQuery(e.target.value)}
                                             placeholder="Search by title, author or publisher..."
                                             className="w-full pl-14 pr-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] text-xs font-bold tracking-widest focus:outline-none focus:ring-4 focus:ring-[#224292]/5 focus:border-[#224292] transition-all shadow-sm"
                                         />
                                     </div>
                                </div>

                                <div className="overflow-x-auto max-h-[600px]">
                                    <table className="w-full min-w-[800px] md:min-w-full text-left">
                                        <thead className="sticky top-0 z-10">
                                            <tr className="bg-[#224292]">
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px] w-20">S.No</th>
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px]">Book Specification</th>
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px]">Institutional Publication</th>
                                                <th className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-white tracking-[2px] text-center">Year</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {filteredRareBooks.map((book, idx) => (
                                                <tr key={idx} className="hover:bg-[#224292]/5 transition-colors group even:bg-slate-50/50">
                                                    <td className="px-4 md:px-8 py-4 md:py-5 text-xs font-bold text-[#224292] opacity-40">{book.s}</td>
                                                    <td className="px-4 md:px-8 py-4 md:py-5">
                                                        <div className="space-y-1">
                                                            <p className="font-bold text-[#224292] text-sm group-hover:text-[#ffc107] transition-colors">{book.t}</p>
                                                            <p className="text-xs font-bold text-slate-500 tracking-wider italic flex items-center gap-2">
                                                                <FileText size={10} className="text-[#ffc107]" /> {book.a}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 md:px-8 py-4 md:py-5">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#224292]/5 group-hover:text-[#224292] transition-all">
                                                                <BookOpen size={14} />
                                                            </div>
                                                            <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-xs">{book.p}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 md:px-8 py-4 md:py-5 text-center">
                                                        <span className="px-4 py-1.5 bg-[#224292]/5 text-[#224292] rounded-full text-xs font-bold tracking-widest">{book.y}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                            {filteredRareBooks.length === 0 && (
                                                <tr>
                                                    <td colSpan="4" className="px-4 md:px-8 py-10 md:py-20 text-center text-slate-400 font-bold tracking-widest">No books matching your search...</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default LibraryBooksPage;
