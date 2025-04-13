import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PieChart from "../../features/charts/components/PieChart"; // Adjust the path as needed
import TitleCard from "../../components/Cards/TitleCard"; // Adjust the path as needed
import Subtitle from "../../components/Typography/Subtitle"; // Adjust the path as needed
import { getCompanyFeedback } from "../../services/feedback.service";
//  check this file

const ViewFeedback = () => {
  const { driveId } = useParams();
  const { companyName } = useParams();
  const [data, setData] = useState({});
  const [feedbackData, setFeedbackData] = useState({
    overallExperience: [],
    workEnvironment: [],
    supportFromSeniors: [],
    trainingAndDevelopment: [],
    additionalComments: [],
  });

  useEffect(() => {
    fetchData();
  }, [driveId]);

  const processFeedback = (data = [], totalCount = 0) => {
    const ratingMap = {};

    // Create a map from the aggregated counts
    data.forEach((item) => {
      ratingMap[item._id] = item.count;
    });

    // Ratings from 5 (Excellent) to 1 (Poor)
    const ratings = [5, 4, 3, 2, 1];

    // Compute percentage for each rating
    return ratings.map((rating) => {
      const count = ratingMap[rating] || 0;
      return totalCount > 0 ? ((count / totalCount) * 100).toFixed(2) : "0.00";
    });
  };

  const fetchData = async () => {
    try {
      const response = await getCompanyFeedback(driveId);

      if (response.status) {
        const feedback = response.data;

        // // Function to count occurrences and convert to percentag
        setFeedbackData({
          overallExperience: processFeedback(
            feedback?.overallExperience[0]?.counts,
            feedback?.overallExperience[0]?.totalCount
          ),
          workEnvironment: processFeedback(
            feedback?.workEnvironment[0]?.counts,
            feedback?.workEnvironment[0]?.totalCount
          ),
          supportFromSeniors: processFeedback(
            feedback?.supportFromSeniors[0]?.counts,
            feedback?.supportFromSeniors[0]?.totalCount
          ),
          trainingAndDevelopment: processFeedback(
            feedback?.trainingAndDevelopment[0]?.counts,
            feedback?.trainingAndDevelopment[0]?.totalCount
          ),
          additionalComments: feedback.additionalComments,
        });

      } else {
        console.error("Failed to fetch feedback data:", response.message);
      }
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

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
          <ul className="space-y-3 max-h-96 overflow-y-auto">
            {feedbackData.additionalComments
              .slice(0, 4)
              .map((comment, index) => (
                <li
                  key={index}
                  className="bg-base-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
                        <span>{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-base-content text-sm">{comment}</p>
                  </div>
                </li>
              ))}
            {feedbackData.additionalComments.length > 4 && (
              <div className="text-center text-sm text-gray-500 mt-2">
                + {feedbackData.additionalComments.length - 4} more comments
              </div>
            )}
          </ul>
        </TitleCard>
      </div>
    </div>
  );
};

export default ViewFeedback;
