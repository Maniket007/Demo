import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import LandingPage_Content from "../../Components/Landingpage_content/Landingpage_content";
function LandingPage(){
    return (
        <div className="landingpage_container">
            <NavBar/>
           <LandingPage_Content/>
        </div>
    );
}
export default LandingPage