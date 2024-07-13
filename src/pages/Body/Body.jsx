import { Route, Routes } from "react-router-dom";
// import { Services } from "../components/Services";
import { Home } from "../Home/Home";
export function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
