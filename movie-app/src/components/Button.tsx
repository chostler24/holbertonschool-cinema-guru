import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
};

export default Button;