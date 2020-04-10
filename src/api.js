import display from './dom';
import { API_KEY } from './key';

const $ = document.querySelector.bind(document);


let weatherData = '';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	let lat = position.coords.latitude;
	let lon = position.coords.longitude
	console.log(lat, lon)
	let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
	fetch(url, { mode: 'cors' })
		.then(response => response.json())
		.then(response => {
			console.log(response)
			weatherData = response
			display(weatherData)
			// eslint-disable-next-line no-unused-vars
		}).catch(err => {
			// eslint-disable-next-line no-alert
			alert(`Either the city name you entered is not 
			correct or the city is not in our database. Please enter a valid city name`);
		});
	return position
}

const getApi = () => {
	const city = $('#city-name').value;
	if (city === '') {
		// eslint-disable-next-line no-alert
		alert('city name can not be blank');
	} else {
		return `https://api.openweathermap.org/data/2.5/weather?q=${city},Belarus&APPID=${API_KEY}`;
	}
};


const apiCal = () => {
	getLocation()
	$('#submit').addEventListener('click', (e) => {
		e.preventDefault();
		const url = getApi();
		fetch(url, { mode: 'cors' })
			.then(response => response.json())
			.then(response => {
				weatherData = response
				display(weatherData)
				// eslint-disable-next-line no-unused-vars
			}).catch(err => {
				// eslint-disable-next-line no-alert
				alert(`Either the city name you entered is not 
				correct or the city is not in our database. Please enter a valid city name`);
			});
	});
};


export { apiCal as default };