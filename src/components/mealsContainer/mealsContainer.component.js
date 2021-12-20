import React from "react";
import MealBox from "../mealBox/mealBox.component";
import "./mealsContainer.styles.css";
import { Heading } from "@chakra-ui/react";
export default function MealsContainer() {
  return (
    <section className="meals-container">
      <Heading pb="10px" color="white">
        Meals of the day
      </Heading>
      <section className="meal-of-day">
        <MealBox
          title="Breakfast"
          type="meal-of-day"
          image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <MealBox
          title="Lunch"
          type="meal-of-day"
          image="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <MealBox
          title="Dinner"
          type="meal-of-day"
          image="https://images.unsplash.com/photo-1535473895227-bdecb20fb157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <MealBox
          title="Dessert"
          type="meal-of-day"
          image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        />
      </section>
      <Heading pb="10px" color="white">
        World cuisines
      </Heading>
      <section className="world-cuisines">
        <MealBox
          title="American"
          type="world-cuisine"
          image="https://images.unsplash.com/photo-1636907229111-a8ac768fe6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <MealBox
          title="Chinese"
          type="world-cuisine"
          image="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
        />
        <MealBox
          title="Indian"
          type="world-cuisine"
          image="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        />
        <MealBox
          title="Italian"
          type="world-cuisine"
          image="https://images.unsplash.com/photo-1627286400579-027de47e9e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />

        <MealBox
          title="Mexican"
          type="world-cuisine"
          image="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80"
        />
      </section>
    </section>
  );
}
