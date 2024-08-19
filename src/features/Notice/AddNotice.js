import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";
import { showNotification } from "../../redux/headerSlice";
import AddNoticeInputs from "../../components/FormsInputs/AddNoticeInputs";

function AddNotificationForm() {
  const dispatch = useDispatch();

  // Call API to add notification
  const addNotification = () => {
    // dispatch(showNotification({ message: "Notification Added", status: 1 }));
    console.log("Notification Added");
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType, value);
  };

  return (
    <>
      <TitleCard title="Add Notification" topMargin="mt-2">
        <AddNoticeInputs />
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
