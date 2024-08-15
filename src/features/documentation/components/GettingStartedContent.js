// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import FeedbackModal from '../FeedbackModal';

// function GettingStartedContent() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const dispatch = useDispatch();

//     const openModal = () => {
//       console.log("model click")
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//       console.log("model notclick")
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="grid place-items-center p-4">
//             <div className="relative bg-white text-gray-800 w-full max-w-4xl shadow-lg rounded-lg p-6">
//                 <span className="absolute top-0 left-0 bg-green-500 text-white px-6 py-1 rounded-br-lg text-sm font-bold">
//                     Selected
//                 </span>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                     <div className="col-span-1 p-2 bg-white rounded-lg">
//                         <img
//                             src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png"
//                             alt="Company Logo"
//                             className="w-16 h-16 rounded-lg mt-2"
//                         />
//                     </div>
//                     <div className="col-span-2">
//                         <h2 className="text-2xl font-bold">Company Name</h2>
//                         <p className="text-gray-600">Software Engineer</p>
//                     </div>
//                     <div className="col-span-1 text-right">
//                         <p className="text-gray-700 text-sm">Package: ₹10 LPA</p>
//                         <p className="text-gray-700 text-sm">Drive Date: 15th August 2024</p>
//                     </div>
//                 </div>
//                 <div className="flex justify-end pt-4">
//                     <button
//                         onClick={openModal}
//                         className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded-lg"
//                     >
//                         Give Feedback
//                     </button>
//                 </div>
//             </div>

//             {/* Feedback Modal */}
//             <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
//         </div>
//     );
// }

// export default GettingStartedContent;
