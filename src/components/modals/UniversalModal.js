import React from "react";

// Reusable Modal Component
const UniversalModal = ({ id, title, children }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <h4 className="font-semibold">{title}</h4>
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default UniversalModal;
