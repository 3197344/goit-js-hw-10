import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 1000;
const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryList.style.listStyle = "none";
// countryList.style.display = "grid";
// countryList.style.margin = '30px';
// countryList.style.fontsize = '400px';
countryInfo.style.listStyle = "none";


const a = debounce(handleSubmitCountries, DEBOUNCE_DELAY);

countryInput.addEventListener('input', a);


function handleSubmitCountries(event) {
    event.preventDefault();

    const countriesInputName = event.target.value.trim();
    console.log(countriesInputName);

    if (countriesInputName === "") {
        cleanInput();
    }
    else {
        fetchCountries(countriesInputName)
        .then(renderCard)
        .catch(() =>
        // console.log("Oops, there is no country with that name");
        Notiflix.Notify.failure("Oops, there is no country with that name"))
        }
}

function renderCard(el) {
    if (el.length >= 10) {
        cleanInput()
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }

    else if (el.length >= 2) {
            cleanInput();
        const markup = renderCountries(markupRenderCountries);
        // countryInfo.insertAdjacentHTML('beforebegin', markup)
        countryInfo.innerHTML = markup;
    }
    
    else {
        cleanInput()
        const markupEl = renderCountryList(markupRenderCountryList)
        // countryList.insertAdjacentHTML('beforebegin', markupEl)  
        countryList.innerHTML = markupEl;
    }
}


function renderCountryList(countries) {
    const markupRenderCountryList = countries
        .map((country) => {
            return `
            <img src="${country.flags.svg}" alt="flag" width = "80">
            <p><b>${country.name.official}</b></p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Languages</b>: ${Object.values(country.languages)}</p>
            `;
        }).join("");
    return markupRenderCountryList;
    // countryInfo.innerHTML = markup;
}

function renderCountries(countries) {
    const markupRenderCountries = countries
        .map((country) => {
            return `
            <li>
            <img src="${country.flags.svg}" alt="flag" width = "100" >
            <p><b>${country.name.official}</b></p>
            </li>`;
        }).join("");
    return markupRenderCountries;
    // countryList.innerHTML = markup;
}

function cleanInput () {
    countryInfo.innerHTML = "";
    countryList.innerHTML = ""; 
}

