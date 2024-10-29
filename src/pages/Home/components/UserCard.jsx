
const UserCard = (props) => {
    const {name, username, image, reviews, following} = props
  return (
    <div>
      <div>
        <img src={image ?? ""} alt={name} />
      </div>
      <p>{name}</p>
      <p>{username}</p>
      <div>
        <div>
          <p>{reviews}</p>
          <p>Reviews</p>
        </div>
        <div>
          <p>{following}</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard