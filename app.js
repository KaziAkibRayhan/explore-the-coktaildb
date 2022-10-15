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
        const coktailDiv = document.createElement('div');
        coktailDiv.classList.add('col');
        coktailDiv.innerHTML = `
            <div onclick="loadDrinkDetails(${drink.idDrink})" data-bs-toggle="modal" data-bs-target="#drinkModal" class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 70)}...</p>
                </div>
            </div>
        `;
        containerCoktail.appendChild(coktailDiv);
    });
    toggleSpinner(false);
}

const loadDrinkDetails = (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDrinkDetails(data.drinks[0]))
        .catch(err => console.log(err))
}

const displayDrinkDetails = (drink) => {
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = drink.strDrink;
    const moadDetails = document.getElementById('modal-details');
    moadDetails.innerHTML = `
        <div>
            <img src="${drink.strDrinkThumb}" class="w-75 h-75">
        </div>
        <p>Drink Instructions: ${drink.strInstructions}.</p>
    `;
}

const searchDrink = () => {
    toggleSpinner(true);
    const search = document.getElementById('search-field');
    const searchText = search.value;
    loadCoktailData(searchText);
    search.value = '';
}

const toggleSpinner = (isLodaing) => {
    const loaderSection = document.getElementById('loader');
    if (isLodaing === true) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


loadCoktailData();

