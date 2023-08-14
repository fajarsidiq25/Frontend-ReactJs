import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import { Routes, Route } from "react-router-dom";
import MenuApp from "./components/MenuApp";



function MenuCategory() {
  return <div>
    <Routes>
      <Route path="/login" element={<LoginComp />} />
      <Route path="/home" element={<HomeComp />} />
      <Route path="/menu" element={<MenuApp />} />


    </Routes>
  </div>
}

export default MenuCategory;
