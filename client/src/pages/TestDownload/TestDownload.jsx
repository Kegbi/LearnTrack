import React, { useState } from "react";
import axios from "axios";

const TestDownload = () => {
  const [files, setFiles] = useState();

  const handleFileChange = (event) => {
    if (event.target.files.length === 0) return;
    setFiles(event.target.files);
  };
  const sendFiles = async (event) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    const { data } = await axios.post(
      "http://localhost:50000/uploadImage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data.success) {
      setFiles();
    }
  };
  return (
    <>
      <label htmlFor="file">
        {files === undefined ? "Choose file..." : files[0].name}
        <input
          type="file"
          accept="image/*"
          name="photo"
          id="file"
          hidden
          onChange={handleFileChange}
        />{" "}
      </label>
      <button onClick={sendFiles} disabled={files === undefined}>
        Upload
      </button>
    </>
  );
};

export default TestDownload;
