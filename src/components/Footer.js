import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
    <div className="footer">
        <div className="socialMedia">
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
        </div>
        <p> &copy; 2025 luciensomorai.com</p>
    </div>
    );
}

export default Footer;