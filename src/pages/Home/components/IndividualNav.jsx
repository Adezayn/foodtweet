import "../styles.css";

const IndividualNav = (props) => {
  const { name, icon } = props;
  return (
    <div className="individual-nav">
      <img src={icon} />
      <p>{name}</p>
    </div>
  );
};

export default IndividualNav;
