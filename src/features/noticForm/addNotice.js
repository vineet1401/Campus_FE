import { useDispatch } from "react-redux";
import TitleCard from "../../../src/components/Cards/TitleCard";
import InputText from "../../../src/components/Input/InputText";
import TextAreaInput from "../../../src/components/Input/TextAreaInput";
import SelectBox from "../../../src/components/Input/SelectBox";
import { showNotification } from "../../../src/redux/headerSlice";

const NOTIFICATION_TYPES = [
  { name: "Company Drive", value: "drive" },
  { name: "New Company Arrival", value: "arrival" },
];

function AddNotificationForm() {
  const dispatch = useDispatch();

  // Call API to add notification
  const addNotification = () => {
    dispatch(showNotification({ message: "Notification Added", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType, value);
  };

  return (
    <>
      <TitleCard title="Add Notification" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Notification Title"
            placeholder="Notification Title"
            updateFormValue={updateFormValue}
          />
          <InputText
            type='date'
            labelTitle="Date"
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Notification Type"
            placeholder="Notification Type"
            options={NOTIFICATION_TYPES}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Description"
            placeholder="Description"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />
        </div>

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

