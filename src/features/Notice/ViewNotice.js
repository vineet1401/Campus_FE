
import { useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";

// This data comes dynamically from BE-->
const INITIAL_INTEGRATION_LIST = [
  {
    name: "Accenture",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
    description: "Gmail is a free email service provided by Google.",
    ctc: "9 LPA",
    location: "Hyderabad",
    date: "2024-08-25",
  },
  {
    name: "PTC",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
    description: "Slack is an instant messaging program.",
    ctc: "10 LPA",
    location: "Pune",
    date: "2024-08-15",
  },
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    description: "Meta Platforms, Inc., doing business as Meta.",
    ctc: "12 LPA",
    location: "Mumbai",
    date: "2024-08-20",
  },
  {
    name: "Amazon",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    description:
      "LinkedIn is a business and employment-focused social media platform.",
    ctc: "15 LPA",
    location: "Bangalore",
    date: "2024-08-22",
  },
  {
    name: "TCS",
    icon: "https://cdn-icons-png.flaticon.com/512/2301/2301145.png",
    description: "Google Ads is an online advertising platform.",
    ctc: "8 LPA",
    location: "Delhi",
    date: "2024-08-18",
  },
  {
    name: "Salesforce",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968880.png",
    description: "It provides customer relationship management software.",
    ctc: "14 LPA",
    location: "Chennai",
    date: "2024-08-28",
  },
  {
    name: "Meta",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
    description: "American developer and marketer of software products.",
    ctc: "16 LPA",
    location: "Kolkata",
    date: "2024-08-30",
  },
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
                <img
                  alt="icon"
                  src={i.icon}
                  className="w-12 h-12 inline-block mr-4"
                />
                <div>
                  <p className="font-semibold">{i.name}</p>
                  <p>{i.description}</p>
                  <p>
                    <strong>CTC:</strong> {i.ctc}
                  </p>
                  <p>
                    <strong>Location:</strong> {i.location}
                  </p>
                  <p>
                    <strong>Date:</strong> {i.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleApply(i.name)}
                className="btn btn-success ml-4"
              >
                View
              </button>
            </div>
          </TitleCard>
        ))}
      </div>
    </>
  );
}

export default ViewNotice;
