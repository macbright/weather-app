
/* global document, fetch, localStorage */
/* eslint no-undef: "error" */
/* eslint prefer-arrow-callback: "error" */
/* eslint-disable no-use-before-define: "error" */
/* eslint-disable indent: "error" */
// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);


const convertToCelsius = (k) => {
	return parseFloat((k - 273.15).toFixed(6));
};

const weatherimage = (icon) => {
	const img = document.createElement('img');
	img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	return img;
};

const timezone = (data) => {
	const timezone = document.createElement('h2');
	timezone.innerHTML = `GMT +${data / 3600}`;
	$('.town-name').appendChild(timezone);
};

const cityname = (data, image, time) => {
	const city = document.createElement('h2');
	city.innerHTML = data;
	city.classList.add('city-name');
	$('.town-name').appendChild(city);
	timezone(time);
	const img = weatherimage(image);
	img.classList.add('image');
	$('.town-name').appendChild(img);
};

const degrees = (k, image) => {
	const c = convertToCelsius(k);
	const temp = document.createElement('h3');
	temp.innerHTML = `${c} &#8451`;
	$('.degrees').appendChild(temp);
	const img = weatherimage(image);
	img.classList.add('image');
	$('.degrees').appendChild(img);
};


const latitute = (long, lati) => {
	const lon = document.createElement('h3');
	lon.innerHTML = `Lon: ${long}&#176`;
	const lat = document.createElement('h3');
	lat.innerHTML = `lat: ${lati}&#176`;
	$('.sunset').appendChild(lat);
	$('.sunset').appendChild(lon);
};

const sys = (data, image) => {
	const img = weatherimage(image);
	img.classList.add('image');
	$('.sys').appendChild(img);
	for (const [key, value] of Object.entries(data)) {
		const p = document.createElement('p');
		p.innerHTML = `${key}:  ${value}`;
		$('.sys').appendChild(p);
	}
};

const mainData = (data, image) => {
	const img = weatherimage(image);
	img.classList.add('image');
	$('.main-data').appendChild(img);
	for (const [key, value] of Object.entries(data)) {
		const p = document.createElement('p');
		p.innerHTML = `${key}:  ${value}`;
		$('.main-data').appendChild(p);
	}
};

const weather = (data, image) => {
	const img = weatherimage(image);
	img.classList.add('image');
	$('.weather').appendChild(img);
	const heading = document.createElement('p');
	heading.innerHTML = 'Weather';
	$('.weather').appendChild(heading);
	for (const [key, value] of Object.entries(data)) {
		const p = document.createElement('p');
		p.innerHTML = `${key}:  ${value}`;
		$('.weather').appendChild(p);
	}
};

const clearNodes = () => {
	$('.town-name').innerHTML = '';
	$('.degrees').innerHTML = '';
	$('.sunset').innerHTML = '';
	$('.sys').innerHTML = '';
	$('.main-data').innerHTML = '';
	$('.weather').innerHTML = '';
};

const changeBg = () => {
	const weatherData = JSON.parse(localStorage.getItem('city'));
	const sky = weatherData.weather[0].main;
	if (sky === 'Clear') {
		$('body').style.backgroundImage = 'url(../dist/img/weather.jpg)';
	} else if (sky === 'Snow') {
		$('body').style.backgroundImage = 'url(../dist/img/snow.gif)';
	} else if (sky === 'Rain') {
		$('body').style.backgroundImage = 'url(../dist/img/rain.gif)';
	} else if (sky === 'Clouds') {
		$('body').style.backgroundImage = 'url(../dist/img/cloudy.gif)';
	} else {
		$('body').style.backgroundImage = 'url(../dist/img/weather.jpg)';
	}
};

const getApi = () => {
	const city = $('#city-name').value;
	const country = $('#country').value;
	return `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=19162a83776adb533575bcaa858e87a0`;
};


$('#submit').addEventListener('click', (e) => {
	e.preventDefault();
	const url = getApi();
	fetch(url, { mode: 'cors' })
		.then(response => {
			return response.json();
		}).then(response => {
			localStorage.setItem('city', JSON.stringify(response));
			display();
		}).catch(err => {
			return `Error Reading data  ${err}`;
		});
});

const display = () => {
	clearNodes();
	changeBg();
	const weatherData = JSON.parse(localStorage.getItem('city'));
	cityname(weatherData.name, weatherData.weather[0].icon, weatherData.timezone);
	degrees(weatherData.main.temp, weatherData.weather[0].icon);
	latitute(weatherData.coord.lon, weatherData.coord.lat);
	sys(weatherData.sys, weatherData.weather[0].icon);
	mainData(weatherData.main, weatherData.weather[0].icon);
	weather(weatherData.weather[0], weatherData.weather[0].icon);
};


display();
