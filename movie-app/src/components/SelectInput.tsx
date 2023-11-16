const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <select className={className} value={value} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
