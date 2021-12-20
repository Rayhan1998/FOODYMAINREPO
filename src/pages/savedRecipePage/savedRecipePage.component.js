import React, { useEffect, useContext } from "react";
import "./savedRecipePage.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import axios from "axios";
import { Context } from "../../Context";
import { Box, Image, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SavedRecipePage() {
  const { isLoggedIn, userData, savedRecipes, setSavedRecipes } = useContext(
    Context
  );

  console.log(savedRecipes);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`http://localhost:4001/savedrecipe/${userData.email}`)
        .then(res => {
          setSavedRecipes(res.data);
        });
    }
  }, []);

  const handleButton = id => {
    navigate(`/recipeid=${id}`);
  };
  return (
    <div className="saved-recipe-page">
      <Navbar />
      {savedRecipes.length == 0 ? (
        <Heading textAlign="center" color="white">
          No Recipes saved
        </Heading>
      ) : null}
      <div className="saved-recipes">
        {savedRecipes.map(recipe => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              w="300px"
              mb="10px"
              className="boxes"
              onClick={() => handleButton(recipe.recipeid)}
            >
              <Image src={recipe.recipeimageurl} alt={recipe.recipename} />

              <Box p="6">
                <Box
                  display="flex"
                  mt="2"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Box text-align="center" color="#FFFFFF" fontSize="20px">
                    {" "}
                    {recipe.recipename
                      ? ` Recipen name: ${recipe.recipename}`
                      : "api did not provide data"}
                  </Box>

                  <Box text-align="center">
                    {" "}
                    {recipe.recipename
                      ? ` Calories: ${recipe.calories}`
                      : "api did not provide data"}
                  </Box>

                  <Box text-align="center">
                    {" "}
                    {recipe.recipename
                      ? ` Ingredients: ${recipe.ingredients}`
                      : "api did not provide data"}
                  </Box>
                </Box>
                <Box
                  display="flex"
                  mt="2"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  {/* <Box> Calories {Math.round(calories)}</Box>
                <Box> Ingredients {ingredients}</Box> */}
                </Box>
              </Box>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
