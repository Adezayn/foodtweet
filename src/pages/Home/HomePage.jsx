import { Sidebar, Header, VendorsCatalogue, MealsFeed, Aside } from "./components"
import "./styles.css"

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="homepage-main">
        <Sidebar />
        <div className="mid-section">
          <VendorsCatalogue />
          <MealsFeed />
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default HomePage