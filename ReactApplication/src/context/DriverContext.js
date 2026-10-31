import React, { createContext, useContext, useState, useEffect } from "react";
import DriverService from "../services/DriverService";

const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const refreshDrivers = async () => {
    try {
      const fetchedDrivers = await DriverService.getAllDrivers();
      setDrivers(fetchedDrivers);
    } catch (error) {
      console.error("Failed to fetch drivers", error);
    }
  };

  useEffect(() => {
    refreshDrivers();
  }, []);

  const contextValue = {
    drivers,
    selectedDriver,
    setSelectedDriver,
    refreshDrivers,
    addDriver: DriverService.addDriver,
    deleteDriver: DriverService.deleteDriver,
    updateDriver: DriverService.updateDriver,
    getDriverById: DriverService.getDriverById,
    getDriverByName: DriverService.getDriverByName,
    getDriverByCountry: DriverService.getDriverByCountry,
  };

  return (
    <DriverContext.Provider value={contextValue}>
      {children}
    </DriverContext.Provider>
  );
};

export const useDriverService = () => {
  const context = useContext(DriverContext);
  if (context === undefined) {
    throw new Error("useDriverService must be used within a DriverProvider");
  }
  return context;
};
