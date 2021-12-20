import React, { useRef } from "react";
import "./searchInput.styles.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export default function SearchInput() {
  const inputEl = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    navigate(`/resultsPage/searchQuery=${inputEl.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputEl}
        placeholder="search for recipes"
        className="search-input"
      />
      <Button colorScheme="orange">Search</Button>
    </form>
  );
}
