// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import TitleCard from "../../components/Cards/TitleCard";
// import { showNotification } from "../common/headerSlice";

// // Initial list of companies for placement drives
// const INITIAL_COMPANY_LIST = [
//     {
//         name: "PTC",
//         icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
//         isActive: true,
//         description: "PTC is a global software company that delivers innovative solutions for product development and service transformation.",
//         driveDate: "2024-08-20",
//         jobPositions: ["Software Engineer", "Product Manager"],
//         eligibilityCriteria: "B.E/B.Tech in CS/IT with 60% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
//     {
//         name: "Facebook",
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         isActive: false,
//         description: "Meta Platforms, Inc. (formerly Facebook) is focused on building community through its various platforms.",
//         driveDate: "2024-09-05",
//         jobPositions: ["Data Scientist", "Frontend Developer"],
//         eligibilityCriteria: "B.E/B.Tech/M.Tech in CS/IT with 65% aggregate."
//     },
   
// ];

// function Integration() {
//     const dispatch = useDispatch();
//     const [companyList, setCompanyList] = useState(INITIAL_COMPANY_LIST);

//     const updateCompanyStatus = (index) => {
//         let company = companyList[index];
//         setCompanyList(companyList.map((c, k) => {
//             if(k === index) return { ...c, isActive: !c.isActive };
//             return c;
//         }));
//         dispatch(showNotification({ message: `${company.name} ${company.isActive ? "disabled" : "enabled"}`, status: 1 }));
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {companyList.map((c, k) => {
//                     return (
//                         <TitleCard key={k} title={c.name} topMargin={"mt-2"}>
//                             <p className="flex">
//                                 <img alt="icon" src={c.icon} className="w-12 h-12 inline-block mr-4" />
//                                 {c.description}
//                             </p>
//                             <p><strong>Drive Date:</strong> {c.driveDate}</p>
//                             <p><strong>Job Positions:</strong> {c.jobPositions.join(', ')}</p>
//                             <p><strong>Eligibility Criteria:</strong> {c.eligibilityCriteria}</p>
//                             <div className="mt-6 text-right">
//                                 <input type="checkbox" className="toggle toggle-success toggle-lg" checked={c.isActive} onChange={() => updateCompanyStatus(k)} />
//                             </div>
//                         </TitleCard>
//                     );
//                 })}
//             </div>
//         </>
//     );
// }

// export default Integration;

import { useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";

// This data comes dynamically from BE-->
const INITIAL_INTEGRATION_LIST = [
    { name: "Accenture", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", description: "Gmail is a free email service provided by Google.", ctc: "9 LPA", location: "Hyderabad", date: "2024-08-25" },
    { name: "PTC", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", description: "Slack is an instant messaging program.", ctc: "10 LPA", location: "Pune", date: "2024-08-15" },
    { name: "Facebook", icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", description: "Meta Platforms, Inc., doing business as Meta.", ctc: "12 LPA", location: "Mumbai", date: "2024-08-20" },
    { name: "Amazon", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", description: "LinkedIn is a business and employment-focused social media platform.", ctc: "15 LPA", location: "Bangalore", date: "2024-08-22" },
    { name: "TCS", icon: "https://cdn-icons-png.flaticon.com/512/2301/2301145.png", description: "Google Ads is an online advertising platform.", ctc: "8 LPA", location: "Delhi", date: "2024-08-18" },
    { name: "Salesforce", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968880.png", description: "It provides customer relationship management software.", ctc: "14 LPA", location: "Chennai", date: "2024-08-28" },
    { name: "Meta", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png", description: "American developer and marketer of software products.", ctc: "16 LPA", location: "Kolkata", date: "2024-08-30" },
];

function ViewNotice() {
    const [integrationList] = useState(INITIAL_INTEGRATION_LIST);

    const handleApply = (name) => {
        alert(`Applying for ${name}`);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {integrationList.map((i, k) => (
                    <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" />
                                <div>
                                    <p className="font-semibold">{i.name}</p>
                                    <p>{i.description}</p>
                                    <p><strong>CTC:</strong> {i.ctc}</p>
                                    <p><strong>Location:</strong> {i.location}</p>
                                    <p><strong>Date:</strong> {i.date}</p>
                                </div>
                            </div>
                            <button onClick={() => handleApply(i.name)} className="btn btn-success ml-4">View</button>
                        </div>
                    </TitleCard>
                ))}
            </div>
        </>
    );
}

export default ViewNotice;
