import React, { useState } from "react";
import { useDriverService } from "../context/DriverContext";

const UpdateDriver = ({ id, driver, closePopup }) => {
  const [driverData, setDriverData] = useState({
    id: driver.id,
    name: driver.name,
    age: driver.age,
    country: driver.country,
    imageName: driver.imageName,
  });

  const { updateDriver, refreshDrivers } = useDriverService();

  const handleUpdate = async (e) => {
    e.preventDefault();

    console.log("Updating driver ID:", id);
    try {
      await updateDriver(driverData);
      refreshDrivers(); // Refresh the list of drivers
      closePopup(); // Close the popup after updating
    } catch (error) {
      console.error("Error updating driver:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto my-6 bg-white rounded-lg shadow-lg">
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-2xl font-semibold">Update Driver Information</h3>
          <button
            onClick={closePopup}
            className="p-1 ml-auto text-3xl text-black"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleUpdate} className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={driverData.name}
              onChange={(e) =>
                setDriverData({ ...driverData, name: e.target.value })
              }
              className="border rounded w-full py-2 px-3"
              placeholder="Enter driver name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-bold mb-2">
              Age:
            </label>
            <input
              id="age"
              type="number"
              value={driverData.age}
              onChange={(e) =>
                setDriverData({
                  ...driverData,
                  age: parseInt(e.target.value),
                })
              }
              className="border rounded w-full py-2 px-3"
              placeholder="Enter driver age"
            />
          </div>

          <button
            className="w-full bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Update Driver
          </button>
        </form>
        <div className="p-6 border-t border-gray-200 text-right">
          <button
            onClick={closePopup}
            className="text-red-500 uppercase text-sm px-6 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDriver;
