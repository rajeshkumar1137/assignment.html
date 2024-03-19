import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Componet/Header";

import Add_Admin from "./Pages/Add_Admin";
import Add_blog from "./Pages/Add_blog";
import Add_cart from "./Pages/Add_cart";

import Add_products from "./Pages/Add_products";

import Manage_cart from "./Pages/Manage_cart";

import Manage_Product from "./Pages/Manage_Product";
import Manage_contact from "./Pages/Manage_contact";
import Messages_Tasks from "./Pages/Messages_Tasks";
import Manage_Admin from "./Pages/Manage_Admin";


import View_Products from "./Pages/View_Products";
import Manage_blog from "./Pages/Manage_blog";

import Add_emp from "./Pages/Add_emp";
import Manage_emp from "./Pages/Manage_emp";
import Edit_emp from "./Pages/Edit_emp";
import Edit_user from "./Pages/Edit_user";
import Manage_User from "./Pages/Manage_User";
import Edit_admin from "./Pages/Edit_admin";
import Edit_categories from "./Pages/Edit_categories";
import Manage_Categories from "./Pages/Manage_Categories";
import Add_categories from "./Pages/Add_categories";
import Edit_products from "./Pages/Edit_products";
import Edit_blog from "./Pages/Edit_blog";




























function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<><Login /></>}></Route>
          <Route path="/home" element={<><Header /><Home /></>}></Route>
          <Route path="/Add_categories" element={<><Header /><Add_categories /></>}></Route>
          <Route path="/Add_Admin" element={<><Header /><Add_Admin /></>}></Route>
          <Route path="/Add_products" element={<><Header /><Add_products /></>}></Route>
          <Route path="/Add_blog" element={<><Header /><Add_blog /></>}></Route>
          <Route path="/Add_cart" element={<><Header /><Add_cart /></>}></Route>
          <Route path="/Add_emp" element={<><Header /><Add_emp /></>}></Route>
          <Route path="/Manage_emp" element={<><Header /><Manage_emp /></>}></Route>
          <Route path="/Manage_Categories" element={<><Header /><Manage_Categories /></>}></Route>
          <Route path="/Manage_Product" element={<><Header /><Manage_Product /></>}></Route>
          <Route path="/Manage_contact" element={<><Header /><Manage_contact /></>}></Route>
          <Route path="/Manage_Admin" element={<><Header /><Manage_Admin /></>}></Route>
          <Route path="/Manage_cart" element={<><Header /><Manage_cart /></>}></Route>
          <Route path="/Manage_blog" element={<><Header /><Manage_blog /></>}></Route>

          <Route path="/Edit_emp/:id" element={<><Header /><Edit_emp /></>}></Route>
          <Route path="/Edit_user/:id" element={<><Header /><Edit_user /></>}></Route>
          <Route path="/Edit_admin/:id" element={<><Header /><Edit_admin /></>}></Route>
          <Route path="/Edit_blog/:id" element={<><Header /><Edit_blog /></>}></Route>
          <Route path="/Edit_categories/:id" element={<><Header /><Edit_categories /></>}></Route>
          <Route path="/Edit_products/:id" element={<><Header /><Edit_products /></>}></Route>


          <Route path="/Manage_User" element={<><Header /><Manage_User /></>}></Route>


          <Route path="/Messages_Tasks" element={<><Header /><Messages_Tasks /></>}></Route>
          <Route path="/View_Products" element={<><Header /><View_Products /></>}></Route>
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
