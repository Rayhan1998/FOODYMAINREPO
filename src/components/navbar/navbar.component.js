import React, { useContext } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { Heading } from "@chakra-ui/react";
export default function Navbar() {
  const { isLoggedIn, userData } = useContext(Context);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav>
      <Heading color="white">
        <Link to="/"> FoodVerse</Link>
      </Heading>

      {isLoggedIn ? (
        <div className="navbar-right-side">
          <ul>
            <li>
              <Link to="/"> Homepage </Link>
            </li>
            <li>
              <Link to="/savedrecipes"> Saved Recipes </Link>
            </li>
            <li> Hello {userData ? userData.name : ` user`}</li>
            <li onClick={logout}>
              <Link to="/"> Sign out </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-right-side">
          <ul>
            <li>
              <Link to="/"> Homepage </Link>
            </li>
            <li>
              <Link to="/savedrecipes"> Saved Recipes </Link>
            </li>

            <li>
              <Link to="/signin"> Sign In </Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
