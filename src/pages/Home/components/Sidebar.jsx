import {VendorsLikedList, SidebarNav, UserCard} from "./"

const Sidebar = () => {
  return (
    <div>
      <UserCard />
      <div className="sub-section">
         <SidebarNav />
         <VendorsLikedList />
      </div>
    </div>
  )
}

export default Sidebar