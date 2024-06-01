import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Video = () => {
  return (
    <div className="video max-w-[800px] w-[98%] my-8 rounded-2xl h-[350px] self-center flex justify-center items-center">
      <CiPlay1 size={42} className="play cursor-pointer" />
    </div>
  );
};

export default Video;
