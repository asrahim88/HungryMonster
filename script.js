
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchName = document.getElementById('inputBtn').value;
    if (searchName !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
        .then(response => response.json())
        .then(data => displayMeal(data.meals));
    } else {
        alert("please insert your favorite meal in this search box");
    }
})

const displayMeal = food => {
    if (food !== null) {
        food.forEach(meal => {
            const mealArea = document.createElement('div');
            mealArea.className = 'mealArea';
            const mealInfo = `
            <div onClick = 'displayMealDetails("${meal.strMeal}") '>
            <img src=${meal.strMealThumb}>
            <p>${meal.strMeal}</p>
            </div>
            `
            mealArea.innerHTML = mealInfo;
            
            const mainContainer = document.getElementById('mainContainer');
            mainContainer.appendChild(mealArea);

            const notFound = document.getElementById('notFoundContainer');
            notFound.style.display = 'none';
        });
    } else {
        const notFound = document.getElementById('notFoundContainer');
        notFound.style.display = 'block';
    }
}


const displayMealDetails = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`
    fetch(url)
    .then(response => response.json())
    .then(data => renderMealInformation(data.meals[0]))
    
}

const renderMealInformation = (meals) => {
    const popUpMeal = document.getElementById('mealDetails');
    popUpMeal.innerHTML = `
    <div class = "mealDetailsBox">
    <img  src=${meals.strMealThumb} alt="">
    <h1>${meals.strMeal}</h1>
    <h4>Ingredients </h4>
    <li>${meals.strIngredient1}:  <span> ${meals.strMeasure1} </span></li>
    <li>${meals.strIngredient2}: <span> ${meals.strMeasure2} </span></li>
    <li>${meals.strIngredient3}: <span> ${meals.strMeasure3} </span></li>
    <li>${meals.strIngredient4}: <span> ${meals.strMeasure4} </span></li>
    <li>${meals.strIngredient5}: <span> ${meals.strMeasure5} </span></li>
    <li>${meals.strIngredient6}: <span> ${meals.strMeasure6} </span></li>
    <li>${meals.strIngredient7}: <span> ${meals.strMeasure7} </span></li>
    <li>${meals.strIngredient8}: <span> ${meals.strMeasure8} </span></li>
    <li>${meals.strIngredient9}: <span> ${meals.strMeasure9} </span></li>
    <li>${meals.strIngredient10}: <span> ${meals.strMeasure10} </span></li>
    </div>
   
    ` 
}


















