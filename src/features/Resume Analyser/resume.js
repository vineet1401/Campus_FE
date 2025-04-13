import React, { useEffect, useState } from 'react';
import { uploadResume } from '../../services/resume.service'; // adjust path if needed
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/headerSlice';

const ResumeAnalyzer = () => {
    const [resumeFile, setResumeFile] = useState(null);
    const [jdText, setJdText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // const API_KEY = process.env.API_KEY
    // console.log("api key", API_KEY)

    useEffect(() => {
        dispatch(setPageTitle({ title: "Resume Analyzer" }));
    }, [dispatch])
    const handleResumeUpload = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleJdChange = (e) => {
        setJdText(e.target.value);
    };

    const handleSearch = async () => {
        if (!searchQuery) return;
        setLoading(true);
        try {
            const API_KEY = "AIzaSyDQKYXX9JZQ8_eZEZir5BBpoEylmnzPOR8"

            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                    searchQuery
                )}&type=playlist&maxResults=10&key=${API_KEY}`
            );
            const data = await response.json();
            setResults(data.items || []);
        } catch (error) {
            console.error("Error fetching YouTube data:", error);
        }
        setLoading(false);
    };

    const handleGenerateResume = async () => {
        if (!resumeFile || !jdText) {
            alert("Please upload a resume and enter a job description.");
            return;
        }

        const formData = new FormData();
        formData.append("pdf_doc", resumeFile);
        formData.append("job_description", jdText);

        const result = await uploadResume(formData);
        if (!result.error) {
            setResponseData(result.data);
        } else {
            setResponseData({ error: true, message: result.message });
        }
    };

    return (
        <>

            <div className="max-w-3xl mx-auto p-6 space-y-8">
                <h1 className="text-3xl font-bold text-center">Resume Analyzer</h1>

                {/* Section 1: Upload Resume */}
                <div className="p-4 border rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">1. Upload Resume</h2>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeUpload}
                        className="block w-full p-2 border rounded-md"
                    />
                    {resumeFile && <p className="text-sm mt-1 text-green-600">Uploaded: {resumeFile.name}</p>}
                </div>

                {/* Section 2: Enter Job Description */}
                <div className="p-4 border rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">2. Enter Job Description</h2>
                    <textarea
                        value={jdText}
                        onChange={handleJdChange}
                        placeholder="Paste job description here..."
                        rows={6}
                        className="block w-full p-2 border rounded-md"
                    />
                </div>

                <div className="text-center">
                    <button
                        onClick={handleGenerateResume}
                        className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition"
                    >
                        Process
                    </button>
                </div>

                {/* Server Response */}
                {responseData && (
                    <div className="p-4 mt-4 border rounded-md bg-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">ATS Score : {responseData.ats_score} %</h3>
                        <h3 className="text-lg font-semibold mb-2">Missing Skills : {responseData.missing_skills + " "}</h3>
                        {/* <pre className="text-sm whitespace-pre-wrap">
                            {JSON.stringify(responseData.missing_skills, null, 2)}
                        </pre> */}
                    </div>
                )}

                {/* Section 3: Search Missing Skills */}
                <div className="p-4 border rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">3. Search for Lacking Skills</h2>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Search missing skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow p-2 border rounded-md"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading && <p className="text-center col-span-full text-xl">Loading...</p>}
                {results.map((item) => (
                    <div
                        key={item.id?.playlistId || item.snippet?.title}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                    >
                        <img
                            src={item.snippet?.thumbnails?.high?.url || '/default-image.jpg'} // Fallback image
                            alt={item.snippet?.title || 'No Title'}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{item.snippet?.title || 'No Title Available'}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {item.snippet?.description?.slice(0, 80) + '...'}
                        </p>
                        <a
                            href={`https://www.youtube.com/playlist?list=${item.id?.playlistId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 text-blue-500 hover:underline"
                        >
                            View Playlist
                        </a>
                    </div>
                ))}
            </div>




        </>
    );
};

export default ResumeAnalyzer;
