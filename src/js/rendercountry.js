import { Notify } from "notiflix";

export default function renderCountry(dataCountries){
 let numberOfCountries = dataCountries.length;
 const countryListUl = document.querySelector('.country-list');
 const countryInfoDiv = document.querySelector('.country-info');
 const countryArr = [];

 if(numberOfCountries > 10){
    countryInfoDiv.innerHTML = '';
    countryListUl.innerHTML = '';

    Notify.info('Too many matches found. Please enter a more specific name.')

 } else if(numberOfCountries >=2 && numberOfCountries<=10){
    countryInfoDiv.innerHTML = '';
    countryArr.push(
         dataCountries.map(country =>{
            return `<li class="item_country" style="list-style-type: none">
            <img class="img" src="${country.flags.svg}" width = 20 alt="flag">
            <span class="title">${country.name.official}</span>
            </li>`
        }).join('')
    )
    countryListUl.innerHTML = countryArr;
    
 } else {
   console.log('asdasdasdasdas');
    countryListUl.innerHTML = '';
    const markup = dataCountries
    .map(el => {
    return `<div class="item_country"><img class="img" src="${
        el.flags.svg
    }" width=50 alt="flag">
    <span class ="title__cauntry">${el.name.official}</span></div>
    <p class="text"><b>Capital:</b> ${el.capital}</p>
    <p class="text"><b>Population:</b> ${el.population}</p>
    <p class="text"><b>Languages:</b> ${Object.values(el.languages).join(', ')}</p>`;
    })
    .join('');
    countryInfoDiv.innerHTML = markup;
    
 }
}