const body = document.body;
window.addEventListener('scroll', function(){
	const value = window.scrollY;
	body.style.backgroundPositionY = value * 0.5 + 'px';
});


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

const countries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))   
}

const displayCountry = countries => {
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col');
        countryDiv.innerHTML = `
        <div class="card shadow-lg h-100" >
          <div class="card-header text-center fs-2 fw-bold bg-info-subtle">
            ${country.name.common}
          </div>
          <img src="${country.flags.png}" class="card-img-top h-100" alt="...">
          <div class="card-footer text-center bg-info-subtle">
          <button onClick="loadDetails('${country.cca2}')" id="country-details" class="btn btn-outline-info my-2 text-dark shadow mx-auto fw-bold" data-bs-toggle="modal" data-bs-target="#countryDetailsModal">Details</button>
          </div>
        </div>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadDetails = code => {
    const URL = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountryDetails(data));
}

const displayCountryDetails = country => {
    // console.log(country[0]);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerText = '';
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-content');
    modalDiv.innerHTML = `
    <div class="border text-center py-3">
        <h1 id="modal-title" class="modal-title fs-2" id="countryDetailsModalLabel">${country[0].name.common} <img src="${country[0].flags.png}" style="height: 25px; width: 35px;"></h1>
    </div>
    <div class="modal-body">
        <p id="official" class="text-muted"><span class="fw-bold">Official Name:</span>
            ${country[0].name.official}</p>
        <p id="capital" class="text-muted"><span class="fw-bold">Capital:</span>
            ${country[0].capital}</p>
        <p id="region" class="text-muted"><span class="fw-bold">Region:</span> ${country[0].region}
        </p>
        <p id="population" class="text-muted"><span class="fw-bold">Population:</span>
            ${country[0].population}</p>
    </div>
    <div class="border text-center py-3">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `;
    modalContainer.appendChild(modalDiv);
}


countries();
