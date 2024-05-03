import React from 'react';
import './style.css'

import Logo from '../../objects/Logo';
import Sobre from '../../objects/Sobre';
import IconClose from "../../objects/IconClose";

const HeaderInternal = () => (
    <header className="header-internal">
        <Logo light />
        <Sobre className={"light"}/>
        <IconClose/>
    </header>
);

export default HeaderInternal;
