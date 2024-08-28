import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  
  const initialRecipeData = {

        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",

    }
  const [formData, setFormData] = useState({ initialRecipeData });

  const handleChange = ({ target }) => {
    setFormData({
        ...formData,
        [target.name]: target.value,
    });
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialRecipeData);
  };
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            
            <td className="flex_1">
                <label  htmlFor="name">
                  <input
                    id="name" type="text" name="name" placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
              
                </label>
            </td>
            <td className="flex_1">
                <label htmlFor="cuisine">
                  <input
                    id="cuisine" type="text" name="cuisine" placeholder="Cuisine"
                    onChange={handleChange}
                    value={formData.cuisine}
                  />
                </label>
              </td>
              <td  className="flex_1">
                <label htmlFor="photo">
                  <input
                    id="photo" type="url" name="photo" placeholder="URL"
                    onChange={handleChange}
                    value={formData.photo}
                  />
                </label>
                </td>
                <td className="flex_2">
                <label htmlFor="ingredients">
                  <textarea
                    id="ingredients" type="text" name="ingredients" rows={2} placeholder="Ingredients" maxLength={500}
                    onChange={handleChange}
                    value={formData.ingredients}
                  />
                </label>
                </td>
            <td className="flex_2">
                <label htmlFor="preparation">
                  <textarea
                    id="preparation" type="text" name="preparation" rows={2} placeholder="Preparation" maxLength={500}
                    onChange={handleChange}
                    value={formData.preparation}
                  />
                </label>
                </td>
                <td className="flex_1">
              <button type="submit" data-testid="formSubmit">Create</button>
            </td>
          </tr>
        
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
