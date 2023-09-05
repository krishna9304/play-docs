import "./upload.css";

interface UploadProps {}

const Upload: React.FC<UploadProps> = () => {
  return (
    <div className="upload-container">
      <div>
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your filename" />
      </div>
    </div>
  );
};

export default Upload;
