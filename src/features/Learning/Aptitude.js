import React, { useState, useEffect, useMemo } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/headerSlice';
import { getAllAptitude } from '../../services/aptitude.service';

const Aptitude = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        dispatch(setPageTitle({ title: "Aptitude" }));

        getAllAptitude()
            .then((response) => {
                const aptitudeData = Array.isArray(response.data) ? response.data : response.data?.data || [];
                setData(aptitudeData);
            })
            .catch((err) => console.error("Error fetching aptitude data:", err));
    }, [dispatch]);


    const topicMap = useMemo(() => {
        if (!Array.isArray(data)) return {};
        return data.reduce((acc, item) => {
            if (!acc[item.topic]) acc[item.topic] = [];
            acc[item.topic].push(item);
            return acc;
        }, {});
    }, [data]);


    const handleTopicClick = (topic) => {
        setSelectedTopic(selectedTopic === topic ? null : topic);
    };

    const handleAnswerClick = (topic, questionIndex, selectedOptionIndex) => {
        const question = topicMap[topic][questionIndex];
        const correctAnswerIndex = question.answerIndex;
        setSelectedAnswers((prev) => ({
            ...prev,
            [`${topic}-${questionIndex}`]: selectedOptionIndex === correctAnswerIndex ? 'correct' : 'incorrect',
            [`${topic}-${questionIndex}-selected`]: selectedOptionIndex,
        }));
    };

    if (data.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg font-semibold">Loading questions...</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            {/* Topic selection grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {Object.keys(topicMap).map((topic) => (
                    <div
                        key={topic}
                        className="bg-blue-300 p-4 rounded cursor-pointer text-center font-semibold shadow hover:bg-blue-400 transition"
                        onClick={() => handleTopicClick(topic)}
                    >
                        {topic}
                    </div>
                ))}
            </div>

            {/* Question section for selected topic */}
            {selectedTopic && (
                <div className="border p-4 rounded">
                    <h2 className="text-xl font-bold mb-4">{selectedTopic}</h2>
                    {topicMap[selectedTopic].map((item, index) => {
                        const answerKey = `${selectedTopic}-${index}`;
                        const selectedStatus = selectedAnswers[answerKey];
                        const selectedOptionIndex = selectedAnswers[`${answerKey}-selected`];

                        return (
                            <div key={answerKey} className="mb-6">
                                <h3 className="font-semibold mb-2">{item.question}</h3>
                                <div className="flex flex-col space-y-2">
                                    {item.answers.map((option, optIndex) => {
                                        const isCorrect = selectedStatus === 'correct' && optIndex === item.answerIndex;
                                        const isIncorrect = selectedStatus === 'incorrect' && selectedOptionIndex === optIndex;

                                        return (
                                            <label key={optIndex} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name={`question-${selectedTopic}-${index}`}
                                                    onChange={() => handleAnswerClick(selectedTopic, index, optIndex)}
                                                    disabled={selectedStatus !== undefined}
                                                />
                                                <span
                                                    className={`p-2 rounded border transition
                                                        ${isCorrect ? 'bg-green-500 text-white' :
                                                            isIncorrect ? 'bg-red-500 text-white' :
                                                                'bg-gray-200'}
                                                    `}
                                                >
                                                    {option}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>

                                {/* Display result and solution */}
                                {selectedStatus !== undefined && (
                                    <div className="mt-2 flex items-center space-x-2">
                                        {selectedStatus === 'correct' ? (
                                            <FaCheckCircle className="text-green-500" />
                                        ) : (
                                            <FaTimesCircle className="text-red-500" />
                                        )}
                                        <p className="text-sm">{item.solution}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Aptitude;
