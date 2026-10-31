import React, { useState } from "react";
import { useDriverService } from "../context/DriverContext";
import UpdateDriver from "./UpdateDriver"; // Update this path as needed

const DriverCard = ({ driver }) => {
  const { deleteDriver, refreshDrivers } = useDriverService();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await deleteDriver(driver.id);
    refreshDrivers();
  };

  const handleUpdate = () => {
    setOpen(true);
  };

  return (
    <article className="flex flex-col items-center w-72 border-gray-600 border-2 rounded-2xl p-4 mb-12 gap-4">
      {/* Driver details */}
      <h3 className="text-2xl">{driver.name}</h3>
      <p className="text-xl">{driver.age}</p>
      <p className="text-xl">{driver.country}</p>
      <img
        className="w-40"
        src={`https://localhost:7031/images/${driver.imageName}`}
        alt={driver.name}
      />
      <div className="flex flex-row gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 px-4 py-1 border-gray-600 border-2 rounded-2xl"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-1 border-gray-600 border-2 rounded-2xl"
        >
          Delete
        </button>
      </div>
      {open && (
        <UpdateDriver
          id={driver.id}
          driver={driver}
          closePopup={() => setOpen(false)}
        />
      )}
    </article>
  );
};

export default DriverCard;
