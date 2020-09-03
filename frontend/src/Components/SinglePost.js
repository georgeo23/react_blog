import React from "react";

function SinglePost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>By: {props.alias}</h3>
            {props.showBody && <p>{props.body}</p>}
        </div>
    )
}

export default SinglePost