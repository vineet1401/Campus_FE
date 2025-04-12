import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PieChart from '../../features/charts/components/PieChart'; // Adjust the path as needed
import TitleCard from '../../components/Cards/TitleCard'; // Adjust the path as needed
import Subtitle from '../../components/Typography/Subtitle'; // Adjust the path as needed
import { getCompanyFeedback } from "../../services/feedback.service";
//  check this file 

const ViewFeedback = () => {


  const { companyName } = useParams();
  const [data, setData] = useState({});
  const [feedbackData, setFeedbackData] = useState({
    overallExperience: [],
    workEnvironment: [],
    supportFromSeniors: [],
    trainingAndDevelopment: [],
  });



  useEffect(() => {
    fetchData();
  }, []);


  const processFeedback = (data, totalCount) => {
    const total = data.length;
    return total > 0
      ? data.map(count => ((count / totalCount) * 100).toFixed(2))
      : [0, 0, 0, 0, 0]; // Return zero percentages if no data
  };


  const fetchData = async () => {
    try {
      const response = await getCompanyFeedback(companyName);

      if (response.status) {
        const feedback = response.data;
        console.log(feedback)
        // setData(feedback)

        // // Function to count occurrences and convert to percentag
        setFeedbackData({
          overallExperience: processFeedback(feedback?.overallExperience[0]?.counts, feedback?.overallExperience[0]?.totalCount),
          workEnvironment: processFeedback(feedback?.workEnvironment[0]?.counts, feedback?.workEnvironment[0]?.totalCount),
          supportFromSeniors: processFeedback(feedback?.supportFromSeniors[0]?.counts, feedback?.supportFromSeniors[0]?.totalCount),
          trainingAndDevelopment: processFeedback(feedback?.trainingAndDevelopment[0]?.counts, feedback?.trainingAndDevelopment[0]?.totalCount),
        });


        console.log(feedbackData, "feedbackData")
      } else {
        console.error("Failed to fetch feedback data:", response.message);
      }
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };


  useEffect(() => {
    console.log("Updated Data:", data);
  }, [data]);

  return (
    <div className="p-2">
      <Subtitle subtitle="Here is a summary of the feedback received from our customers." />

      {/* Pie Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <PieChart
          title="Overall Experience"
          data={feedbackData.overallExperience}
          labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        />
        <PieChart
          title="Work Environment"
          data={feedbackData.workEnvironment}
          labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        />
        <PieChart
          title="Support from Seniors"
          data={feedbackData.supportFromSeniors}
          labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        />
        <PieChart
          title="Training & Development"
          data={feedbackData.trainingAndDevelopment}
          labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        />
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <TitleCard title="Feedback Summary">
          <p>
            Here you can provide a detailed description of the feedback
            collected. Include insights, observations, and any trends identified
            from the pie charts above.
          </p>
        </TitleCard>
      </div>
    </div>
  );
};

export default ViewFeedback;