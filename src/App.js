import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/dynamic/About";
import Contact from "./components/dynamic/Contact";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Products from "./components/products/Products";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="home" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="aboutus" element={<About />}></Route>
          <Route path="contactus" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
