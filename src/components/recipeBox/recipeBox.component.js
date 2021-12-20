import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function RecipeBox(props) {
  const { title, image, calories, ingredients, id } = props;

  // const { setFoodType, setFoodCatigory } = useContext(Context);
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/recipeid=${id}`);
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="300px"
      mb="10px"
      onClick={handleButton}
    >
      <Image src={image} alt={title} />

      <Box p="6">
        <Box display="flex" mt="2" alignItems="center" justifyContent="center">
          <Box text-align="center"> {title}</Box>
        </Box>
        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box> Calories {Math.round(calories)}</Box>
          <Box> Ingredients {ingredients}</Box>
        </Box>
      </Box>
    </Box>
  );
}
