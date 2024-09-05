import React from "react";

const BusInfo = ({ busData }) => {
  return (
    <div className="h-full font-medium self-center justify-self-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Details
      </h3>
      <hr />

      <ul className="my-2 text-2xl list-disc [&>li]:m-6">
        <li>
          Bus Name:
          <p className="text-xl">{busData.busName || "N/A"}</p>
        </li>
        <li>
          Bus Number:
          <p className="text-xl">{busData.busNumber || "N/A"}</p>
        </li>
        <li>
          Bus Location:
          <p className="text-xl">{busData.busLocation || "N/A"}</p>
        </li>
        <li>
          Bus Speed
          <p className="text-xl">{busData.busSpeed || "N/A"}</p>
        </li>
        <li>
          Driver Name:
          <p className="text-xl">{busData.driverName || "N/A"}</p>
        </li>
        <li>
          Driver Number:
          <p className="text-xl">{busData.driverNumber || "N/A"}</p>
        </li>
        <li>
          ETA:
          <p className="text-xl"> Arriving in {busData.duration || "N/A"}</p>
        </li>
        <li>
          Total Distance
          <p className="text-xl"> {busData.distance || "N/A"}</p>
        </li>
      </ul>
    </div>
  );
};

export default BusInfo;
