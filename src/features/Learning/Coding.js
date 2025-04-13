import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import { setPageTitle } from '../../redux/headerSlice';
import { storeCodingProgress, getCodingProgress } from '../../services/codingProgress.service';
import { getAllCoding } from '../../services/coding.service';

const DisplayData = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [progress, setProgress] = useState({});

  const getKey = (category, question) =>
    `${category.trim().toLowerCase()}_${question.trim().toLowerCase()}`;

  useEffect(() => {
    dispatch(setPageTitle({ title: "Coding" }));

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ _id: decoded.id, role: decoded.role });
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    getAllCoding()
      .then((res) => {
        const dbData = res.data.data; // ✅ FIXED
        // console.log("API data received:", dbData);

        const grouped = {};
        dbData.forEach(item => {
          const cat = item.category;
          if (!grouped[cat]) grouped[cat] = [];
          grouped[cat].push({
            Question: item.question,
            Links: item.link
          });
        });

        console.log("Grouped Data:", grouped); // ✅ should now show categorized questions
        setData(grouped);
      })
      .catch(err => console.error("Error loading data:", err));
  }, []);


  console.log("data", data)

  useEffect(() => {
    if (user?._id && data) {
      getCodingProgress()
        .then((res) => {
          const doneEntries = res.data.data;

          const progMap = {};
          doneEntries.forEach(item => {
            const key = getKey(item.category, item.question);
            progMap[key] = true;
          });

          setProgress(progMap);
        })
        .catch(err => console.error("Error loading progress:", err));
    }
  }, [user, data]);

  const handleCheckboxChange = async (category, questionText, checked) => {
    if (!user || !user._id) {
      console.warn("User not loaded yet");
      return;
    }

    const payload = {
      userId: user._id,
      category,
      question: questionText,
      done: checked,
    };

    try {
      await storeCodingProgress(payload);
      setProgress(prev => ({
        ...prev,
        [getKey(category, questionText)]: checked,
      }));
    } catch (err) {
      console.error("Error updating progress", err);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => (prev === category ? null : category));
  };

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4">
      {Object.keys(data).map((category) => (
        <div key={category} className="mb-4">
          <div className="h-14">
            <div
              className="bg-blue-300 flex justify-between items-center rounded-md px-4 py-2 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <h2 className="font-semibold">{category}</h2>
              <h2 className="text-sm text-gray-700">
                {
                  data[category].filter((item) =>
                    progress[getKey(category, item.Question)]
                  ).length
                } / {data[category].length}
              </h2>
            </div>
          </div>
          {selectedCategory === category && (
            <table className="w-full mt-2 border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Question</th>
                  <th className="p-2 border">Done</th>
                  <th className="p-2 border">Editor</th>
                </tr>
              </thead>
              <tbody>
                {data[category].map((item, index) => {
                  const key = getKey(category, item.Question);
                  return (
                    <tr key={index} className="text-center">
                      <td className="p-2 border">{item.Question}</td>
                      <td className="p-2 border">
                        <input
                          type="checkbox"
                          className="cursor-pointer w-4 h-4"
                          checked={progress[key] || false}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setProgress((prev) => ({
                              ...prev,
                              [key]: checked,
                            }));
                            handleCheckboxChange(category, item.Question, checked);
                          }}
                        />
                      </td>
                      <td className="p-2 border">
                        <a
                          href={item.Links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Editor
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayData;

