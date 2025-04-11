import React, { useState } from 'react';

const ResumeAnalyzer = () => {
    const [resumeFile, setResumeFile] = useState(null);
    const [jdFile, setJdFile] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleResumeUpload = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleJdUpload = (e) => {
        setJdFile(e.target.files[0]);
    };

    const handleSearch = () => {
        console.log("Search:", searchQuery);
        // Implement search logic here
    };

    const handleGenerateResume = () => {
        console.log("Generating resume...");
        // Implement resume generation logic here
    };

    return (
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

            {/* Section 2: Upload Job Description */}
            <div className="p-4 border rounded-md shadow-sm">
                <h2 className="text-xl font-semibold mb-2">2. Upload Job Description</h2>
                <input
                    type="text"
                    // accept=".pdf,.doc,.docx,.txt"
                    onChange={handleJdUpload}
                    className="block w-full p-2 border rounded-md"
                />
                {jdFile && <p className="text-sm mt-1 text-green-600">Uploaded: {jdFile.name}</p>}
            </div>

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

            {/* Section 4: Generate Resume */}
            <div className="text-center">
                <button
                    onClick={handleGenerateResume}
                    className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition"
                >
                    4. Generate Resume
                </button>
            </div>
        </div>
    );
};

export default ResumeAnalyzer;
