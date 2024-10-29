import logo from "../../../assets/main-logo-no-bg.png"
import Searchbar from "../../../components/Searchbar";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="foodtweet logo" />
      <Searchbar />
      <div>
        {/* settings */}
        <img />
        {/* notification */}
         <img />
      </div>
    </div>
  );
}

export default Header