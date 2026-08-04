const fs = require('fs');

const data = {
    "Dr. N. Santhiyakumari": { doj: "03.05.2010", vidwan: "313132" },
    "Dr. M. Thangavel": { doj: "02.05.2011", vidwan: "322240" },
    "Dr.R.Vijayaraghavan": { doj: "11.11.2024", vidwan: "-" },
    "Dr. V. Saravanan": { doj: "18.05.2011", vidwan: "305065" },
    "Dr. S. Kumarganesh": { doj: "04.08.2021", vidwan: "321603" },
    "Dr. P. Shanmuga Sundaram": { doj: "02.06.2010", vidwan: "322066" },
    "Mr.S.Manoharan": { doj: "01.06.2022", vidwan: "321583" },
    "Mr. R. Shanmuga Sundaram": { doj: "16.06.2010", vidwan: "320677" },
    "Mr. S. Premkumar": { doj: "13.06.2019", vidwan: "320492" },
    "Mr. M. Chandraman": { doj: "09.06.2011", vidwan: "321069" },
    "Mr. S. Veerakumar": { doj: "04.06.2012", vidwan: "322089" },
    "Mr.K.Rajesh": { doj: "01.06.2023", vidwan: "570736" },
    "Mrs. T. Devika": { doj: "07.01.2013", vidwan: "320588" },
    "Dr. G. Rajamanickam": { doj: "26.11.2019", vidwan: "320491" },
    "Mr. A. Arun": { doj: "11.06.2018", vidwan: "321079" },
    "Mr. A. Tamilselvan": { doj: "09.07.2021", vidwan: "320615" },
    "Mr.M.Duraisamy": { doj: "03.07.2023", vidwan: "620117" },
    "Mr. M. Dinesh Kumar": { doj: "14.12.2020", vidwan: "320606" },
    "Mr. V. Vimalraj": { doj: "26.11.2019", vidwan: "321529" },
    "Mrs. R. Hemalatha": { doj: "01.06.2015", vidwan: "572370" },
    "Mrs.M.Vasanthi": { doj: "01.07.2022", vidwan: "320729" },
    "Mr. T. Praveenkumar": { doj: "26.11.2019", vidwan: "320576" },
    "Mrs. S. Elarmathi": { doj: "09.07.2021", vidwan: "320683" },
    "Mrs.V.Vadivu": { doj: "01.08.2022", vidwan: "320685" },
    "Mrs.S.Sasidevi": { doj: "01.07.2022", vidwan: "320733" },
    "Mr.A.Silambarasan": { doj: "12.08.2022", vidwan: "321525" },
    "Mr.B.S.T.Ragu": { doj: "15.06.2023", vidwan: "720944" },
    "Mr.S.Sabarinathan": { doj: "30.08.2023", vidwan: "720188" },
    "Ms.C.Sri Kiruthika": { doj: "04.06.2025", vidwan: "162658" },
    "Dr.P.S.Maheshwari": { doj: "19.06.2026", vidwan: "720008" },
    "Mrs.A.Vijayalakshmi": { doj: "19.06.2026", vidwan: "719749" },
    "Mrs.P.Pushparani": { doj: "19.06.2026", vidwan: "635039" },
    "Mrs.S.Narmatha": { doj: "19.06.2026", vidwan: "719978" },
    "Dr. T. K. Santhi": { doj: "05.06.2013", vidwan: "321532" },
    "MrsT.Ranjini": { doj: "04.06.2014", vidwan: "614042" }, // Can be Ranjini or Ranjani
    "Mr. T. Raja": { doj: "02.06.2015", vidwan: "321631" },
    "Mrs.S.Saranya": { doj: "25.11.2021", vidwan: "321588" },
    "Mr.S.Naveenkumar": { doj: "16.07.2021", vidwan: "320743" },
    "Mr.P.Dhineshkumar": { doj: "11.01.2023", vidwan: "620130" },
    "Mrs.P.Priya": { doj: "10.06.2024", vidwan: "620133" },
    "Mrs.A.Peerthi": { doj: "23.06.2025", vidwan: "703524" } // Might be Preethi
};

const normalizeName = (name) => {
    return name.toLowerCase().replace(/[^a-z]/g, '');
};

const map = {};
for (const [key, val] of Object.entries(data)) {
    map[normalizeName(key)] = val;
    // adding fallbacks for common typos
    if (key === "Mrs.A.Peerthi") map[normalizeName("Mrs. A. Preethi")] = val;
    if (key === "MrsT.Ranjini") map[normalizeName("Mrs. T. Ranjani")] = val;
    if (key === "Mr. M. Dinesh Kumar") map[normalizeName("Mr. M. Dineshkumar")] = val;
    if (key === "Dr. S. Kumarganesh") map[normalizeName("Dr. Kumarganesh S")] = val;
}

const targetFile = 'src/pages/ResearchResourcesPage.jsx';
let content = fs.readFileSync(targetFile, 'utf-8');

let matchCount = 0;

// The data in ResearchResourcesPage.jsx is generally an array of objects like { name: "...", ... }
const regex = /{([^}]*name\s*:\s*(["'])(.*?)\2[^}]*)}/g;

content = content.replace(regex, (match, inner, quote, name) => {
    const norm = normalizeName(name);
    if (map[norm]) {
        matchCount++;
        const obj = map[norm];
        let newMatch = match;
        if (!newMatch.includes('doj:')) {
            newMatch = newMatch.replace(/}$/, `, doj: "${obj.doj}", vidwanId: "${obj.vidwan}" }`);
        }
        return newMatch;
    }
    return match;
});

fs.writeFileSync(targetFile, content, 'utf-8');
console.log(`Matched and updated ${matchCount} faculty objects.`);
