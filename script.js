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