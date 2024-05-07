import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

import "./App.css";
import Age from "./pages/Age";
import { isCompositeComponent } from "react-dom/test-utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/profiles/:usename" element={<Profile />} />
          <Route path="/Age" element={<Age />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
