import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import PrivateAuth from "./components/auth/PrivateAuth";
import Dashnav from "./components/DashBoard/dashnav";
import FrontPage from './components/Landingpage/frontpage/Frontpage'
import Navbar from './components/Landingpage/Navbar/Navbar'
import  Blog from './components/Landingpage/Blog/Blog'
import Guide from './components/Landingpage/Guide/Guide'
import Profile from './components/DashBoard/Profile/Profile'
import Addlist from "./components/DashBoard/Addlist/Addlist";
import YourList from './components/DashBoard/YourList/YourList'
import Setting from './components/DashBoard/Setting/Setting'

function App() {
  const renderRoute= ()=>{
    const currentPath= window.location.pathname;
    if(currentPath === '/'){
      return <Navbar/>
    }else if(currentPath === '/dashnav') {
      return <Dashnav/>
    }
  }

  return (
    <ChakraProvider>
      <Router>
       {renderRoute()}
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/private-auth" element={<PrivateAuth />} />
          <Route path="/dashnav" element={<Profile/>}/>
          <Route path="/addlist" element={<Addlist/>}/>
          <Route path="/yourlist" element={<YourList/>}/>
          <Route path="/setting" element={<Setting/>}/>
          
        </Routes>
      </Router>
    </ChakraProvider>
    
  )
}

export default App
