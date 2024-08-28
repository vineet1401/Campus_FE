import React, { useState } from 'react'
import InputText from '../Input/InputText'
import SelectBox from '../Input/SelectBox'
import TextAreaInput from '../Input/TextAreaInput'


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
const CreateDriveInput = ({ driveData, updateFormValue }) => {



    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedStream, setSelectedStream] = useState('');
    const [availableStreams, setAvailableStreams] = useState([]);

    const handleProgramChange = ({ name, value }) => {
        updateFormValue({name, value});
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
        updateFormValue({name, value});
    };

    return (
        <>
            <h4 className="font-semibold">Company Details</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputText placeholder="Company Name" labelTitle="Company Name" defaultValue={driveData?.companyName} name="companyName" updateFormValue={updateFormValue} />
                <InputText placeholder="URL" labelTitle="Logo URL" defaultValue={driveData?.imageUrl} name="imageUrl" updateFormValue={updateFormValue} />
                <TextAreaInput
                    labelTitle="Address"
                    placeholder="Address"
                    containerStyle={"col-span-2"}
                    defaultValue={driveData?.companyAddress}
                    name="companyAddress" updateFormValue={updateFormValue}
                />
            </div>
            <div className="divider"></div>
            <h4 className="font-semibold">Contact Person Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputText name="tnpCordinatorName" updateFormValue={updateFormValue} labelTitle="Name" placeholder={"Name"} defaultValue={driveData?.tnpCordinatorName} />
                <InputText name="tnpCordinatorDept" updateFormValue={updateFormValue} labelTitle="Department" placeholder={"Department"} defaultValue={driveData.tnpCordinatorDept} />
                <InputText name="tnpCordinatorNumber" updateFormValue={updateFormValue} labelTitle="Phone Number" placeholder={"Phone Number"} defaultValue={driveData.tnpCordinatorNumber} />
                <InputText name="tnpCordinatorEmail" updateFormValue={updateFormValue} labelTitle="Email" placeholder={"Email"} defaultValue={driveData.tnpCordinatorEmail} />
            </div>
            <div className="divider"></div>
            <h4 className="font-semibold">About Drive</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextAreaInput
                    name="jobDescription" updateFormValue={updateFormValue}
                    labelTitle="Description"
                    placeholder="Describe the drive..."
                    containerStyle={"col-span-3"}
                />
                <InputText name="driveDate" updateFormValue={updateFormValue} type={'date'} labelTitle="Date" defaultValue={driveData?.driveDate} />
                <InputText name="jobLocation" updateFormValue={updateFormValue} labelTitle="Location" placeholder={"Pune "} defaultValue={driveData?.jobLocation} />
                <InputText name="jobDesignation" updateFormValue={updateFormValue} labelTitle="Designation" placeholder={"Designation"} defaultValue={driveData?.jobDesignation} />
                <SelectBox
                    labelTitle="Program"
                    options={PROGRAMS.map(p => ({ name: p.name, value: p.value }))}
                    placeholder="Select Program"
                    updateFormValue={handleProgramChange}
                    name="program"
                    defaultValue={driveData?.program}
                />
                <SelectBox
                    labelTitle="Stream"
                    options={availableStreams.map(stream => ({ name: stream, value: stream }))}
                    placeholder="Select Stream"
                    updateFormValue={updateFormValue}
                    defaultValue={driveData?.stream}
                    name="stream"
                />

                <InputText name="jobSalary" defaultValue={driveData?.jobSalary} updateFormValue={updateFormValue} labelTitle="Salary Package" placeholder="Enter Range" />
            </div>
            <div className="divider"></div>
            <h4 className="font-semibold">Registrations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputText name="startDate" updateFormValue={updateFormValue} type={'date'} labelTitle="Start Date" defaultValue={driveData?.startDate} />
                <InputText name="endDate" updateFormValue={updateFormValue} type={'date'} labelTitle="Last Date" defaultValue={driveData?.endDate} />
            </div>
            <div className="divider"></div>
            <h4 className="font-semibold">Criteria</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputText labelTitle="Max Backlog" defaultValue={driveData?.maxBacklog} name="maxBacklog" updateFormValue={updateFormValue} />
                <InputText name="throughoutPercentage" updateFormValue={updateFormValue} labelTitle="Throughout Percentage" placeholder={"%"} defaultValue={driveData?.throughoutPercentage} />
            </div>
        </>
    )
}

export default CreateDriveInput
