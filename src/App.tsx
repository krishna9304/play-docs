import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Upload from "./pages/upload/upload";
import SearchNDownload from "./pages/searchAndDownload/searchAndDownload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/search-and-download" element={<SearchNDownload />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
