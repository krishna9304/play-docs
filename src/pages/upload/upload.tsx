import "./upload.css";

interface UploadProps {}

const Upload: React.FC<UploadProps> = () => {
  return (
    <div className="upload-container">
      <div className="upload-formlabel">Upload Form</div>
      <div className="upload-form">
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your filename" />
      </div>

      <div className="file-input-container">
        <input type="file" />
      </div>

      <button>Upload</button>
    </div>
  );
};

export default Upload;
