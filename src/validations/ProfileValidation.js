export const validateEducationData = (education) => {
  if (!education.address.trim()) return false;
  if (!education.degree.trim()) return false;
  if (!education.endDate.trim()) return false;
  if (!education.startDate.trim()) return false;
  if (!education.institutionName.trim()) return false;
  if (!education.grade.trim()) return false;
  if (!education.achievements.length) return false;
  return true;
};

export const validateExperienceData = (work) => {
  if (!work.companyName.trim()) return false;
  if (!work.positionTitle.trim()) return false;
  if (!work.endDate.trim()) return false;
  if (!work.startDate.trim()) return false;
  if (!work.description.trim()) return false;
  if (!work.skillsGained.trim()) return false;
  if (!work.jobType.trim()) return false;
  if (!work.keyAchievements.length) return false;
  return true;
};
