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
            defaultValue=""
            updateFormValue={updateFormValue}
          />
          <InputText
            type='date'
            labelTitle="Date"
            defaultValue=""
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Notification Type"
            defaultValue="Select Type"
            placeholder="Select Type"
            options={NOTIFICATION_TYPES}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Description"
            containerStyle={"col-span-2"}
            defaultValue=""
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
