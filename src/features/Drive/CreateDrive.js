import { useDispatch } from 'react-redux';
import { useState } from 'react';
import InputText from '../../components/Input/InputText';
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import { createDrive } from "../../services/drive.service"; // Import the service

const PROGRAMS = [
    {
        name: "B.E.",
        value: "BE",
        streams: [
            "Computer",
            "Mechanical",
            "AI & DS",
            "Information Technology",
            "Civil",
        ],
    },
    {
        name: "B.Tech.",
        value: "BTech",
        streams: [
            "Computer",
            "Mechanical",
            "AI & DS",
            "Information Technology",
            "Civil",
        ],
    },
    {
        name: "M.B.A.",
        value: "MBA",
        streams: [
            "Marketing",
            "Finance",
            "Human Resources",
            "Operations",
            "Entrepreneurship",
        ],
    },
];

const initialObj = {
    // Collect all the necessary data from the form fields
    name: '', // Fill with actual form value
    logoUrl: '', // Fill with actual form value
    address: '', // Fill with actual form value
    contactPersonName: '', // Fill with actual form value
    contactPersonRole: '', // Fill with actual form value
    contactPersonPhone: '', // Fill with actual form value
    contactPersonEmail: '', // Fill with actual form value
    description: '', // Fill with actual form value
    date: '', // Fill with actual form value
    location: '', // Fill with actual form value
    designation: '', // Fill with actual form value
    program: selectedProgram,
    stream: selectedStream,
    salaryPackage: '', // Fill with actual form value
    registrationStartDate: '', // Fill with actual form value
    registrationEndDate: '', // Fill with actual form value
    maxBacklog: '', // Fill with actual form value
    throughoutPercentage: '', // Fill with actual form value
}

function CreateDrive() {
    const dispatch = useDispatch();
    
    const updateDrive = async () => {
        try {
            const response = await createDrive(driveData); // Call the API
            if (response.status) {
                dispatch(showNotification({ message: "Drive Added", status: 1 }));
            } else {
                dispatch(showNotification({ message: response.message, status: 0 }));
            }
        } catch (error) {
            dispatch(showNotification({ message: "Failed to add drive", status: 0 }));
        }
    };

    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedStream, setSelectedStream] = useState('');
    const [availableStreams, setAvailableStreams] = useState([]);
    const [formInput, setFormInput]= useState(initialObj);



    const handleProgramChange = ({ name, value }) => {
        setSelectedProgram(value);
        
        const program = PROGRAMS.find(p => p.value === value);
        if (program) {
            setAvailableStreams(program.streams);
        } else {
            setAvailableStreams([]);
        }
        setSelectedStream(''); // Reset stream when program changes
    };
    
    const handleStreamChange = ({ name, value }) => {
        setSelectedStream(value);
    };

    return (
        <>
            <TitleCard title="New Drive" topMargin="mt-2">


                <div className="mt-16">
                    <button className="btn btn-primary float-right" onClick={updateDrive}>
                        Create
                    </button>
                </div>
            </TitleCard>
        </>
    );
}

export default CreateDrive;
