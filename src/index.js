import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
const fetchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


// console.log(fetchCountries);
// https://restcountries.com/v2/all?fields=name,capital,currencies
/*
Тебе нужны только следующие свойства:

name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков
*/ 