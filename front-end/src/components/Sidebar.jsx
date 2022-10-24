import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegCalendarAlt,
    FaHourglass,
    FaMapMarkerAlt,
    FaBullhorn,
    FaScroll
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Inicio",
            icon:<FaTh/>
        },
        {
            path:"/organizacion",
            name:"Organizadores",
            icon:<FaUserAlt/>
        },
        {
            path:"/plantilla",
            name:"Plantillas",
            icon:<FaScroll/>
        },
        {
            path:"/calendario",
            name:"Calendario",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/ubicacion",
            name:"Ubicación",
            icon:<FaMapMarkerAlt/>
        },
        {
            path:"/memorias",
            name:"Memorias",
            icon:<FaHourglass/>
        },
        {
            path:"/avisos",
            name:"Avisos",
            icon:<FaBullhorn/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">RUIM</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;