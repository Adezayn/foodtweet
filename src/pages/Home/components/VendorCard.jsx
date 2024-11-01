
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { followVendor } from "../../../redux/slices/vendorsSlice";

const VendorCard = (props) => {
  const dispatch = useDispatch();
  const {id, accountImg, userImg, name, userName, followersCount, description, ratingCount, reviewCount, dateJoined, isFollowing} = props;

  const followHandler = () => {
    console.log("triggered follow")
     dispatch(followVendor(id));
  }

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
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="btn-container">
        {!isFollowing ? (
          <Button className="btn-vendor-card" inputHandler={followHandler}>
            Follow
          </Button>
        ) : (
          <Button>Unfollow</Button>
        )}
      </div>
    </div>
  );
}

export default VendorCard