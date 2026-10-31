import axios from "axios";
const DriverService = (() => {
  const driver_url = "https://localhost:7031/Driver";
  const addDriver = async (newDriver) => {
    try {
      await axios.post(driver_url, newDriver);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDriver = async (id) => {
    try {
      await axios.delete(`${driver_url}/${id}`);
    } catch (error) {
      console.error("There was an error deleting the driver:", error);
    }
  };
  const updateDriver = async (updatedDriver) => {
    console.log(updatedDriver);
    console.log(`${driver_url}/${updatedDriver.id}`);

    try {
      await axios.put(
        `${driver_url}/${updatedDriver.id}`,
        updatedDriver
      );
    } catch (error) {
      console.error("There was an error updating the driver:", error);
    }
  };
  const getAllDrivers = async () => {
    try {
      const response = await axios.get(driver_url);
      return response.data;
    } catch (error) {
      console.error("Error fetching drivers", error);
      return [];
    }
  };
  const getDriverById = async (id) => {
    try {
      const response = await axios.get(`${driver_url}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching driver", error);
      return [];
    }
  };
  const getDriverByName = async (name) => {
    try {
      const response = await axios.get(`${driver_url}/${name}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching driver", error);
      return [];
    }
  };
  const getDriverByCountry = async (country) => {
    try {
      const response = await axios.get(`${driver_url}/${country}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching driver", error);
      return [];
    }
  };
  return {
    addDriver,
    deleteDriver,
    updateDriver,
    getAllDrivers,
    getDriverById,
    getDriverByName,
    getDriverByCountry,
  };
})();
export default DriverService;
