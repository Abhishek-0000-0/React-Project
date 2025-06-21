import React from "react";
import { FaSpinner, FaBookOpen, FaAtom } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <FaBookOpen className="animate-pulse text-4xl text-purple-600" />
    </div>
  );
};

export default Loading;
