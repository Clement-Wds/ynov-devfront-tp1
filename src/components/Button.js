import React from 'react'

const Button = (props) => {
  return (
    <div className="product-button">
        <button type={props.type} className={props.classes} onClick={props.click}>
            {props.content}
        </button>
    </div>
  );
}

export default Button