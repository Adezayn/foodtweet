import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import HomePage from "./pages/Home/HomePage";
import VendorPage from "./pages/Vendor/VendorPage";
import UserProfile from "./pages/UserProfile/UserProfile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/home" element={<HomePage />} />
        <Route index path="/vendor" element={<VendorPage />} />
        <Route index path="/me" element={<UserProfile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
