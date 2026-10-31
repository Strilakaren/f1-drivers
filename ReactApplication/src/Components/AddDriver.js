import React, { useState } from "react";
import ImageUploadService from "../services/UploadImageService";
import { useDriverService } from "../context/DriverContext";

const AddDriver = ({ onAddDriver }) => {
  const { addDriver, refreshDrivers } = useDriverService(); // Use addDriver from context
  const [image, setImage] = useState(null);
  const [newDriver, setNewDriver] = useState({
    id: 0,
    name: "",
    age: "",
    country: "",
    imageName: "",
  });
  const [imageUploadStatus, setImageUploadStatus] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setNewDriver({ ...newDriver, imageName: file.name });
  };

  const handleAddNewDriver = async () => {
    setImageUploadStatus("Uploading image...");
    try {
      if (image != null) {
        await ImageUploadService.uploadImage(image);
      }
      setImageUploadStatus("Uploading image finished");

      await addDriver(newDriver); // Use addDriver from context
      setNewDriver({ id: 0, name: "", age: "", country: "", imageName: "" });
      refreshDrivers(); // Refresh the list of drivers
    } catch (error) {
      setImageUploadStatus("Upload failed");
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="id"
          className="w-full p-2 border-gray-300 rounded"
          value={newDriver.id}
          onChange={(e) => setNewDriver({ ...newDriver, id: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="name"
          className="w-full p-2 border-gray-300 rounded"
          value={newDriver.name}
          onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="age"
          className="w-full p-2 border-gray-300 rounded"
          value={newDriver.age}
          onChange={(e) => setNewDriver({ ...newDriver, age: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="country"
          className="w-full p-2 border-gray-300 rounded"
          value={newDriver.country}
          onChange={(e) =>
            setNewDriver({ ...newDriver, country: e.target.value })
          }
        ></input>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border-gray-300 rounded"
        ></input>
        <button
          onClick={handleAddNewDriver}
          className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded mb-12"
        >
          Add A New Driver
        </button>
      </div>
      {imageUploadStatus && <p>{imageUploadStatus}</p>}
    </div>
  );
};
export default AddDriver;
