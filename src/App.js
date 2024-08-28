import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [
      newRecipe,
      ...currentRecipes,
    ]);
  
    const deleteRecipe = (indexToDelete) => {
      const updatedRecipes = recipes.filter((_, index) => index !== indexToDelete);
    setRecipes(updatedRecipes);
  };
  
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={RecipeData} onDelete={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
