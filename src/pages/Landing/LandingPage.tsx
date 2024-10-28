import React from 'react'
import logo from "../../assets/main-logo-no-bg.png";

const LandingPage = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} />
        </nav>
      </header>
      <main>
        <h1>Discover and Review Amazing Meals</h1>
      </main>
    </>
  );
}

export default LandingPage