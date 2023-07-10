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


// Function to get the recipe of the selected meal
function getMealRecipe(e) {
    e.preventDefault();
  
    // Check if the clicked element has the recipe-btn class
    if (e.target.classList.contains('recipe-btn')) {
      let mealItem = e.target.parentElement.parentElement;
  
      // Fetch the recipe data from the API based on the selected meal ID
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
  }


  // Function to create the modal with the meal recipe details
function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
      <h2 class="recipe-title">${meal.strMeal}</h2>
      <p class="recipe-category">${meal.strCategory}</p>
      <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
      </div>
      <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="">
      </div>
      <div class="recipe-link">
        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
      </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
  }