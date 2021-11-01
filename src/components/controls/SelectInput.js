import React from "react";

const SelectInput = ({
  label,
  options,
  onSortChange,
  selectedValue,
  classes,
}) => {
  const renderOptions = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    );
  });

  return (
    <div className={classes}>
      <label>{label}</label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        defaultValue={selectedValue}
      >
        {renderOptions}
      </select>
    </div>
  );
};

export default SelectInput;
