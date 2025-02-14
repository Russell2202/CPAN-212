import React, { useState } from "react";
import "./App.css"; // Ensure App.css is correctly imported

const App = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImage, setDogImage] = useState(null);
  const [message, setMessage] = useState("");

  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.log(error);
      setMessage("Failed to fetch dog image.");
    }
  };

  const submitDogImage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(displayDogImage);
      const data = await response.blob();

      const formData = new FormData();
      formData.append("file", data, "dogo.jpg");

      const uploadFile = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const responseData = await uploadFile.json();
      setMessage(responseData.message || "Dog image uploaded successfully!");
    } catch (error) {
      console.log(error);
      setMessage("Failed to upload dog image.");
    }
  };

  const fetchMultipleImages = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/multiple");
      const data = await response.json();

      const filePromises = data.map(async (filename) => {
        const fetchFile = await fetch(`http://localhost:8000/fetch/file/${filename}`);
        const fileBlob = await fetchFile.blob();
        return URL.createObjectURL(fileBlob);
      });

      const imageUrls = await Promise.all(filePromises);
      setDisplayImages(imageUrls);
    } catch (error) {
      console.log(error);
      setMessage("Failed to fetch multiple images.");
    }
  };

  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob();
      setDisplayImage(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching single file:", error);
      setMessage("Failed to fetch single file.");
    }
  };

  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
      setMessage("Failed to upload file.");
    }
  };

  return (
    <div className="container">
      {message && <div className="message">{message}</div>}

      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img src={displayImage} alt="Display Image" />
        </div>
      )}

      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit">Upload Single File</button>
      </form>

      <button onClick={fetchMultipleImages}>Fetch Multiple Images</button>
      <div className="image-grid">
        {displayImages.length > 0 ? (
          displayImages.map((imageURL, index) => (
            <div key={index}>
              <img src={imageURL} alt={`Image ${index}`} />
            </div>
          ))
        ) : (
          <p>No images to display yet</p>
        )}
      </div>

      <button onClick={fetchDogImage}>Get the dog</button>
      {displayDogImage && (
        <div>
          <h3>Here’s the dog</h3>
          <img src={displayDogImage} alt="Dog" />
          <button onClick={submitDogImage}>Submit to server</button>
        </div>
      )}
    </div>
  );
};

export default App;
