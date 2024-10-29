import logo from "../../../assets/main-logo-no-bg.png"
import Searchbar from "../../../components/Searchbar";
import "../styles.css"

const Header = () => {
  return (
    <div className="header">
     <div className="header-logo">
       <img src={logo} alt="foodtweet logo"/>
     </div>
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