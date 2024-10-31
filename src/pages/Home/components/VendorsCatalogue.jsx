import { useSelector } from "react-redux";
import VendorCard from "./VendorCard";

const VendorsCatalogue = () => {
  const {allVendors} = useSelector(
    (state) => state.vendors
  );
  return (
    <div className="vendors-catalogue">
      <p className="poppins-semibold">Vendors you can follow</p>
      {/* <div className="all-vendors-container">
        <div className="vendors-scrollable">
          {allVendors?.map((vendor) => (
            <VendorCard {...vendor} key={vendor.id} />
          ))}
        </div>
      </div> */}
      <div className="vendors-scrollable">
        {allVendors?.map((vendor) => (
          <VendorCard {...vendor} key={vendor.id} />
        ))}
      </div>
    </div>
  );
}

export default VendorsCatalogue