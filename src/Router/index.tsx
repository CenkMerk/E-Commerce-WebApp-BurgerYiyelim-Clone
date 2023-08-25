import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LocationPage from "../pages/LocationPage";
import AboutUsPage from "../pages/AboutUsPage";
import FranchisingPage from "../pages/FranchisingPage";
import HelalPage from "../pages/HelalPage";
import HumanResourcesPage from "../pages/HumanResourcesPage";
import ContactPage from "../pages/ContactPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/location" element={<LocationPage/>} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/franchising" element={<FranchisingPage/>} />
      <Route path="/helal" element={<HelalPage />} />
      <Route path="/human-resources" element={<HumanResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product" element={<ProductsPage />} />
    </Routes>
  );
};

export default index;
