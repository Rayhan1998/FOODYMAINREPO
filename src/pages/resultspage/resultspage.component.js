import React, { useState, useEffect, useContext } from "react";
import RecipeBox from "../../components/recipeBox/recipeBox.component";
import "./resultspage.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Spinner, Button, Box } from "@chakra-ui/react";
import { Context } from "../../Context";

export default function ResultsPage() {
  let [results, setResults] = useState([]);
  let [getResponse, setgetResponse] = useState([]);
  let [isLoaded, setIsloaded] = useState(false);
  const [loadMore, setLoadMore] = useState(1);

  let { foodType, foodCatigory, query } = useParams();
  const { APIKEY } = useContext(Context);

  useEffect(() => {
    //  if statement checks wheither results page should load search query results or foodCatigory/foodType results

    if (query) {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=1f1fe157&app_key=${APIKEY}`
        )
        .then(res => {
          setResults(res.data.hits);
          setgetResponse(res);
          console.log(res);
        })
        .catch(err => console.log(err));
    } else if (query === undefined) {
      if (foodCatigory == "meal-of-day") {
        if (foodType !== "Dessert") {
          axios
            .get(
              `https://api.edamam.com/api/recipes/v2?type=public&q=${foodType}&app_id=1f1fe157&app_key=${APIKEY}&imageSize=REGULAR&mealType=${foodType}&Main%20course`
            )
            .then(res => {
              setResults(res.data.hits);
              setgetResponse(res);
              console.log(res);
            })
            .catch(err => console.log(err));
        } else if (foodType === "Dessert") {
          axios
            .get(
              `https://api.edamam.com/api/recipes/v2?type=public&q=${foodType}&app_id=1f1fe157&app_key=${APIKEY}&imageSize=REGULAR`
            )
            .then(res => {
              setResults(res.data.hits);
              setgetResponse(res);
            })
            .catch(err => console.log(err));
        }
      } else if (foodCatigory == "world-cuisine") {
        if (foodType) {
          axios
            .get(
              `https://api.edamam.com/api/recipes/v2?type=public&q=${foodType}&app_id=1f1fe157&app_key=${APIKEY}&health=vegan&cuisineType=${foodType}&imageSize=REGULAR&dishType=Main%20course`
            )
            .then(res => {
              setResults(res.data.hits);
              setgetResponse(res);
            })
            .catch(err => console.log(err));
        }
      }
    }
  }, [foodType]);

  const loadMoreResults = request => {
    axios
      .get(`${request}`)
      .then(res => {
        console.log(res.data.hits);
        setResults(results => [...results, ...res.data.hits]);
        setgetResponse(res);
      })
      .catch(err => console.log(err));
  };
  console.log(getResponse);

  useEffect(() => {
    if (results.length > 0) {
      setIsloaded(true);
    }
  }, [results]);
  console.log(results.length);

  return (
    <div className="results-page">
      <Navbar />
      <section className="recipe-container">
        {isLoaded ? (
          results.map(recipe => {
            return (
              <RecipeBox
                image={recipe.recipe.image}
                title={recipe.recipe.label}
                id={recipe.recipe.uri.substring(
                  recipe.recipe.uri.indexOf("_") + 1
                )}
                key={recipe.recipe.uri.substring(
                  recipe.recipe.uri.indexOf("_") + 1
                )}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredients.length}
              />
            );
          })
        ) : (
          <Spinner size="xl" w="250px" h="250px" />
        )}
      </section>

      <Box display="flex" justifyContent="center">
        <Button
          colorScheme="orange"
          onClick={() => loadMoreResults(getResponse.data._links.next.href)}
          w="150px"
        >
          Load More
        </Button>
      </Box>
    </div>
  );
}
