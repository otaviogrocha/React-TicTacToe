import React from "react";
import './style.css'
import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = ({src}) => (
        <dl className={"profile-user"}>
            <dd className={"avatar"}>
                <AvatarProfile src={src} alt={"Avatar do Otávio"}/>
            </dd>
            <dt className={"title"}>Otávio Rocha</dt>
            <dd className={"description"}> Intern Software Engineer</dd>
        </dl>
);

export default ProfileUser