import { ChangeEvent, useState } from "react";
import "./upload.css";
import axios from "axios";
import { toast } from "react-toastify";

interface UploadProps {}

const initialUploadForm = {
  email: "",
  filename: "",
  user_file: "",
};
const Upload: React.FC<UploadProps> = () => {
  const [uploadForm, setUploadForm] = useState<{
    email: string;
    filename: string;
    user_file: any;
  }>(initialUploadForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadForm((uf) => ({ ...uf, [e.target.name]: e.target.value }));
  };

  const handleUpload = async () => {
    const requestFormData = new FormData();
    requestFormData.append("email", uploadForm.email);
    requestFormData.append("filename", uploadForm.filename);
    requestFormData.append("user_file", uploadForm.user_file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/upload`,
        requestFormData
      );
      toast(res.data.message);
      setUploadForm(initialUploadForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-formlabel">Upload Form</div>
      <div className="upload-form">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={uploadForm.email}
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          name="filename"
          type="text"
          value={uploadForm.filename}
          placeholder="Enter your filename"
        />
      </div>

      <div className="file-input-container">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUploadForm((uf) => ({
              ...uf,
              user_file: e.target.files ? e.target.files[0] : "",
            }));
          }}
          type="file"
        />
      </div>

      <button value={uploadForm.user_file} onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default Upload;
