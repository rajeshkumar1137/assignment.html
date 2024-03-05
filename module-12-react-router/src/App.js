  import React,{lazy,Suspense} from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import { ToastContainer, toast} from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css'
//  import React,{lazy,Suspense} from "react";
 
import Header from './component/Header'
import Login from './pages/Login'
import Add_admin from './pages/Add_admin'
import Home from './pages/Home'
import Manage_admin from './pages/Manage_admin'

import Add_cate from './pages/Add_cate'
import Add_contact from './pages/Add_contact'
import Add_product from './pages/Add_product'
import Add_employee from './pages/Add_employee'
import Add_blog from './pages/Add_blog'
import Add_customer from './pages/Add_customer'
import Footer from './component/Footer'
 const  Manage_cate=React.lazy(()=>import('./pages/Manage_cate')) 
 const  Manage_product=React.lazy(()=>import('./pages/Manage_product')) 
 const  Manage_contact=React.lazy(()=>import( './pages/Manage_contact'))
 const  Manage_employee=React.lazy(()=>import( './pages/Manage_employee'))
 const  Manage_customer=React.lazy(()=>import( './pages/Manage_customer'))
 const  Manage_blog=React.lazy(()=>import(  './pages/Manage_blog'))

const Edit_admin=React.lazy(()=>import( './pages/Edit_admin'))
const Edit_cate=React.lazy(()=>import('./pages/Edit_cate'))
const Edit_product=React.lazy(()=>import('./pages/Edit_product'))
const Edit_contact=React.lazy(()=>import('./pages/Edit_contact'))
const Edit_customer=React.lazy(()=>import('./pages/Edit_customer'))
const Edit_employee=React.lazy(()=>import('./pages/Edit_employee'))
const  Edit_blog=React.lazy(()=>import('./pages/Edit_blog'))



  
  function App() {
    return (
      <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
       <Route path='/' index element={<><Login/></>}></Route> 
       <Route path='/Home' index element={<><Header/><Home/><Footer/></>}></Route> 
       <Route path='/Add_admin' index element={<><Header/><Add_admin/><Footer/></>}></Route>
       <Route path='/Manage_add' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_admin/><Footer /></Suspense></>}></Route>
       <Route path="/edit_admin/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_admin/><Footer /></Suspense></>}></Route>
       <Route path="/edit_cate/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_cate/><Footer /></Suspense></>}></Route>
       <Route path="/edit_prod/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_product/><Footer /></Suspense></>}></Route>
       <Route path="/edit_contact/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_contact/><Footer /></Suspense></>}></Route>
       <Route path="/edit_customer/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_customer/><Footer /></Suspense></>}></Route>
       <Route path="/edit_employee/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_employee/><Footer /></Suspense></>}></Route>
       <Route path="/edit_blog/:id"  element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Edit_blog/><Footer /></Suspense></>}></Route>
       <Route path='/Manage_cate' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_cate/><Footer /></Suspense></>}></Route>
       <Route path='/Manage_prod' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_product/><Footer /></Suspense></>}></Route>
       <Route path='/Mnage_cont' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_contact/><Footer /></Suspense></>}></Route>
       <Route path='/Add_cate' index element={<><Header/><Add_cate/></>}></Route>
       <Route path='/Add_prod' index element={<><Header/><Add_product/></>}></Route>
       <Route path='/Add_contact' index element={<><Header/><Add_contact/></>}></Route>
       <Route path='/Add_employee' index element={<><Header/><Add_employee/></>}></Route>
       <Route path='/Add_customer' index element={<><Header/><Add_customer/></>}></Route>
       <Route path='/Add_blog' index element={<><Header/><Add_blog/></>}></Route>
       <Route path='/Manage_employee' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_employee/><Footer /></Suspense></>}></Route>
       <Route path='/Manage_customer' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_customer/><Footer /></Suspense></>}></Route>
       <Route path='/Manage_blog' index element={<><Header/><Suspense fallback = { <div className="spinner-border" />} ><Manage_blog/><Footer /></Suspense></>}></Route>  
      
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
  
  export default App