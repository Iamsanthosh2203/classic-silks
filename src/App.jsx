import Home from "./pages/Home";
import Productdetails from "./pages/Productdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./pages/Men";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetails/:itemId" element={<Productdetails />} />
        <Route path="/men" element={<Men />} />
      </Routes>
    </BrowserRouter>
  );
}
