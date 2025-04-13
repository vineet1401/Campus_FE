export const validateCreateNotice = (noticeData) => {
    if (!noticeData?.notifyTitle?.trim()) return false;
    if (!noticeData?.notifyDate?.trim()) return false;
    if (!noticeData?.notifyType?.trim()) return false;
    if (!noticeData?.notifyDescription?.trim()) return false;
    return true;
  };
  