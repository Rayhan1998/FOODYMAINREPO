import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MealBox(props) {
  const { title, image, type } = props;

  const navigate = useNavigate();

  const setResults = () => {
    navigate(`/resultsPage/foodType=${title}/foodCatigory=${type}`);
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={setResults}
      mb="40px"
    >
      <Box>
        <Image src={image} alt={"alt"} objectFit="cover" boxSize="300px" />
      </Box>

      <Box p="6">
        <Box display="flex" mt="2" alignItems="center">
          {title}
        </Box>
      </Box>
    </Box>
  );
}
