import React from 'react';
import FeedbackForm from './FeedbackForm'; // Ensure the path is correct

function FeedbackModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleClose = () => {
        
        if (onClose) onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto my-8 grid gap-4">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    &#x2715; {/* Unicode for cross mark (X) */}
                </button>

                {/* Modal Content */}
                <div className="pt-8"> {/* Top padding for space */}
                    <h2 className="text-2xl font-bold mb-4">Give Feedback</h2>
                    <FeedbackForm />
                </div>
            </div>
        </div>
    );
}

export default FeedbackModal;
