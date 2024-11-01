import { NavLink } from "react-router-dom";
import "../styles.css";

const IndividualNav = (props) => {
  const { name, icon, path } = props;
  return (
    <NavLink to={path} className="individual-nav">
      <ion-icon name={icon}></ion-icon>
      <p>{name}</p>
    </NavLink>
  );
};

export default IndividualNav;
