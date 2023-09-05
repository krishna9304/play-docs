import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Upload from "./pages/upload/upload";
import SearchNDownload from "./pages/searchAndDownload/searchAndDownload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/search-and-download" element={<SearchNDownload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
