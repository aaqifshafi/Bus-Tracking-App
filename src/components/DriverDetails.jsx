import React from "react";

function DriverDetails() {
  return (
    <div>
      <div className=" h-full font-medium self-center justify-self-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Details
        </h3>
        <hr />
        <br />
        <ul className="my-2 ml-4 list-disc [&>li]:mt-2">
          <li>
            Bus Name:
            <p>B-21s</p>
          </li>
          <br />
          <li>
            Bus Number:
            <p>JK01 7777</p>
          </li>
          <li>
            Bus Location:
            <p>Bus is at the bus stop</p>
          </li>
          <li>
            Driver Name:
            <p>Rashid Ahmad</p>{" "}
          </li>
          <li>
            Driver Number:
            <p>999999900</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DriverDetails;
