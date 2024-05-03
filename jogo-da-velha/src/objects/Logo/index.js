import React from 'react';
import LogoCollab from '../../img/logo.png';
import LogoCollabLight from '../../img/logo-light.png';

const Logo = ({ light = false}) => (
    <img className="logo-collab"
         src={light ? LogoCollabLight : LogoCollab}
         alt="Logo da CollabCode"
    />
);

export default Logo;