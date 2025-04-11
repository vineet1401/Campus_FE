import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";
import { showNotification } from "../../redux/headerSlice";
import AddNoticeInputs from "../../components/FormsInputs/AddNoticeInputs";
import { createNotification } from "../../services/notice.service";
import { useState } from "react";
import { validateCreateNotice } from "../../validations/NoticeValidation";

const initialNoticeObj = {
  notifyTitle: '',           // Notification Title
  notifyDate: '',            // Date
  notifyType: '',            // Notification Type
  notifyDescription: '',     // Description
};

function AddNotificationForm() {
  const dispatch = useDispatch();
  const [noticeData, setNoticeData] = useState(initialNoticeObj);
  

  // Call API to add notification
  const addNotification = async() => {
    if(validateCreateNotice(noticeData)){
      try {
        const response = await createNotification(noticeData); // Call the API
        if (response.status) {
            dispatch(showNotification({ message: "Notice Added", status: 1 }));
            setNoticeData(initialNoticeObj)
            // window.history.back();
        } else {
            dispatch(showNotification({ message: response.message, status: 0 }));
        }
    } catch (error) {
        dispatch(showNotification({ message: "Failed to add drive", status: 0 }));
    }
    }else {
      dispatch(
        showNotification({ message: "All Feilds are mandatory", status: 0 })
      );
    }

  };

  const updateFormValue = ({ name, value }) => {
    setNoticeData((prev) => ({ ...prev, [name]: value }));
};


  return (
    <>
      <TitleCard title="Add Notification" topMargin="mt-2">
        <AddNoticeInputs updateFormValue={updateFormValue} notifyData={noticeData} />
        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => addNotification()}
          >
            Add Notification
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default AddNotificationForm;
