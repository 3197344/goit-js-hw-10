export const fetchCountries = (name) => {
    return fetch('https://restcountries.com/v3.1/name/peru')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};


// peru
// ('https://restcountries.com/v3.1/name/{ name }')
// example https://restcountries.com/v3.1/all?fields=name,capital,currencies
// my version https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages
/*
Тебе нужны только следующие свойства:
name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков

*/ 