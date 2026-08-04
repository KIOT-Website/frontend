const fs = require('fs');

const targetFile = 'e:/Project_Main/kiot/frontend/src/pages/ResearchResourcesPage.jsx';
let content = fs.readFileSync(targetFile, 'utf-8');

const ecxData = `
// ─── ECX (Electronics & Computer Engineering) Data ───
const ecxSupervisors = [];
const ecxPhdHolders = [
    { id: 1, name: "Dr. S.Maragatharaj", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "321065", doj: "15.07.2022" },
    { id: 2, name: "Dr. S.Masilamani", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "725746", doj: "01.07.2026" },
    { id: 3, name: "Dr. K.Priya Mol", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "720361", doj: "09.06.2025" },
    { id: 4, name: "Dr. T.Madhumathi", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "720670", doj: "04.06.2025" }
];
const ecxResearchAreas = [];
const ecxFacilities = [];
const ecxFacultyPursuing = [
    { name: "Mrs. G.Valarmathi", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "720364", doj: "16.03.2026" },
    { name: "Mrs. M.Iswarya", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "719975", doj: "19.06.2026" },
    { name: "Ms. O.Vivedhini", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "720371", doj: "01.06.2026" }
];
const ecxGuidedScholars = [];
`;

// Insert the data just before ECE data
content = content.replace('// ─── ECE (Electronics & Communication Engineering) Data ───', ecxData + '\n// ─── ECE (Electronics & Communication Engineering) Data ───');

// Update variables in component
const varUpdates = [
    {
        search: `const isMBA = deptName?.toLowerCase() === 'management-sciences' || deptName?.toLowerCase() === 'mba' || deptName?.toLowerCase() === 'mba-general' || deptName?.toLowerCase() === 'mba-iev'`,
        replace: `const isMBA = deptName?.toLowerCase() === 'management-sciences' || deptName?.toLowerCase() === 'mba' || deptName?.toLowerCase() === 'mba-general' || deptName?.toLowerCase() === 'mba-iev'\n    const isECX = deptName?.toLowerCase() === 'electronics-&-computer-engineering' || deptName?.toLowerCase() === 'electronics-and-computer-engineering' || deptName?.toLowerCase() === 'ecx' || deptName?.toLowerCase() === 'ecm'`
    },
    {
        search: `const isSinglePageDashboard = true`,
        replace: `const isSinglePageDashboard = true` // no change, just a marker
    },
    {
        search: `const supervisors = isCivil ? civilSupervisors : (isAIDS ? aidsSupervisors : (isCSBS ? csbsSupervisors : (isEEE ? eeeSupervisors : (isMCA ? mcaSupervisors : (isMech ? mechSupervisors : (isSH ? shSupervisors : (isECE ? eceSupervisors : (isIT ? itSupervisors : (isMBA ? mbaSupervisors : cseSupervisors)))))))))`,
        replace: `const supervisors = isCivil ? civilSupervisors : (isAIDS ? aidsSupervisors : (isCSBS ? csbsSupervisors : (isEEE ? eeeSupervisors : (isMCA ? mcaSupervisors : (isMech ? mechSupervisors : (isSH ? shSupervisors : (isECE ? eceSupervisors : (isIT ? itSupervisors : (isMBA ? mbaSupervisors : (isECX ? ecxSupervisors : cseSupervisors))))))))))`
    },
    {
        search: `const phdHolders = isCivil ? civilPhdHolders : (isAIDS ? aidsPhdHolders : (isCSBS ? csbsPhdHolders : (isEEE ? eeePhdHolders : (isMCA ? mcaPhdHolders : (isMech ? mechPhdHolders : (isSH ? shPhdHolders : (isECE ? ecePhdHolders : (isIT ? itPhdHolders : (isMBA ? mbaPhdHolders : csePhdHolders)))))))))`,
        replace: `const phdHolders = isCivil ? civilPhdHolders : (isAIDS ? aidsPhdHolders : (isCSBS ? csbsPhdHolders : (isEEE ? eeePhdHolders : (isMCA ? mcaPhdHolders : (isMech ? mechPhdHolders : (isSH ? shPhdHolders : (isECE ? ecePhdHolders : (isIT ? itPhdHolders : (isMBA ? mbaPhdHolders : (isECX ? ecxPhdHolders : csePhdHolders))))))))))`
    },
    {
        search: `const researchAreas = isCivil ? civilResearchAreas : (isAIDS ? aidsResearchAreas : (isCSBS ? csbsResearchAreas : (isEEE ? eeeResearchAreas : (isMCA ? mcaResearchAreas : (isMech ? mechResearchAreas : (isSH ? shResearchAreas : (isECE ? eceResearchAreas : (isIT ? itResearchAreas : (isMBA ? mbaResearchAreas : cseResearchAreas)))))))))`,
        replace: `const researchAreas = isCivil ? civilResearchAreas : (isAIDS ? aidsResearchAreas : (isCSBS ? csbsResearchAreas : (isEEE ? eeeResearchAreas : (isMCA ? mcaResearchAreas : (isMech ? mechResearchAreas : (isSH ? shResearchAreas : (isECE ? eceResearchAreas : (isIT ? itResearchAreas : (isMBA ? mbaResearchAreas : (isECX ? ecxResearchAreas : cseResearchAreas))))))))))`
    },
    {
        search: `const facilities = isCivil ? civilFacilities : (isAIDS ? aidsFacilities : (isCSBS ? csbsFacilities : (isEEE ? eeeFacilities : (isMCA ? mcaFacilities : (isMech ? mechFacilities : (isSH ? shFacilities : (isECE ? eceFacilities : (isIT ? itFacilities : (isMBA ? mbaFacilities : cseFacilities)))))))))`,
        replace: `const facilities = isCivil ? civilFacilities : (isAIDS ? aidsFacilities : (isCSBS ? csbsFacilities : (isEEE ? eeeFacilities : (isMCA ? mcaFacilities : (isMech ? mechFacilities : (isSH ? shFacilities : (isECE ? eceFacilities : (isIT ? itFacilities : (isMBA ? mbaFacilities : (isECX ? ecxFacilities : cseFacilities))))))))))`
    },
    {
        search: `const facultyPursuing = isCivil ? civilFacultyPursuing : (isAIDS ? aidsFacultyPursuing : (isCSBS ? csbsFacultyPursuing : (isEEE ? eeeFacultyPursuing : (isMCA ? mcaFacultyPursuing : (isMech ? mechFacultyPursuing : (isSH ? shFacultyPursuing : (isECE ? eceFacultyPursuing : (isIT ? itFacultyPursuing : (isMBA ? mbaFacultyPursuing : cseFacultyPursuing)))))))))`,
        replace: `const facultyPursuing = isCivil ? civilFacultyPursuing : (isAIDS ? aidsFacultyPursuing : (isCSBS ? csbsFacultyPursuing : (isEEE ? eeeFacultyPursuing : (isMCA ? mcaFacultyPursuing : (isMech ? mechFacultyPursuing : (isSH ? shFacultyPursuing : (isECE ? eceFacultyPursuing : (isIT ? itFacultyPursuing : (isMBA ? mbaFacultyPursuing : (isECX ? ecxFacultyPursuing : cseFacultyPursuing))))))))))`
    },
    {
        search: `const guidedScholars = isCivil ? civilGuidedScholars : (isAIDS ? aidsGuidedScholars : (isCSBS ? csbsGuidedScholars : (isEEE ? eeeGuidedScholars : (isMCA ? mcaGuidedScholars : (isMech ? mechGuidedScholars : (isSH ? shGuidedScholars : (isECE ? eceGuidedScholars : (isIT ? itGuidedScholars : (isMBA ? mbaGuidedScholars : cseGuidedScholars)))))))))`,
        replace: `const guidedScholars = isCivil ? civilGuidedScholars : (isAIDS ? aidsGuidedScholars : (isCSBS ? csbsGuidedScholars : (isEEE ? eeeGuidedScholars : (isMCA ? mcaGuidedScholars : (isMech ? mechGuidedScholars : (isSH ? shGuidedScholars : (isECE ? eceGuidedScholars : (isIT ? itGuidedScholars : (isMBA ? mbaGuidedScholars : (isECX ? ecxGuidedScholars : cseGuidedScholars))))))))))`
    },
    {
        search: `const [activeTab, setActiveTab] = useState(isAIDS || isCivil || isCSBS || isMCA || isIT || isMBA ? 'areasFacilities' : 'supervisors')`,
        replace: `const [activeTab, setActiveTab] = useState(isAIDS || isCivil || isCSBS || isMCA || isIT || isMBA || isECX ? 'scholars' : 'supervisors')`
    }
];

for (const update of varUpdates) {
    if (!content.includes(update.search)) {
        console.error("Could not find string:\n", update.search);
    } else {
        content = content.replace(update.search, update.replace);
    }
}

// Add isECX to scholar tab check
// { id: 'scholars', label: isAIDS || isCivil || isCSBS || isMCA || isSH ? 'Faculty Pursuing Ph.D' : 'Scholars & Pursuing', icon: GraduationCap, show: facultyPursuing.length > 0 || guidedScholars.length > 0 }
content = content.replace(`{ id: 'scholars', label: isAIDS || isCivil || isCSBS || isMCA || isSH ? 'Faculty Pursuing Ph.D'`, `{ id: 'scholars', label: isAIDS || isCivil || isCSBS || isMCA || isSH || isECX ? 'Faculty Pursuing Ph.D'`);

fs.writeFileSync(targetFile, content, 'utf-8');
console.log("Updated ResearchResourcesPage.jsx with ECX dept data.");
