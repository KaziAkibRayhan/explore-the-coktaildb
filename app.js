const loadCoktailData = (search) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => displayCoktailData(data.drinks))
        .catch(err => console.log(err))
};

const displayCoktailData = (drinks) => {
    const containerCoktail = document.getElementById('container-coktail');
    containerCoktail.innerHTML = '';
    drinks.forEach(drink => {
        console.log(drink);
        const coktailDiv = document.createElement('div');
        coktailDiv.classList.add('col');
        coktailDiv.innerHTML = `
            <div class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 70)}...</p>
                </div>
            </div>
        `;
        containerCoktail.appendChild(coktailDiv);
    });
}

const searchDrink = () => {
    const search = document.getElementById('search-field');
    const searchText = search.value;
    loadCoktailData(searchText);
    search.value = '';
}

loadCoktailData('');

