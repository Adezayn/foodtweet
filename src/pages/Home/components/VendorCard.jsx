
import Button from "../../../components/Button";

const VendorCard = (props) => {
  const {accountImg, userImg, name, userName, followersCount, description, ratingCount, reviewCount, dateJoined, isFollowing} = props;

  return (
    <div className="vendor-card">
      <div>
        <div className="vendor-img-container">
          <img src={accountImg} name={name} />
          {/* overlapping on the top of the image */}
          <div className="sub-section">
            <div>
              <p>Followers</p>
              <p>{followersCount}</p>
            </div>
            <div>
              <p>Reviews</p>
              <p>{reviewCount}</p>
            </div>
            <div>
              <p>Rating</p>
              {/* rating stars */}
              <div>
                <div></div>
                <p>{ratingCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-sub-section">
        <p className="date-joined roboto-regular">{dateJoined}</p>
        <div className="inner-section">
          <div className="user-section">
            <img src={userImg} name={name} />
            <div>
              <p>{name}</p>
              <p>{userName}</p>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
      {!isFollowing ? <Button>Follow</Button> : <Button>Unfollow</Button>}
    </div>
  );
}

export default VendorCard