import React from "react";
import "./style.css";

const AboutLink = ({ onClick, className='' }) => (
    <a href="#to-do" className={`sobre `+ className} onClick={onClick}>
        Sobre
    </a>
);

export default AboutLink;