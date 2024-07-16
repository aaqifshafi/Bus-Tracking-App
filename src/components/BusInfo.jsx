import React from "react";

const BusInfo = ({ busData }) => {
  return (
    <div className="h-full font-medium self-start justify-self-start md:self-center md:justify-self-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Details
      </h3>
      <hr />

      <ul className="my-2 list-disc [&>li]:m-6">
        <li>
          Bus Name:
          <p>{busData.busName || "N/A"}</p>
        </li>
        <li>
          Bus Number:
          <p>{busData.busNumber || "N/A"}</p>
        </li>
        <li>
          Bus Location:
          <p>{busData.busLocation || "N/A"}</p>
        </li>
        <li>
          Bus Speed
          <p>{busData.busSpeed || "N/A"}</p>
        </li>
        <li>
          Driver Name:
          <p>{busData.driverName || "N/A"}</p>
        </li>
        <li>
          Driver Number:
          <p>{busData.driverNumber || "N/A"}</p>
        </li>
        <li>
          ETA:
          <p> Arriving in {busData.duration || "N/A"}</p>
        </li>
        <li>
          Total Distance
          <p> {busData.distance || "N/A"}</p>
        </li>
      </ul>
    </div>
  );
};

export default BusInfo;
