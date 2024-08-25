import { ThreeDots } from "react-loader-spinner";

import React from "react";

const DotLoader = () => {
  return (
    <ThreeDots
      visible={true}
      height="50"
      width="50"
      color="white"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default DotLoader;
