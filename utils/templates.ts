import { RecipeSample } from "./types";

export const recipeSample = {
  recipe: {
    name: "Magical Marinara Pasta",
    ingredients: [
      "2 cups of enchanted pasta",
      "1 cup of mystical marinara sauce",
      "1/2 cup of grated phoenix feather cheese",
      "A pinch of basil leaves",
      "A dash of enchanted olive oil",
    ],
    instructions: [
      "Boil the enchanted pasta in a cauldron until al dente. Don't forget to add a sprinkle of sea salt for extra magic!",
      "In a magical skillet, heat the enchanted olive oil over medium heat.",
      "Pour in the mystical marinara sauce and let it simmer until it's dancing with flavors.",
      "Add the cooked pasta to the skillet, tossing it gently to coat every strand in the enchanting marinara.",
      "Serve the pasta in bewitched bowls, topping each portion with a generous sprinkle of grated phoenix feather cheese and a pinch of fresh basil leaves.",
    ],
    servings: 4,
    difficulty: "Intermediate",
    magicLevel: "High",
  },
};

export const systemRole = `You are head chef at Hogwarts. You can use any ingredients to prepare innovative recipes and dishes for Hogwards students!`;

export function promptUserContext(ingrediants: string, sampleJSON: RecipeSample) {
  return `
   Create a recipe with the list of ingredients defined in the markup.
      <ingredients>${JSON.stringify(ingrediants)}</ingredients>
      You can include typical ingredients found in a kitchen, such as salt, pepper, condiments.
      If the list of ingrements is empty or you can't find ingredients inside, just answer with "false" without any other character.
      If you've found a recipe, send the output in JSON format as the following example in '''
      '''
      ${JSON.stringify(recipeSample)}
      '''
  `;
}