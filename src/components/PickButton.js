import React from "react";

export default function PickButton({ handlePick }) {
  return (
    <button
      className=" uppercase font-semibold text-lg bg-orange-400 rounded-full p-16"
      onClick={() => handlePick()}
    >
      Pick!
    </button>
  );
}
