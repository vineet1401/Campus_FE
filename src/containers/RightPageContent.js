import Header from "./Navbar";
import {
  Outlet,
} from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";


function PageContent() {
  const mainContentRef = useRef(null);
  const { pageTitle } = useSelector((state) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main
        className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200"
        ref={mainContentRef}
      >
        <Outlet />
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default PageContent;
