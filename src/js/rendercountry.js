import { Notify } from "notiflix";

export default function renderCountry(dataCountries){
 let numberOfCountries = dataCountries.length;
 const countryListUl = document.querySelector('.country-list');
 const countryInfoDiv = document.querySelector('.country-info');
 const countryArr = [];

 if(numberOfCountries > 10){
    Notify.info('Too many matches found. Please enter a more specific name.')
 } else if(numberOfCountries >=2 && numberOfCountries<=10){
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
    console.log('One Contriy');
 }
}