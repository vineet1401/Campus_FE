import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import NotificationBodyRightDrawer from  "../components/modals/NotificationBodyRightDrawer"

function RightSidebar() {
  const close = () => {
    // Directly manipulate the className of the div
    const notificationDrawer = document.getElementById("notificationDrawer");
    const translateDrawer = document.getElementById("translateDrawer");
    if (notificationDrawer) {
      notificationDrawer.classList.remove(
        "transition-opacity",
        "opacity-100",
        "duration-500",
        "translate-x-0"
      );
      notificationDrawer.classList.add(
        "transition-all",
        "delay-500",
        "opacity-0",
        "translate-x-full"
      );
    }
    if (translateDrawer) {
      translateDrawer.classList.remove("translate-x-0");
      translateDrawer.classList.add("translate-x-full");
    }
  };

  return (
    <div
      id="notificationDrawer"
      className=" fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-all delay-500 opacity-0 translate-x-full"
    >
      <section
        id="translateDrawer"
        className="w-80 md:w-96  right-0 absolute bg-base-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  "
      >
        <div className="relative  pb-5 flex flex-col  h-full">
          {/* Header */}
          <div className="navbar   flex pl-4 pr-4   shadow-md ">
            <button
              className="float-left btn btn-circle btn-outline btn-sm"
              onClick={() => close()}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <span className="ml-2 font-bold text-xl"> Notifications </span>
          </div>

          {/* ------------------ Content Start ------------------ */}
          <div className="overflow-y-scroll pl-4 pr-4">
            <div className="flex flex-col w-full">
              {/* Loading drawer body according to different drawer type */}
              <NotificationBodyRightDrawer />
            </div>
          </div>
          {/* ------------------ Content End ------------------ */}
        </div>
      </section>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => close()}
      ></section>
    </div>
  );
}

export default RightSidebar;
