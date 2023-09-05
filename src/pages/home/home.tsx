import { Link } from "react-router-dom";
import "./home.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <div className="logo">pD</div>
      <h1>Welcome to play docs ☘️</h1>
      <p>You can do the following activities here 💃</p>

      <ul>
        <li>Upload a file 🚀</li>
        <li>Search amongst uploaded files 👀</li>
        <li>Download a file ⬇️</li>
      </ul>

      <div className="btn-container">
        <Link to={"/upload"}>
          <button>Upload files</button>
        </Link>

        <Link to={"/search-and-download"}>
          <button>Search and download files</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
