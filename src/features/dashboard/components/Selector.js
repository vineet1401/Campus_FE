import { useState } from "react";
import Current from "./Current";
import Finished from "./Finished";
import Upcoming from "./Upcoming";

function Selector() {
    const [activeTab, setActiveTab] = useState("Current");

    const renderDrives = () => {
        switch (activeTab) {
            case "Current":
                return <Current/>;
            case "Finished":
                return <Finished/>;
            case "Upcoming":
                return <Upcoming/>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="flex w-full join flex-col lg:flex-row">
                <button
                    onClick={() => setActiveTab("Current")}
                    className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
                        activeTab === "Current" ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white" : ""
                    }`}
                >
                    Current
                </button>
                <button
                    onClick={() => setActiveTab("Finished")}
                    className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
                        activeTab === "Finished" ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white" : ""
                    }`}
                >
                    Finished
                </button>
                <button
                    onClick={() => setActiveTab("Upcoming")}
                    className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
                        activeTab === "Upcoming" ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white" : ""
                    }`}
                >
                    Upcoming
                </button>
            </div>

            <div className="mt-4">
                {renderDrives()}
            </div>
        </div>
    );
}

export default Selector;
