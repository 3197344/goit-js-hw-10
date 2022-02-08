export const fetchCountries = (name) =>{
    fetch('https://restcountries.com/v3.1/name/{ name }')
        .then(response => {
        return response.json();
})
.then(name => {
console.log(name);
})
.catch(error =>{
console.log(error);
});
}

// peru
// https://restcountries.com/v3.1/all?fields=name,capital,currencies

// https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages
/*
Тебе нужны только следующие свойства:
name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков
*/ 