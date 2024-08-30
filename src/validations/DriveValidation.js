const validateCreateDrive = (driveData) => {
    if (!driveData.companyName.trim()) return false;
    if (!driveData.positionTitle.trim()) return false;
    if (!driveData.endDate.trim()) return false;
    if (!driveData.startDate.trim()) return false;
    if (!driveData.description.trim()) return false;
    if (!driveData.skillsGained.trim()) return false;
    if (!driveData.jobType.trim()) return false;
    if (!driveData.keyAchievements.length) return false;
}