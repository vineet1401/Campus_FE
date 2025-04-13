import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentCompleteProfileByUserId } from "../../services/user.service";
import { showNotification } from "../../redux/headerSlice";

const ProfilePage = ({ userId, userData }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const fetchProfile = async (userId) => {
    try {
      const response = await getStudentCompleteProfileByUserId(userId); // Call the API
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        setData(response.data);
        // window.history.back();
      } else {
        dispatch(showNotification({ message: response.message, status: 0 }));
      }
    } catch (error) {
      dispatch(
        showNotification({ message: "Error in fetching profile", status: 0 })
      );
    }
  };

  useEffect(() => {

    if (userId) {
      // Admin mode: fetch user profile by userId
      fetchProfile(userId);
    } else if (userData) {
      // Directly use Redux data
      console.log(userData);
      setData(userData);
    }
  }, [userId, userData]);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  const { personal, education, projects, experience } = data;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Personal Info Card */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl">👤 Personal Information</h2>
          <div className="flex items-center gap-4 mt-4">
            {personal?.profilePicture && (
              <img
                src={personal.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border"
              />
            )}
            <div>
              <p>
                <strong>Name:</strong>{" "}
                {`${personal.firstName} ${personal.middleName || ""} ${
                  personal.lastName
                }`}
              </p>
              <p>
                <strong>Email:</strong> {personal.email}
              </p>
              <p>
                <strong>Phone:</strong> {personal.phoneNumber}
              </p>
              <p>
                <strong>DOB:</strong>{" "}
                {new Date(personal.dateOfBirth).toLocaleDateString()}
              </p>
              <p>
                <strong>Gender:</strong> {personal.gender}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p>
              <strong>About:</strong> {personal.about}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${personal.address?.street}, ${personal.address?.city}, ${personal.address?.state} - ${personal.address?.postalCode}, ${personal.address?.country}`}
            </p>
            <p>
              <strong>Emergency Contact:</strong>{" "}
              {`${personal.emergencyContact?.name} (${personal.emergencyContact?.relationship}) - ${personal.emergencyContact?.phoneNumber}`}
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl">🎓 Education</h2>
          {education?.map((edu, idx) => (
            <div key={idx} className="mt-4 border-b pb-3">
              <p>
                <strong>Institution:</strong> {edu.institutionName}
              </p>
              <p>
                <strong>Address:</strong> {edu.address}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {new Date(edu.startDate).toLocaleDateString()} -{" "}
                {new Date(edu.endDate).toLocaleDateString()}
              </p>
              {edu.grade && (
                <p>
                  <strong>Grade:</strong> {edu.grade}
                </p>
              )}
              {edu.achievements?.length > 0 && (
                <ul className="list-disc ml-6 mt-2">
                  {edu.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl">💻 Projects</h2>
          {projects?.map((proj, idx) => (
            <div key={idx} className="mt-4 border-b pb-3">
              <p>
                <strong>Project Name:</strong> {proj.projectName}
              </p>
              <p>
                <strong>Domain:</strong> {proj.domainName}
              </p>
              <p>
                <strong>Technologies:</strong> {proj.technologiesUsed}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {proj.startDate
                  ? `${new Date(proj.startDate).toLocaleDateString()} - ${
                      proj.endDate
                        ? new Date(proj.endDate).toLocaleDateString()
                        : "Present"
                    }`
                  : "N/A"}
              </p>
              <p>
                <strong>Links:</strong>{" "}
                <a href={proj.links} className="text-blue-600 underline">
                  {proj.links}
                </a>
              </p>
              {proj.description?.length > 0 && (
                <ul className="list-disc ml-6 mt-2">
                  {proj.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl">💼 Experience</h2>
          {experience?.map((exp, idx) => (
            <div key={idx} className="mt-4 border-b pb-3">
              <p>
                <strong>Company:</strong> {exp.companyName}
              </p>
              <p>
                <strong>Position:</strong> {exp.positionTitle}
              </p>
              <p>
                <strong>Type:</strong> {exp.jobType}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {new Date(exp.startDate).toLocaleDateString()} -{" "}
                {exp.endDate
                  ? new Date(exp.endDate).toLocaleDateString()
                  : "Present"}
              </p>
              <p>
                <strong>Description:</strong> {exp.description}
              </p>
              {exp.keyAchievements?.length > 0 && (
                <>
                  <p>
                    <strong>Key Achievements:</strong>
                  </p>
                  <ul className="list-disc ml-6 mt-1">
                    {exp.keyAchievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </>
              )}
              <p>
                <strong>Skills Gained:</strong> {exp.skillsGained}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
