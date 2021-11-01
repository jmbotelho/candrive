import React from "react";

const SearchInput = ({ id, label, onSearchValueChange, classes, value }) => {
  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        value={value}
        id={id}
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
