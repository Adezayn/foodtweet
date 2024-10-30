import { useSelector } from "react-redux";
import "../styles.css";

const UserCard = () => {
    const { name, username, image, reviews, following } = useSelector(
      (state) => state.user
    );

  return (
    <div className="user-card">
      <div className="user-img-container">
        <img src={image ?? ""} alt={name} />
      </div>
      <p className="name">{name}</p>
      <p className="username">{username}</p>
      <div className="block">
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