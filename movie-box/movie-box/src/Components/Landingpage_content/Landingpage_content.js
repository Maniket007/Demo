import React from "react";
import "./Landingpage_content.css";
function LandingPage_Content(){
    return (
        <div className="landingpage_content_container">
            <p className="landingpage_content_title">
                Unlimited films, TV Programmes and more.
            </p>
            <p className="landingpage_content_subtitle">
                Watch from anywhere. cancel at anytime.
            </p>
            <p className="landingpage_content_description">
                Ready to watch? Enter your email to create or restart your membership.{" "}
            </p>
            <div className="landingpage_content_input">
                <input type='text'/>
                <button>Get Started</button>
            </div>
        </div>
    )
}
export default LandingPage_Content;