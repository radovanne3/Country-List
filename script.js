'use strict';

const countriesContainer = document.querySelector('.countries');

   function renderCountry(d) {

      const html =`
                 <article class="country">
                      <img class="country__img" src="${d.flag}" />
                       <div class="country__data">
                             <h3 class="country__name">${d.name}</h3>
                             <h4 class="country__region">${d.region}</h4>
                             <p class="country__row"><span>👫</span>${d.population}</p>
                             <p class="country__row"><span>🗣️</span>${d.languages[0].name}</p>
                             <p class="country__row"><span>💰</span>${d.currencies[0].code}</p>
                       </div>
                  </article>`;
      countriesContainer.insertAdjacentHTML('beforeend',html);
      countriesContainer.style.opacity = 1;


   }

   const request = fetch('https://restcountries.eu/rest/v2/all')
   .then((response) => {

     return response.json();

   })
   .then((data) => data.forEach((d) => renderCountry(d))); 

      



















