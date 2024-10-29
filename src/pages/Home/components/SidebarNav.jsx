import { sidebarNavData } from "../../../utils/data"
import IndividualNav from "./IndividualNav"


const SidebarNav = () => {
  return (
    <nav className="sidebar-nav">
       {sidebarNavData.map((datum, index) => <IndividualNav key={index} {...datum}/>)}
    </nav>
  )
}

export default SidebarNav;