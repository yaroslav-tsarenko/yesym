import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VirtualNumbers from "./pages/VirtualNumbers";
import CompabilityDevices from "./pages/CompabilityDevices";
import Etnerprise from "./pages/Etnerprise";
import Regions from "./pages/Regions";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/virtualnumbers":
        title = "";
        metaDescription = "";
        break;
      case "/compabilitydevices":
        title = "";
        metaDescription = "";
        break;
      case "/etnerprise":
        title = "";
        metaDescription = "";
        break;
      case "/regions":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/virtualnumbers" element={<VirtualNumbers />} />
      <Route path="/compability-devices" element={<CompabilityDevices />} />
      <Route path="/enterprise" element={<Etnerprise />} />
      <Route path="/regions" element={<Regions />} />
    </Routes>
  );
}
export default App;
