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
               'url("https://wallpapercave.com/wp/wp2662866.jpg")',
          
            
            }} >
            <div className="TITLE">
            <h1>Welcome to online job search!</h1>
            <img src= "https://th.bing.com/th/id/R.3cf7ca6dac39437a9393a51120cf7cdc?rik=3XrzzisxVrxxXQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ZtbKxaWS6w4%2fWUkrHBbusMI%2fAAAAAAAAxX8%2ffYbPbXfHGsQNHvOX0EX5nJge_Easpo2_wCK4BGAYYCw%2fs1600%2fjob-search-remotive-home.png&ehk=IvmZ0EO75hDgdtGwEniQGi2ZY8UPZeGMIXkZz1yQcWo%3d&risl=&pid=ImgRaw&r=0" alt='logo'/>
            </div>
             
            
        </div>
        
        </>
    )
}

export default HomePage;