import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profiler from "./Profiler";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profiler" element={<Profiler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;