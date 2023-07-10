// Get the search button element
const searchBtn = document.getElementById('search-btn');

// Get the meal list element
const mealList = document.getElementById('meal');

// Get the meal details content element
const mealDetailsContent = document.querySelector('.meal-details-content');

// Get the recipe close button element
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Event listener for the search button click
searchBtn.addEventListener('click', getMealList);

// Event listener for the meal list click
mealList.addEventListener('click', getMealRecipe);


// Event listener for the recipe close button click
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
  });

  // Function to get the meal list that matches the ingredients
function getMealList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
