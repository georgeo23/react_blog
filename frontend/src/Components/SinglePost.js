import React from "react";
import { NavLink } from "react-router-dom";

function SinglePost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>By: {props.alias}</h3>
            {props.showBody && <p>{props.body}</p>}
            <NavLink to={`/posts/${props.id}`}>CLICK TO GO</NavLink>
        </div>
    )
}

export default SinglePost