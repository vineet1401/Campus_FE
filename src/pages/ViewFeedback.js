import React from 'react';
import PieChart from '../features/charts/components/FeedbackChart'; // Adjust the path as needed
import TitleCard from '../components/Cards/TitleCard'; // Adjust the path as needed
import Subtitle from '../components/Typography/Subtitle'; // Adjust the path as needed
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../redux/headerSlice';
import { useEffect } from 'react';




function FeedbackPage() {
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Feedback" }))
    }, [])

    const chart1Data = {
        labels: ['Excellent', 'Good', 'Average', 'Poor'],
        data: [60, 25, 10, 5],
    };

    const chart2Data = {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
        data: [40, 35, 15, 10],
    };

    const chart3Data = {
        labels: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
        data: [50, 30, 10, 5, 5],
    };

    const chart4Data = {
        labels: ['Yes', 'No'],
        data: [70, 30],
    };

    return (
        <div className="p-2">
            {/* Page Title */}
            {/* <TitleCard title="Company Feedback Overview" ></TitleCard> */}
            <Subtitle subtitle="Here is a summary of the feedback received from our customers." />

            {/* Pie Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                <PieChart title="Overall Experience" data={chart1Data.data} labels={chart1Data.labels} />
                <PieChart title="Work Environment" data={chart2Data.data} labels={chart2Data.labels} />
                <PieChart title="Support from Seniors" data={chart3Data.data} labels={chart3Data.labels} />
                <PieChart title="Training & Development" data={chart4Data.data} labels={chart4Data.labels} />
            </div>

            {/* Description Section */}
            <div className="mt-6">
                <TitleCard title="Feedback Summary">
                    <p>
                        Here you can provide a detailed description of the feedback collected.
                        Include insights, observations, and any trends identified from the pie charts above.
                    </p>
                </TitleCard>
            </div>
        </div>
    );
}

export default FeedbackPage;