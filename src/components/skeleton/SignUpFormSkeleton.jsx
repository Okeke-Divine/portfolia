import React from "react";

const SignUpFormSkeleton = () => {
  return (
    <>
      <div>
        <div className="mt-2">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-12 w-full mt-4 rounded-md"></div>
        </div>
        <div className="mt-2">
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-12 w-full mt-4 rounded-md"></div>
        </div>
        <div className="mt-2">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-12 w-full mt-4 rounded-md"></div>
        </div>
        <div className="mt-2">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-12 w-full mt-4 rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default SignUpFormSkeleton;
