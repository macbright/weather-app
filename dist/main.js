/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/img/cloudy.gif":
/*!*****************************!*\
  !*** ./dist/img/cloudy.gif ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f8ad023773fd2baf68b6f1559d878089.gif\";\n\n//# sourceURL=webpack:///./dist/img/cloudy.gif?");

/***/ }),

/***/ "./dist/img/rain.gif":
/*!***************************!*\
  !*** ./dist/img/rain.gif ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cc51e5a410b2fb5ea73f6e4fe6617b65.gif\";\n\n//# sourceURL=webpack:///./dist/img/rain.gif?");

/***/ }),

/***/ "./dist/img/snow.gif":
/*!***************************!*\
  !*** ./dist/img/snow.gif ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f7861111e7f273466b5e746a670031ba.gif\";\n\n//# sourceURL=webpack:///./dist/img/snow.gif?");

/***/ }),

/***/ "./dist/img/weather.jpg":
/*!******************************!*\
  !*** ./dist/img/weather.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1d0793368cf8fd7468e8535ba142d515.jpg\";\n\n//# sourceURL=webpack:///./dist/img/weather.jpg?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return apiCal; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n\n\n\nconst $ = document.querySelector.bind(document);\n\n\nlet weatherData = '';\n\nfunction getLocation() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(showPosition);\n  } else {\n    x.innerHTML = \"Geolocation is not supported by this browser.\";\n  }\n}\n\nfunction showPosition(position) {\n\tlet lat = position.coords.latitude;\n\tlet lon = position.coords.longitude\n\tconsole.log(lat, lon)\n\tlet url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${_key__WEBPACK_IMPORTED_MODULE_1__[\"API_KEY\"]}`\n\tfetch(url, { mode: 'cors' })\n\t\t.then(response => response.json())\n\t\t.then(response => {\n\t\t\tconsole.log(response)\n\t\t\tweatherData = response\n\t\t\tObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData)\n\t\t\t// eslint-disable-next-line no-unused-vars\n\t\t}).catch(err => {\n\t\t\t// eslint-disable-next-line no-alert\n\t\t\talert(`Either the city name you entered is not \n\t\t\tcorrect or the city is not in our database. Please enter a valid city name`);\n\t\t});\n\treturn position\n}\n\nconst getApi = () => {\n\tconst city = $('#city-name').value;\n\tif (city === '') {\n\t\t// eslint-disable-next-line no-alert\n\t\talert('city name can not be blank');\n\t} else {\n\t\treturn `https://api.openweathermap.org/data/2.5/weather?q=${city},Belarus&APPID=${_key__WEBPACK_IMPORTED_MODULE_1__[\"API_KEY\"]}`;\n\t}\n};\n\n\nconst apiCal = () => {\n\tgetLocation()\n\t$('#submit').addEventListener('click', (e) => {\n\t\te.preventDefault();\n\t\tconst url = getApi();\n\t\tfetch(url, { mode: 'cors' })\n\t\t\t.then(response => response.json())\n\t\t\t.then(response => {\n\t\t\t\tweatherData = response\n\t\t\t\tObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData)\n\t\t\t\t// eslint-disable-next-line no-unused-vars\n\t\t\t}).catch(err => {\n\t\t\t\t// eslint-disable-next-line no-alert\n\t\t\t\talert(`Either the city name you entered is not \n\t\t\t\tcorrect or the city is not in our database. Please enter a valid city name`);\n\t\t\t});\n\t});\n};\n\n\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return display; });\n/* harmony import */ var _dist_img_weather_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/img/weather.jpg */ \"./dist/img/weather.jpg\");\n/* harmony import */ var _dist_img_weather_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_img_weather_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dist_img_cloudy_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/img/cloudy.gif */ \"./dist/img/cloudy.gif\");\n/* harmony import */ var _dist_img_cloudy_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_img_cloudy_gif__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dist_img_rain_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/img/rain.gif */ \"./dist/img/rain.gif\");\n/* harmony import */ var _dist_img_rain_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_img_rain_gif__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dist_img_snow_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/img/snow.gif */ \"./dist/img/snow.gif\");\n/* harmony import */ var _dist_img_snow_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dist_img_snow_gif__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst $ = document.querySelector.bind(document);\n\nconst weatherimage = (icon) => {\n\tconst img = document.createElement('img');\n\timg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;\n\treturn img;\n};\nconst convertToCelsius = (k) => {\n\tconst value = parseFloat((k - 273.15).toFixed(6));\n\treturn value;\n};\n\nconst degrees = (k, image) => {\n\tconst c = convertToCelsius(k);\n\tconst span = document.createElement('span');\n\tspan.innerHTML = 'check to Kelvin ';\n\tspan.style.display = 'block';\n\t$('.degrees').appendChild(span);\n\tconst temp = document.createElement('h3');\n\ttemp.style.display = 'inline';\n\ttemp.classList.add('name2');\n\tconst toggle = document.createElement('input');\n\t$('.degrees').appendChild(toggle);\n\ttoggle.type = 'checkbox';\n\ttoggle.name = 'checkbox';\n\ttoggle.classList.add('checkbox');\n\ttoggle.addEventListener('change', (e) => {\n\t\te.preventDefault();\n\t\tif (toggle.checked) {\n\t\t\tconst k = parseFloat((c + 273.15).toFixed(4));\n\t\t\ttemp.innerHTML = `${k} &#8490`;\n\t\t} else if (!toggle.checked) {\n\t\t\ttemp.innerHTML = `${c} &#8451`;\n\t\t}\n\t});\n\ttemp.innerHTML = `${c} &#8451`;\n\t$('.degrees').appendChild(temp);\n\tconst img = weatherimage(image);\n\timg.classList.add('image');\n\t$('.degrees').appendChild(img);\n};\n\nconst timezone = (data) => {\n\tconst timezone = document.createElement('h2');\n\ttimezone.innerHTML = `GMT +${data / 3600}`;\n\t$('.town-name').appendChild(timezone);\n};\n\nconst cityname = (data, image, time) => {\n\tconst city = document.createElement('h2');\n\tcity.innerHTML = data;\n\tcity.classList.add('city-name');\n\t$('.town-name').appendChild(city);\n\ttimezone(time);\n\tconst img = weatherimage(image);\n\timg.classList.add('image');\n\t$('.town-name').appendChild(img);\n};\n\n\n\nconst latitute = (long, lati) => {\n\tconst lon = document.createElement('h3');\n\tlon.innerHTML = `Lon: ${long}&#176`;\n\tconst lat = document.createElement('h3');\n\tlat.innerHTML = `lat: ${lati}&#176`;\n\t$('.sunset').appendChild(lat);\n\t$('.sunset').appendChild(lon);\n};\n\nconst sys = (data, image) => {\n\tconst img = weatherimage(image);\n\timg.classList.add('image');\n\t$('.sys').appendChild(img);\n\t// eslint-disable-next-line no-restricted-syntax\n\tfor (const [key, value] of Object.entries(data)) {\n\t\tconst p = document.createElement('p');\n\t\tp.innerHTML = `${key}:  ${value}`;\n\t\t$('.sys').appendChild(p);\n\t}\n};\n\nconst mainData = (data, image) => {\n\tconst img = weatherimage(image);\n\timg.classList.add('image');\n\t$('.main-data').appendChild(img);\n\t// eslint-disable-next-line no-restricted-syntax\n\tfor (const [key, value] of Object.entries(data)) {\n\t\tconst p = document.createElement('p');\n\t\tp.innerHTML = `${key}:  ${value}`;\n\t\t$('.main-data').appendChild(p);\n\t}\n};\n\nconst weather = (data, image) => {\n\tconst img = weatherimage(image);\n\timg.classList.add('image');\n\t$('.weather').appendChild(img);\n\tconst heading = document.createElement('p');\n\theading.innerHTML = 'Weather';\n\t$('.weather').appendChild(heading);\n\t// eslint-disable-next-line no-restricted-syntax\n\tfor (const [key, value] of Object.entries(data)) {\n\t\tconst p = document.createElement('p');\n\t\tp.innerHTML = `${key}:  ${value}`;\n\t\t$('.weather').appendChild(p);\n\t}\n};\n\nconst clearNodes = () => {\n\t$('.town-name').innerHTML = '';\n\t$('.degrees').innerHTML = '';\n\t$('.sunset').innerHTML = '';\n\t$('.sys').innerHTML = '';\n\t$('.main-data').innerHTML = '';\n\t$('.weather').innerHTML = '';\n};\n\nconst changeBg = (weatherData) => {\n\tconst weatherData1 = weatherData;\n\tconst sky = weatherData1.weather[0].main;\n\tif (sky === 'Clear') {\n\t\t$('body').style.backgroundImage = `url(\"${_dist_img_weather_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}\")`;\n\t} else if (sky === 'Snow') {\n\t\t$('body').style.backgroundImage = `url(\"${_dist_img_snow_gif__WEBPACK_IMPORTED_MODULE_3___default.a}\")`;\n\t} else if (sky === 'Rain') {\n\t\t$('body').style.backgroundImage = `url(\"${_dist_img_rain_gif__WEBPACK_IMPORTED_MODULE_2___default.a}\")`;\n\t} else if (sky === 'Clouds') {\n\t\t$('body').style.backgroundImage = `url(\"${_dist_img_cloudy_gif__WEBPACK_IMPORTED_MODULE_1___default.a}\")`;\n\t} else {\n\t\t$('body').style.backgroundImage = `url(\"${_dist_img_weather_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}\")`;\n\t}\n};\n\nconst display = (weatherData) => {\n\tclearNodes();\n\tchangeBg(weatherData);\n\tcityname(weatherData.name, weatherData.weather[0].icon, weatherData.timezone);\n\tdegrees(weatherData.main.temp, weatherData.weather[0].icon);\n\tlatitute(weatherData.coord.lon, weatherData.coord.lat);\n\tsys(weatherData.sys, weatherData.weather[0].icon);\n\tmainData(weatherData.main, weatherData.weather[0].icon);\n\tweather(weatherData.weather[0], weatherData.weather[0].icon);\n\t$('.container').style.marginTop = '20%';\n\t$('.weather-data').style.display = 'block';\n};\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n/* global document, fetch, alert */\n/* eslint no-undef: \"error\" */\n/* eslint prefer-arrow-callback: \"error\" */\n/* eslint-disable no-use-before-define: \"error\" */\n/* eslint-disable indent: \"error\" */\n// eslint-disable-next-line no-undef\n\n\n\n\n\n\nObject(_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\nconst API_KEY = '19162a83776adb533575bcaa858e87a0';\n\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ })

/******/ });