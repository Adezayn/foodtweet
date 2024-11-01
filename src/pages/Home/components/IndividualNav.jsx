import "../styles.css";

const IndividualNav = (props) => {
  const { name, icon } = props;
  return (
    <div className="individual-nav">
      <ion-icon name={icon}></ion-icon>
      <p>{name}</p>
    </div>
  );
};

export default IndividualNav;
