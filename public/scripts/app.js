window.app = {};

window.addEventListener("DOMContentLoaded", () => {
  console.log("window loaded", app);
});

app.recipeAI = async function () {
  const ingredients = document.getElementById("ingredients");
  const value = ingredients.value;
  ingredients.disabled = true;
  ingredients.value = "Chef is writing recipe fro you...";
  const response = await fetch("/api/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: value }),
  });
  const jsonResponse = await response.json();
  const recipe = JSON.parse(jsonResponse);
  console.log(recipe);
};
