import React from "react";

function Avatar(props) {
    return <img key={props.id} src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`} alt="avatar-img" />;
}

export default Avatar;