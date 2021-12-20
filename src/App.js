import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.pages";
import ResultsPage from "./pages/resultspage/resultspage.component";
import RecipeDetailsPage from "./pages/recipeDetailspage/recipeDetailsPage.component";

import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signInPage/signInPage.component";
import RegisterPage from "./pages/registerPage/registerPage.component";
import SavedRecipePage from "./pages/savedRecipePage/savedRecipePage.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/resultsPage/foodType=:foodType/foodCatigory=:foodCatigory"
          element={<ResultsPage />}
        />

        <Route
          path="/resultsPage/searchQuery=:query"
          element={<ResultsPage />}
        />

        <Route path="/recipeId=:id" element={<RecipeDetailsPage />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/savedrecipes" element={<SavedRecipePage />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
