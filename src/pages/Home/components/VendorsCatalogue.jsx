import { useSelector } from "react-redux";
import VendorCard from "./VendorCard";

const VendorsCatalogue = () => {
  const {allVendors} = useSelector(
    (state) => state.vendors
  );
  return (
    <div className="vendors-catalogue">
      <p className="poppins-semibold">Vendors you can follow</p>
      <div className="vendors-scrollable">
        {allVendors?.filter(vendor => !vendor.isFollowing)?.map((vendor) => (
          <VendorCard {...vendor} key={vendor.id} />
        ))}
      </div>
    </div>
  );
}

export default VendorsCatalogue