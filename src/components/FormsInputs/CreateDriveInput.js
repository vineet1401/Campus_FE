import React from 'react'

const CreateDriveInput = () => {
    return (
        <>
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
                <InputText labelTitle="Throughout Percentage" placeholder={"%"} />
            </div>
        </>
    )
}

export default CreateDriveInput
