import { ChangeEvent, useState } from "react";
import "./searchAndDownload.css";
import axios from "axios";
import { toast } from "react-toastify";

interface SearchNDownloadProps {}

const initialSNDForm = {
  email: "",
  filename: "",
};
const SearchNDownload: React.FC<SearchNDownloadProps> = () => {
  const [sndForm, setSNDForm] = useState<{
    email: string;
    filename: string;
  }>(initialSNDForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSNDForm((uf) => ({ ...uf, [e.target.name]: e.target.value }));
  };

  const handleDownload = async () => {
    try {
      if (sndForm.filename.length == 0 || sndForm.email.length == 0) {
        toast("Please fill the form correctly");
        return;
      }
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/download`,
        {
          filename: sndForm.email + "_" + sndForm.filename,
        }
      );

      // logic to save the file
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", sndForm.filename);
      document.body.appendChild(link);
      link.click();
      setSNDForm(initialSNDForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="snd-container">
      <div className="snd-formlabel">Search and Download</div>

      <div className="snd-form">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={sndForm.email}
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          name="filename"
          type="text"
          value={sndForm.filename}
          placeholder="Enter your filename"
        />
      </div>

      <button onClick={handleDownload}>Search</button>

      <div>Search results will appear here</div>
    </div>
  );
};

export default SearchNDownload;
