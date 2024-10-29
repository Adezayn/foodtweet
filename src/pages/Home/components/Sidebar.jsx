import {VendorsLikedList, SidebarNav, UserCard} from "./";
import "../styles.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserCard />
      <div className="sub-section">
         <SidebarNav />
         <VendorsLikedList />
      </div>
    </div>
  )
}

export default Sidebar