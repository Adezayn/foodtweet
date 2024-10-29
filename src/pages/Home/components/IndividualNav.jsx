
const IndividualNav = (props) => {
    const {name, icon} = props;
  return (
    <div>
        <img src={icon} />
        <p>{name}</p>
    </div>
  )
}

export default IndividualNav