import React, { useEffect, useState, useContext } from "react";
import "./recipeDetails.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import { Context } from "../../Context";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Image,
  Heading,
  Text,
  Button,
  ListItem,
  OrderedList,
  UnorderedList,
  Box
} from "@chakra-ui/react";

export default function RecipeDetailsPage() {
  const [recipeDetails, setRecipeDetails] = useState("");
  const {
    isLoggedIn,
    savedRecipes,
    setSavedRecipes,
    APIKEY,

    userData
  } = useContext(Context);
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(APIKEY);
  const addRecipe = () => {
    const recipe = {
      id,
      name: recipeDetails.label,
      image: recipeDetails.image,
      userEmail: userData.email,
      calories: Math.ceil(recipeDetails.calories),
      ingredients: recipeDetails.ingredients.length
    };
    if (isLoggedIn) {
      if (savedRecipes.some(recipe => recipe.recipeid === id)) {
        console.log("already added");
        axios
          .delete(`http://localhost:4001/delete/${id}`, {
            data: { email: userData.email }
          })
          .then(res => {
            setSavedRecipes(res.data);
          })
          .catch(err => console.log(err));
      } else {
        axios.post("http://localhost:4001/recipe", recipe).then(res => {
          setSavedRecipes(res.data);
        });
      }
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=1f1fe157&app_key=${APIKEY}`
      )
      .then(res => {
        setRecipeDetails(res.data.recipe);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`http://localhost:4001/savedrecipe/${userData.email}`)
        .then(res => {
          setSavedRecipes(res.data);
        });
    }
  }, [isLoggedIn]);
  console.log(recipeDetails);

  return (
    <div className="recipe-details">
      <Navbar />
      <Box mt="100px">
        <Image
          h="200px"
          w="500px"
          objectFit="cover"
          src={recipeDetails.image}
          alt="Dan Abramov"
          m="0 auto"
        />
      </Box>
      <div className="recipe-details-top">
        <Heading color="white"> {recipeDetails.label}</Heading>
        <Heading as="h3"> Recipe By: {recipeDetails.source}</Heading>
        <Text fontSize="lg">servings: {Math.ceil(recipeDetails.yield)}</Text>
        <Text fontSize="lg">calories: {Math.ceil(recipeDetails.calories)}</Text>

        <Button colorScheme="orange" onClick={addRecipe} w="150px">
          {savedRecipes.some(recipe => recipe.recipeid === id)
            ? "remove recipe"
            : "add recipe"}
        </Button>
      </div>
      <div className="recipe-details-middle">
        <UnorderedList display="flex" flexDirection="column">
          <Heading color="white"> Ingredients</Heading>
          {recipeDetails.ingredients
            ? recipeDetails.ingredients.map((recipe, i) => {
                return <ListItem key={i}>{recipe.text}</ListItem>;
              })
            : null}
        </UnorderedList>
        <Box>
          <Text>
            Click link below to get more of a breakdown on how to make this
            recipe
          </Text>
          <Button colorScheme="orange">
            <a href={recipeDetails.url} target="_blank" className="button">
              Preperation Instructions
            </a>
          </Button>
        </Box>
      </div>
      <div className="recipe-details-bottom">
        <Box>
          <Heading color="white"> Nutrtion</Heading>

          {recipeDetails ? (
            <UnorderedList display="flex" flexDirection="column">
              <ListItem>
                Calories: {recipeDetails.totalNutrients.ENERC_KCAL.quantity}
              </ListItem>
              <ListItem>
                {" "}
                Fat: {Math.ceil(recipeDetails.totalNutrients.FAT.quantity)}{" "}
                grams
              </ListItem>
              <ListItem>
                Protein:{" "}
                {Math.ceil(recipeDetails.totalNutrients.PROCNT.quantity)} grams
              </ListItem>
              <ListItem>
                Carbs: {Math.ceil(recipeDetails.totalNutrients.CHOCDF.quantity)}{" "}
                grams
              </ListItem>
              <ListItem>
                Fiber: {Math.ceil(recipeDetails.totalNutrients.FIBTG.quantity)}{" "}
                grams
              </ListItem>
            </UnorderedList>
          ) : null}
        </Box>

        <Box>
          <Heading as="h2" color="white">
            {" "}
            Health Labels{" "}
          </Heading>
          <Box display="flex" className="healthlabels">
            {recipeDetails
              ? recipeDetails.healthLabels.map(health => {
                  return <p>{health}</p>;
                })
              : null}
          </Box>
        </Box>
      </div>
    </div>
  );
}
