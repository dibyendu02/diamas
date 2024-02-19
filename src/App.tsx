import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Legacy from "./pages/legacy";
import Media from "./pages/media";
import Collection from "./pages/collection";
import Error from "./pages/404";
import Header from "./components/header";
import FooterWithSocialLinks from './components/footer';

function App() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <BrowserRouter>

        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/media" element={<Media />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <div className="">
          <FooterWithSocialLinks />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
