import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import HomePage from "./pages/Home/HomePage";
import VendorPage from "./pages/Vendor/VendorPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Feeds from "./pages/Home/Feeds";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="" element={<HomePage />}>
            <Route path="/home" element={<Feeds />} />
          </Route>
          <Route index path="/vendor" element={<VendorPage />} />
          <Route index path="/me" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
