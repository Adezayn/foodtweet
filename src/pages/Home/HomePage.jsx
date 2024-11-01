import { Outlet } from "react-router-dom";
import { Sidebar, Header, Aside } from "./components"
import "./styles.css"

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="homepage-main">
        <Sidebar />
        <div className="mid-section">
          <Outlet />
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default HomePage