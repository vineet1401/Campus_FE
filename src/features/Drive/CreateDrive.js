import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import { createDrive } from "../../services/drive.service"; // Import the service
import CreateDriveInput from '../../components/FormsInputs/CreateDriveInput';



const initialObj = {
    // Collect all the necessary data from the form fields
    companyName: '', // Fill with actual form value
    imageUrl: '', // Fill with actual form value
    companyAddress: '', // Fill with actual form value
    tnpCordinatorName: '', // Fill with actual form value
    tnpCordinatorDept: '', // Fill with actual form value
    tnpCordinatorNumber: '', // Fill with actual form value
    tnpCordinatorEmail: '', // Fill with actual form value
    jobDescription: '', // Fill with actual form value
    driveDate: '', // Fill with actual form value
    jobLocation: '', // Fill with actual form value
    jobDesignation: '', // Fill with actual form value
    program: "",
    stream: "",
    jobSalary: '', // Fill with actual form value
    startDate: '', // Fill with actual form value
    endDate: '', // Fill with actual form value
    maxBacklog: '', // Fill with actual form value
    throughoutPercentage: '', // Fill with actual form value
}

function CreateDrive() {
    const dispatch = useDispatch();
    const [driveData, setDriveData] = useState(initialObj);

    const updateDrive = async () => {
        try {
            const response = await createDrive(driveData); // Call the API
            if (response.status) {
                dispatch(showNotification({ message: "Drive Added", status: 1 }));
                setDriveData(initialObj)
                window.history.back();
            } else {
                dispatch(showNotification({ message: response.message, status: 0 }));
            }
        } catch (error) {
            dispatch(showNotification({ message: "Failed to add drive", status: 0 }));
        }
    };


    const updateFormValue = ({ name, value }) => {
        setDriveData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <TitleCard title="New Drive" topMargin="mt-2">
                <CreateDriveInput driveData={driveData} updateFormValue={updateFormValue} />

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
