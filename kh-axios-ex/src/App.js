import logo from "./logo.svg";

import "./App.css";
import Axios from "./Axios";
import News from "./News";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStrore";
import ImageUploader from "./pages/imageUploader";
function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
