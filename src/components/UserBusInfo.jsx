import React from "react";

const UserBusInfo = ({ busData }) => {
  return (
    <div className="h-full font-medium self-center justify-self-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Details
      </h3>
      <hr />

      <ul className="my-2 list-disc [&>li]:m-6">
        <li>
          ETA:
          <p> Arriving in {busData.duration || "N/A"}</p>
        </li>
      </ul>
    </div>
  );
};

export default UserBusInfo;
