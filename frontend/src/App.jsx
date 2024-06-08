import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./components/Search";
export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>

        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/update-post/:postId" element={<UpdatePost/>}/>
        </Route>
        
        <Route path="/post/:postSlug" element={<PostPage/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
