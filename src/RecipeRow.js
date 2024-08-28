import React from "react";

// RecipeRow Component
function RecipeRow({ recipe, index, deleteRecipe }) {
  return (
    <div>
    <tr>
      <td className="content_td">
        <p>{recipe.name}</p>
      </td>
      <td className="content_td">
        <p>{recipe.cuisine}</p>
      </td>
      <td className="content_td">
        <img src={recipe.photo} alt={recipe.name} style={{ width: '100px' }} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td className="content_td">
        <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
      </td>
    </tr>
  </div>
);
}

export default RecipeRow;