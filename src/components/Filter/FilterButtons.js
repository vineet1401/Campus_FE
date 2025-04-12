import React from "react";

const FilterButtons = ({ tabList, setActiveTab, activeTab }) => {
  return (
    <div className="flex w-full join flex-col lg:flex-row">
      {tabList.map((currentTab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(currentTab)}
          className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
            activeTab == currentTab
              ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white"
              : ""
          }`}
        >
          {currentTab}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
