import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FeedbackModal from './FeedbackModal';
import { getCurrentDrives, getFinishedDrives, getUpcomingDrives } from '../../../src/features/dashboard/components/drivesAPI';

function GettingStartedContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    // Combine all drive data into one array
    const allDrives = [
        ...getCurrentDrives(),
        ...getFinishedDrives(),
        ...getUpcomingDrives()
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 p-4 border-c">
            {allDrives.map((drive) => (
                <div key={drive.id} className="relative bg-darkWhite text-gray-800 w-full max-w-4xl shadow-lg  rounded-lg p-6 mb-6 border-spacing-1 border border-black border-b-4 border-b-blue-300">
                    <span className="absolute top-0 left-0 bg-sky-400 text-white px-6 py-1  text-sm font-bold rounded-md">
                        Selected
                    </span>
                    <div className="grid grid-cols-6 items-center gap-4">
                        <div className="col-span-1 p-2 bg-white rounded-lg">
                            <img
                                src={drive.logoUrl}
                                alt={`${drive.companyName} Logo`}
                                className="rounded-lg w-full scale-150"
                            />
                        </div>
                        <div className="col-span-3">
                            <h2 className="text-2xl font-bold">{drive.companyName}</h2>
                            <hr className="my-2 border-gray-300" />
                            <p className="text-orange-600 ">{drive.designation}</p>
                        </div>
                        <div className="grid grid-flow-row place-items-end col-span-2 text-right gap-2">
                            <p className="text-orange-700 font-semibold text-md">Package: {drive.salaryPackage}</p>
                            
                            <p className="text-orange-700 font-semibold text-sm">Date: {drive.driveDate}</p>

                            <button
                            onClick={openModal}
                            className="bg-gray-500 text-white hover:bg-gray-600 p-2 font-semibold text-sm w-max rounded-md"
                        >
                            Give Feedback
                        </button>
                        </div>
                    </div>
                    
                </div>
            ))}
            {/* Feedback Modal */}
            <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default GettingStartedContent;
