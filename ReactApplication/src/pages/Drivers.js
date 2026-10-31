import React, { useState } from "react";
import AddDriver from "../Components/AddDriver";
import DriverCard from "../Components/DriverCard";
import { useDriverService } from "../context/DriverContext";

const Drivers = () => {
  const { drivers, getDriverById } = useDriverService();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("name");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    let results = [];

    if (filterType === "id") {
      const idToSearch = parseInt(searchTerm, 1);
      if (!isNaN(idToSearch)) {
        results = await getDriverById(idToSearch);
        setSearchResults(Array.isArray(results) ? results : [results]);
      }
    }

    // Log after state update (but it will show previous state due to async nature)
    console.log(searchResults);
  };

  console.log(searchResults);
  return (
    <>
      <section className="flex justify-center mb-12">
        <div className="w-full max-w-4xl px-4 md:px-8">
          <h1 className="font-extrabold text-3xl md:text-5xl text-center md:text-left border-black rounded-tr-2xl border-t-8 border-r-8 mb-8 mt-8 md:mb-12 md:mt-12">
            F1 Drivers 2023
          </h1>
          <p className="bg-slate-100 text-left p-4 rounded-lg shadow-md">
            Check out this season's official F1 line-up. Full breakdown of
            drivers, points and current positions.
            <br /> Follow your favourite F1 drivers on and off the track.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <AddDriver />
      </section>
      <section className="flex justify-center mb-4">
        <div className="w-full max-w-md px-4 md:px-8 flex gap-4">
          <input
            type="number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="Search drivers..."
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border rounded py-2 px-3 bg-white"
          >
            <option value="id">ID</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:w-3/4 lg:w-1/2 mx-auto">
        {searchResults.length > 0
          ? searchResults.map((driver) => (
              <DriverCard driver={driver} key={driver.id} />
            ))
          : drivers.map((driver) => (
              <DriverCard driver={driver} key={driver.id} />
            ))}
      </section>
    </>
  );
};

export default Drivers;
