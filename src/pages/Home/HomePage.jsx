import { Sidebar, Header, VendorsCatalogue, MealsFeed, Aside } from "./components"

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Header />
      <VendorsCatalogue />
      <MealsFeed />
      <Aside />
    </div>
  )
}

export default HomePage