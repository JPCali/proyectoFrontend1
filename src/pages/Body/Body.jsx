import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
export function Body() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
