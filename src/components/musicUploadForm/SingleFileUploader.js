import React, { useState } from "react";
import './index.css';

const SingleFileUploader = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("initial");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (fileType === "audio/mpeg" || fileType === "audio/wav") {
        setStatus("initial");
        setFile(selectedFile);
      } else {
        // Reset file state and show error message for invalid file type
        setStatus("fail");
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (file) {
      setStatus("uploading");

      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("fail");
      }
    }
  };

  return (
    <div className="file-container">
      <div className="file-input">
        <label htmlFor="file" className="sr-only">
        </label>
        <input
            id="file"
            type="file"
            accept=".mp3,.wav"
            onChange={handleFileChange}
            className="file-uploader"
            aria-label="add file in computer"
          />
      </div>
      {file && (
        <section className="section-one">
          File details:
          <ul className="file-info">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button onClick={handleUpload} className="submit" aria-label="upload file">
          Upload a file
        </button>
      )}

      <Result status={status} />
    </div>
  );
};

const Result = ({ status }) => {
  if (status === "success") {
    return <p>✅ File uploaded successfully!</p>;
  } else if (status === "fail") {
    return <p>❌ File upload failed!</p>;
  } else if (status === "uploading") {
    return <p>⏳ Uploading selected file...</p>;
  } else {
    return null;
  }
};

export default SingleFileUploader;










// import React, { useState } from "react";

// const SingleFileUploader = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (file) {
//       console.log("Uploading file...");

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         // You can write the URL of your server or any other endpoint used for file upload
//         const result = await fetch("https://httpbin.org/post", {
//           method: "POST",
//           body: formData,
//         });

//         const data = await result.json();

//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <>
//       <div>
//         <label htmlFor="file" className="sr-only">
//           Choose a file
//         </label>
//         <input id="file" type="file" onChange={handleFileChange} />
//       </div>
//       {file && (
//         <section>
//           File details:
//           <ul>
//             <li>Name: {file.name}</li>
//             <li>Type: {file.type}</li>
//             <li>Size: {file.size} bytes</li>
//           </ul>
//           <button onClick={handleUpload}>Upload a file</button>
//         </section>
//       )}
//     </>
//   );
// };

// export default SingleFileUploader;