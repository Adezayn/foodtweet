
import { useSelector } from "react-redux";

const VendorsLikedList = () => {
  const { allVendors } = useSelector((state) => state.vendors);
  return (
    <div className="vendors-liked">
      <p className="primary-text">VENDORS YOU LIKE</p>
      {/* LIST OF VENDORS */}
      {allVendors
        ?.filter((vendor) => vendor.isFollowing)
        ?.map((vendor) => {
          const { accountImg, name, userName } = vendor;
          return (
            <div key={vendor.id} className="user-section">
              <img src={accountImg} name={name} />
              <p>{userName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default VendorsLikedList