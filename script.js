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

    // Fetch the data from the API based on the search input
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
      let html = "";

      // Check if there are meals matching the search input
      if (data.meals) {
        // Loop through each meal and create HTML elements
        data.meals.forEach(meal => {
          html += `
            <div class="meal-item" data-id="${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food">
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
          `;
        });
        mealList.classList.remove('notFound');
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
      }

      // Update the HTML content of the meal list
      mealList.innerHTML = html;
    });
}
