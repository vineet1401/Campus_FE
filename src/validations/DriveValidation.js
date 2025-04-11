export const validateCreateDrive = (driveData) => {
    console.log(driveData)
    if (!driveData.companyAddress?.trim()) return false;
    if (!driveData.companyName?.trim()) return false;
    if (!driveData.driveDate?.trim()) return false;
    if (!driveData.endDate?.trim()) return false;
    if (!driveData.imageUrl?.trim()) return false;
    if (!driveData.jobDescription?.trim()) return false;
    if (!driveData.jobDesignation?.trim()) return false;
    if (!driveData.jobLocation?.trim()) return false;
    if (!driveData.jobSalary?.trim()) return false;
    if (!driveData.maxBacklog?.trim()) return false;
    if (!driveData.program?.trim()) return false;
    if (!driveData.startDate?.trim()) return false;
    if (!driveData.stream?.trim()) return false;
    if (!driveData.throughoutPercentage?.trim()) return false;
    if (!driveData.tnpCordinatorDept?.trim()) return false;
    if (!driveData.tnpCordinatorEmail?.trim()) return false;
    if (!driveData.tnpCordinatorName?.trim()) return false;
    if (!driveData.tnpCordinatorNumber?.trim()) return false;
    return true;
};
