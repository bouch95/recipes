import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <td className="flex_1">Name</td>
            <td className="flex_1">Cuisine</td>
            <td className="flex_1">Photo</td>
            <td className="flex_2">Ingredients</td>
            <td className="flex_2">Preparation</td>
            <td className="flex_1">Actions</td>
          </tr>
        </thead>
        <tbody>
        
        {recipes.map((recipe, index) => {
            <RecipeRow recipe={recipe} key={index} deleteRecipe={() => deleteRecipe(index)}/>})}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
