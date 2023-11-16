function Input() {
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
  }
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <div className='input__container'>
        {icon && <img src={icon} alt='' />}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;
