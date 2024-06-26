import React from 'react';
import './style.css';

import Card from '../../objects/Card';
import Player from '../../objects/Player';

const Hashtag = () => (
    <Card>
        <ul className="hashtag">
            <li className="item"><Player player='o'/> </li>
            <li className="item"><Player player='x'/> </li>
            <li className="item"><Player player='x'/> </li>

            <li className="item"><Player player='x'/> </li>
            <li className="item"><Player player='o'/> </li>
            <li className="item"><Player player='x'/> </li>

            <li className="item"><Player player='o'/> </li>
            <li className="item"><Player player='x'/> </li>
            <li className="item"><Player player='o'/> </li>
        </ul>
    </Card>
)


export default Hashtag;
