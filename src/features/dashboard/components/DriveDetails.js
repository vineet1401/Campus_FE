import React, {useState} from 'react';
import { getCurrentDrives } from './drivesAPI';
import Modal from './ModalDetails'; // The Modal component you just created

const DriveDetails = () => {
  const drive = getCurrentDrives();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDrive, setSelectedDrive] = useState(null);

  const openModal = (drive) => {
    setSelectedDrive(drive);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDrive(null);
    setModalOpen(false);
  };
  return (
    <div>
      

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedDrive && (
          <div>
            <h1 className="text-3xl font-bold mb-4">{selectedDrive.companyName}</h1>
            <img src={selectedDrive.logoUrl} alt={selectedDrive.companyName} className="w-32 h-32 mb-4" />
            <p><strong>Salary Package:</strong> {selectedDrive.salaryPackage}</p>
            <p><strong>Designation:</strong> {selectedDrive.designation}</p>
            <p><strong>Drive Date:</strong> {selectedDrive.driveDate}</p>
            <p><strong>Location:</strong> {selectedDrive.location}</p>
            <p><strong>Description:</strong> {selectedDrive.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DriveDetails;
