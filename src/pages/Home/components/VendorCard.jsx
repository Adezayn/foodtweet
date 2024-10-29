import Button from "../../../components/Button";

const VendorCard = (props) => {
    const {profileImg, isTopRated, followersCount, name, description, ratingCount, reviewCount, dateJoined, isFollowing} = props;
  return (
    <div>
      <div>
        <img src={profileImg} name={name} />
        {/* overlapping on the top of the image */}
        <div>
          <div>
            <p>Followers</p>
            <p>{followersCount}</p>
          </div>
          <div>
            <p>Reviews</p>
            <p>{reviewCount}</p>
          </div>
        </div>
        <p>{dateJoined}</p>
        <p>{name}</p>
        <p>{description}</p>
        <div>
            <div>
                {/* rating stars */}
                <div></div>
                <p>{ratingCount}</p>
            </div>
            {!isFollowing && <Button>Follow</Button>}
        </div>
      </div>
    </div>
  );
}

export default VendorCard