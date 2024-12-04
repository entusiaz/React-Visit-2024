// App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-[#F8F3EE]">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
