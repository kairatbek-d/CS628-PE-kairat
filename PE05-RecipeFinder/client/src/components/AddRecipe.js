import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5050/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;