import React from 'react';

import './HomePage.css';


function HomePage () {
    return(
        <>
        <div
            class = "backgroundImage"
            style = {{
               height: "800px",
               width: "2000px",
               backgroundImage:
               'url("https://th.bing.com/th/id/OIP.Md9rIieTbA4A3uMW19ng0AHaIV?pid=ImgDet&w=950&h=1069&rs=1")',
            
            }} >
            <div className="TITLE">
            <h1>JOLLIBUBUYOG</h1>
            <img src= "https://www.todocanada.ca/wp-content/uploads/jolibee.jpg" alt='logo'/>
            </div>
             
            
        </div>
        
        </>
    )
}

export default HomePage;