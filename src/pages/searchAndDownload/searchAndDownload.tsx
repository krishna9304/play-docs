import { ChangeEvent, useState } from "react";
import "./searchAndDownload.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FileCard } from "../../components/fileCard/fileCard";

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

  const [matchingFiles, setMatchingfiles] = useState<Array<string>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSNDForm((uf) => ({ ...uf, [e.target.name]: e.target.value }));
  };

  const handleDownload = async (email: string, filename: string) => {
    try {
      if (filename.length == 0 || email.length == 0) {
        toast("Please fill the form correctly");
        return;
      }
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/download`,
        {
          filename: email + "_" + filename,
        }
      );

      // logic to save the file
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      setSNDForm(initialSNDForm);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    if (sndForm.filename.length == 0 || sndForm.email.length == 0) {
      toast("Please fill the form correctly");
      return;
    }

    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_BASE_URL}/search`,
      {
        filename: sndForm.email + "_" + sndForm.filename,
      }
    );

    if (res.data.matching_files) {
      setMatchingfiles(res.data.matching_files);
      toast(res.data.matching_files.length + " matching results found!!");
    } else {
      toast(res.data.message);
    }
    setSNDForm(initialSNDForm);
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

      <button onClick={handleSearch}>Search</button>

      <div
        style={{
          fontWeight: 600,
        }}
      >
        Results:
      </div>
      <div className="results-section">
        {matchingFiles.map((val, idx) => {
          return (
            <FileCard
              key={idx}
              onClick={() => {
                const tmp = val.split("_");
                handleDownload(tmp[0], tmp[1]);
              }}
              fileName={val}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchNDownload;
