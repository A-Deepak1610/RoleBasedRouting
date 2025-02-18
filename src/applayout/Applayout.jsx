import React from 'react'
import {Routes, Route,Navigate } from "react-router-dom";
import Login from '../pages/Login';
import UserDetails from '../store/Store'
import Students from '../pages/Students';
import Faculty from '../pages/Faculty';
import Admin from '../pages/Admin';
export default function Applayout() {
  const {user}=UserDetails();
  
  return (
    <div>
         <Routes>
        <Route path="/RoleBasedRouting/" element={<Login />} />
        <Route path="/RoleBasedRouting/student" element={user?.includes("student") ? <Students /> : <Navigate to="/RoleBasedRouting/" />} />
        <Route path="/RoleBasedRouting/faculty" element={user?.includes("faculty") ? <Faculty/> : <Navigate to="/RoleBasedRouting/" />} />
        <Route path="/RoleBasedRouting/admin" element={user?.includes("admin") ? <Admin/> : <Navigate to="/RoleBasedRouting/" />} />
      </Routes>

    </div>
  )
}
