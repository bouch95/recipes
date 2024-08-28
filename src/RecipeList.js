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
            <th className="flex_1">Name</th>
            <th className="flex_1">Cuisine</th>
            <th className="flex_1">Photo</th>
            <th className="flex_2">Ingredients</th>
            <th className="flex_2">Preparation</th>
            <th className="flex_1">Actions</th>
          </tr>
        </thead>
        <tbody>
        
        {recipes.map((recipe, index) => (
            <RecipeRow 
              deleteRecipe={() => deleteRecipe(index)}
              recipe={recipe} 
              key={index} 
              
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

