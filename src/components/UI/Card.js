import './Card.css';
import React from "react";

const Card = (props) => {
    const className = 'card ' + props.class;
    return (
        <div className= {className}>{props.children}</div>
    );
}

export default Card;