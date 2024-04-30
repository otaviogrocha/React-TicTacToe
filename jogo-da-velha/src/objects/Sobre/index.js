import React from "react";
import "./style.css";

const AboutLink = ({ onClick }) => (
    <a href="#to-do"
       className={"sobre"}
       onClick={onClick}
    >
        Sobre
    </a>
);

export default AboutLink;