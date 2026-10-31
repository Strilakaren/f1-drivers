import axios from "axios";

const UploadImageService = (() => {
  const imageUploadEndpoint = "https://localhost:7031/UploadImage";

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
      const result = await axios({
        url: imageUploadEndpoint,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("file");

      return result.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  return {
    uploadImage,
  };
})();

export default UploadImageService;
