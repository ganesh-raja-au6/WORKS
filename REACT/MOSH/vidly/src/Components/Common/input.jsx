import React from "react";

const Input = ({name, label, value,error, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor="username"> {label} </label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        type={name}
        name={name}
        id={name}
        placeholder={name}
        className="form-control"
      />
      {error && <p className="text-danger"> {error} </p>}
    </div>
  );
};

export default Input;
