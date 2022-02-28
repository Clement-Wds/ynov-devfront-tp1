import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input 
          className={props.classes}
          type={props.type}
          name={props.name}
          id={props.id}
          required={props.required}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
    </div>
  );
}

export default Input