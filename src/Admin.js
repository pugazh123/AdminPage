import React from "react";
import "./AdminStyle/Admin.css"
import {AiOutlineCar,AiFillCarryOut} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {FaIdCard} from 'react-icons/fa'

import {
  Route,
  NavLink,

  Routes
} from "react-router-dom";

import Cabcord from "./AdminComponents/cabcord";
import Cabavail from "./AdminComponents/cabavail";
import Employee from "./AdminComponents/employee";
import Cabassign from "./AdminComponents/cabassign";

export default function Admin(){
    return (
    
        <div>
          
          <div className="header">
          <div className="logo">
           <center> <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" alt="img"/></center>
          </div>
          <h1>Admin Panel</h1>

            
            
          <li><NavLink to="/"><AiOutlineCar/>  Cab Availability</NavLink></li>
            <li><NavLink to="/Employee"><BsPersonCircle/> Employee</NavLink></li>
           
            <li><NavLink to="/CabCordinators"><FaIdCard/> Cab Cordinators</NavLink></li>
            <li ><NavLink to="/Cabassign"><AiFillCarryOut/> Cab Assign</NavLink></li>

          </div>
          <div className="back">
          <div className="content">

          <Routes>
            <Route  exact path="/" element={<Cabavail/>}/>
            <Route path="/Employee" element={<Employee/>}/>
            <Route path="/Cabassign" element={<Cabassign/>}/>
            <Route path="/CabCordinators" element={<Cabcord/>}/>
               </Routes>
          </div>
          </div>
        </div>
   
    );
  }

