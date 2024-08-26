import { useDispatch } from 'react-redux';
import { useState } from 'react';
import InputText from '../../components/Input/InputText';
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import { createDrive } from "../../services/drive.service"; // Import the service

function CreateDrive() {
    const dispatch = useDispatch();
    
    const updateDrive = async () => {
        const driveData = {
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
        };

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
                <h4 className="font-semibold">Company Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText placeholder="Name" labelTitle="Name" defaultValue="" />
                    <InputText placeholder="URL" labelTitle="Logo URL" defaultValue="" />
                    <TextAreaInput
                        labelTitle="Address"
                        placeholder="Address"
                        containerStyle={"col-span-2"}
                    />
                </div>
                <div className="divider"></div>
                <h4 className="font-semibold">Contact Person Info</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText labelTitle="Name" placeholder={"Name"} defaultValue="" />
                    <InputText labelTitle="Role" placeholder={"Human Resource"} defaultValue="" />
                    <InputText labelTitle="Phone No." placeholder={"+91 "} defaultValue="" />
                    <InputText labelTitle="Email" placeholder={"abc@email.com "} defaultValue="" />
                </div>
                <div className="divider"></div>
                <h4 className="font-semibold">About Drive</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <TextAreaInput
                        labelTitle="Description"
                        placeholder="Describe the drive..."
                        containerStyle={"col-span-3"}
                    />
                    <InputText type={'date'} labelTitle="Date" defaultValue="" />
                    <InputText labelTitle="Location" placeholder={"Pune "} defaultValue="" />
                    <InputText labelTitle="Designation" placeholder={"Designation"} defaultValue="" />
                    <SelectBox
                        labelTitle="Program"
                        options={PROGRAMS.map(p => ({ name: p.name, value: p.value }))}
                        placeholder="Select Program"
                        updateFormValue={handleProgramChange}
                        name="program"
                    />
                    <SelectBox
                        labelTitle="Stream"
                        options={availableStreams.map(stream => ({ name: stream, value: stream }))}
                        placeholder="Select Stream"
                        updateFormValue={handleStreamChange}
                        name="stream"
                    />

                    <InputText labelTitle="Salary Package" placeholder="Enter Range" />
                </div>
                <div className="divider"></div>
                <h4 className="font-semibold">Registrations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText type={'date'} labelTitle="Start Date" defaultValue="" />
                    <InputText type={'date'} labelTitle="Last Date" />
                </div>
                <div className="divider"></div>
                <h4 className="font-semibold">Criteria</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText labelTitle="Max Backlog" defaultValue="0" />
                    <InputText labelTitle="Throughout Percentage" placeholder={"%"}/>
                </div>

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
