// Write your code below:
import React from 'react';
import './Card.css';

const Card = (props) => {
  return <div classname="card">{props.children}</div>;
};

export default Card;