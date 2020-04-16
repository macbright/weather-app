
import weather1 from './img/weather.jpg'
import cloudy1 from './img/cloudy.gif'
import rain1 from './img/rain.gif'
import snow1 from './img/snow.gif'


const $ = document.querySelector.bind(document);

const weatherimage = (icon) => {
	const img = document.createElement('img');
	img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	return img;
};
const convertToCelsius = (k) => {
	const value = parseFloat((k - 273.15).toFixed(6));
	return value;
};

const degrees = (k, image) => {
	const c = convertToCelsius(k);
	const span = document.createElement('span');
	span.innerHTML = 'check to Kelvin ';
	span.style.display = 'block';
	$('.degrees').appendChild(span);
	const temp = document.createElement('h3');
	temp.style.display = 'inline';
	temp.classList.add('name2');
	temp.style.backgroundColor = '#fff';
	temp.style.borderRadius = '20px';
	temp.style.opacity = '0.8';
	temp.style.padding = '5px';
	const toggle = document.createElement('input');
	$('.degrees').appendChild(toggle);
	toggle.type = 'checkbox';
	toggle.name = 'checkbox';
	toggle.classList.add('checkbox');
	toggle.addEventListener('change', (e) => {
		e.preventDefault();
		if (toggle.checked) {
			const k = parseFloat((c + 273.15).toFixed(4));
			temp.innerHTML = `${k} &#8490`;
		} else if (!toggle.checked) {
			temp.innerHTML = `${c} &#8451`;
		}
	});
	temp.innerHTML = `${c} &#8451`;
	$('.degrees').appendChild(temp);
	const img = weatherimage(image);
	img.classList.add('image');
	$('.degrees').appendChild(img);
};

const timezone = (data) => {
	const timezone = document.createElement('h2');
	timezone.classList.add('format1');
	timezone.style.width = '150px';
	timezone.style.margin = '0 auto';
	timezone.innerHTML = `GMT +${data / 3600}`;
	$('.town-name').appendChild(timezone);
};

const cityname = (data, image, time) => {
	const city = document.createElement('h2');
	city.innerHTML = data;
	city.style.width = '250px';
	city.style.margin = '0 auto';
	city.classList.add('city-name');
	city.classList.add('format1');
	$('.town-name').appendChild(city);
	timezone(time);
	const img = weatherimage(image);
	img.classList.add('image');
	$('.town-name').appendChild(img);
};



const latitute = (long, lati) => {
	const lon = document.createElement('h3');
	lon.innerHTML = `Lon: ${long}&#176`;
	const lat = document.createElement('h3');
	lat.innerHTML = `lat: ${lati}&#176`;
	lat.classList.add('format1')
	lat.style.marginBottom = '10px'
	lon.classList.add('format1')
	$('.sunset').appendChild(lat);
	$('.sunset').appendChild(lon);
	
};

const sys = (data, image) => {
	const img = weatherimage(image);
	img.classList.add('image');
	$('.sys').appendChild(img);
	// eslint-disable-next-line no-restricted-syntax
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
	// eslint-disable-next-line no-restricted-syntax
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
	// eslint-disable-next-line no-restricted-syntax
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

const changeBg = (weatherData) => {
	const weatherData1 = weatherData;
	const sky = weatherData1.weather[0].main;
	if (sky === 'Clear') {
		$('body').style.backgroundImage = `url("${weather1}")`;
	} else if (sky === 'Snow') {
		$('body').style.backgroundImage = `url("${snow1}")`;
	} else if (sky === 'Rain') {
		$('body').style.backgroundImage = `url("${rain1}")`;
	} else if (sky === 'Clouds') {
		$('body').style.backgroundImage = `url("${cloudy1}")`;
	} else {
		$('body').style.backgroundImage = `url("${weather1}")`;
	}
};

const display = (weatherData) => {
	clearNodes();
	changeBg(weatherData);
	cityname(weatherData.name, weatherData.weather[0].icon, weatherData.timezone);
	degrees(weatherData.main.temp, weatherData.weather[0].icon);
	latitute(weatherData.coord.lon, weatherData.coord.lat);
	sys(weatherData.sys, weatherData.weather[0].icon);
	mainData(weatherData.main, weatherData.weather[0].icon);
	weather(weatherData.weather[0], weatherData.weather[0].icon);
	$('.container').style.marginTop = '20%';
	$('.weather-data').style.display = 'block';
};


export { display as default };