import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountry from './js/rendercountry';

const countryListUl = document.querySelector('.country-list');
const countryInfoDiv = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
input.addEventListener('input',debounce(onSearchCounry, DEBOUNCE_DELAY))




function onSearchCounry(event) {
    let inputValue = event.target.value.trim();
    fetchCountries(inputValue)
    .then(dataCountries => {
        renderCountry(dataCountries);
    })
    .catch(err =>{
        countryInfoDiv.innerHTML = '';
        countryListUl.innerHTML = '';
        Notify.failure('Oops, there is no country with that name')
    })
}


