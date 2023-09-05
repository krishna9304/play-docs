import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Upload from "./pages/upload/upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
