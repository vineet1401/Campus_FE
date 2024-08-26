import { useDispatch } from 'react-redux';
import { useState } from 'react';
import InputText from '../../components/Input/InputText';
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";

function CreateDrive() {
    const dispatch = useDispatch();
    const updateDrive = () => {
        dispatch(showNotification({ message: "Drive Added", status: 1 }));
      };
      const [selectedProgram, setSelectedProgram] = useState('');
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
    const handleProgramChange = (newValue) => {
        setSelectedProgram(newValue);
    
        const program = PROGRAMS.find(p => p.value === newValue);
        if (program) {
            setAvailableStreams(program.streams);
        } else {
            setAvailableStreams([]);
        }
    };
    
    const handleStreamChange = (newValue) => {
        console.log('Selected Stream:', newValue);
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
                        updateType="program"
                        updateFormValue={handleProgramChange} // Pass the correct handler
                    />
                    <SelectBox
                        labelTitle="Stream"
                        options={availableStreams.map(stream => ({ name: stream, value: stream }))}
                        placeholder="Select Stream"
                        updateType="stream"
                        updateFormValue={handleStreamChange} // Pass the correct handler
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
                    <button className="btn btn-primary float-right" onClick={() => updateDrive()}>
                        Create
                    </button>
                </div>
            </TitleCard>
        </>
    );
}

export default CreateDrive;
