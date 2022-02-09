import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

// const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const fetchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

let countriesInput;
const a = debounce(handleSubmit, DEBOUNCE_DELAY);

fetchInput.addEventListener('input', a);


function handleSubmit(event){
    event.preventDefault();

    let countriesInput = event.target.value;
    
    console.log(countriesInput);
    return countriesInput;

    // fetchCountries()
    //     .then((countries) => renderCountryList(countries))
    //     .catch((error) => console.log(error));
}

fetchCountries(countriesInput)
.then((countries) => renderCountryList(countries))
.catch((error) => console.log(error));

function renderCountryList(countries) {
    const markup = countries
        .map((country) => {
            return `
            <li>
            <img src="${country.flags.svg}" alt="flag" width = "80">
            <p><b>${country.name.official}</b></p>
            </li>

            <li>
            <p><b>Capital</b>: ${country.capital}</p>
            </li>
            
            <li>
            <p><b>Population</b>: ${country.population}</p>
            </li>
            
            <li>
            <p><b>Languages</b>: ${country.languages}</p>
            </li>`;
        }).join("");
    countryList.innerHTML = markup;
}
// console.log(fetchCountries);
// https://restcountries.com/v2/all?fields=name,capital,currencies
/*
Тебе нужны только следующие свойства:

name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков

.then(name => {
console.log(name);
})
.catch(error =>{
console.log(error);
});

*/ 