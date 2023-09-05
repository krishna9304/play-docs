import "./searchAndDownload.css";

interface SearchNDownloadProps {}

const SearchNDownload: React.FC<SearchNDownloadProps> = () => {
  return (
    <div className="snd-container">
      <div className="snd-formlabel">Search and Download</div>

      <div className="snd-form">
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your filename" />
      </div>

      <button>Search</button>

      <div>Search results will appear here</div>
    </div>
  );
};

export default SearchNDownload;
