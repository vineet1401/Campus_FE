import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FeedbackModal from '../FeedbackModal';
import { getCurrentDrives, getFinishedDrives, getUpcomingDrives } from '../../../features/dashboard/components/drivesAPI';

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
        <div className="grid place-items-center p-4">
            {allDrives.map((drive) => (
                <div key={drive.id} className="relative bg-darkWhite text-gray-800 w-full max-w-4xl shadow-lg  rounded-lg p-6 mb-6">
                    <span className="absolute top-0 left-0 bg-sky-400 text-white px-6 py-1  text-sm font-bold">
                        Selected
                    </span>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className="col-span-1 p-2 bg-white rounded-lg">
                            <img
                                src={drive.logoUrl}
                                alt={`${drive.companyName} Logo`}
                                className="w-16 h-16 rounded-lg mt-2"
                            />
                        </div>
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold">{drive.companyName}</h2>
                            <hr className="my-2 border-gray-300" />
                            <p className="text-orange-600 ">{drive.designation}</p>
                        </div>
                        <div className="grid grid-flow-row col-span-1 text-right gap-2">
                            <p className="text-orange-700 text-sm">Package: {drive.salaryPackage}</p>
                            
                            <p className="text-orange-700 text-sm">Date: {drive.driveDate}</p>

                            <button
                            onClick={openModal}
                            className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded-lg"
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
