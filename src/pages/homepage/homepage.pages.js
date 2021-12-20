import React from "react";
import "./homepage.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import SearchInput from "../../components/searchInput/searchInput.component";
import MealsContainer from "../../components/mealsContainer/mealsContainer.component";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="middle">
        <h1>Discover Foods from all over the world</h1>
        <p>Search from over 2 million recipes</p>
        <SearchInput />
      </div>

      <MealsContainer />
    </div>
  );
}

export default Homepage;
