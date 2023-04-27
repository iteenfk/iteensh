"use strict"

const api_key = "50d4c65fa058ccffec4d18694c037a13";

const select = document.getElementById("select");

console.log(select)

select.addEventListener("change",() => {
    const city = select.value;
    console.log(city);
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        const a = data.weather[0].main;
        const b = data.main.temp;
        const c = data.main.humidity;
        const d = data.wind.speed;
        const e = data.wind.deg;
        const f = data.main.pressure;
        const g = data.main.temp_max;
        const h = data.main.temp_min;
        const i = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const j = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        const Box = document.getElementById("box");
        Box.innerHTML = `
          <h3>${city}の天気情報<h3>
          <p>天気: ${a}<p>
          <p>気温: ${b}℃<p>
          <p>湿度: ${c}<p>
          <p>風速: ${d}<p>
          <p>風向: ${e}<p>
          <p>気圧: ${f}<p>
          <p>最高気温: ${g}℃<p>
          <p>最低気温: ${h}℃<p>
          <p>日の出時刻: ${i}<p>
          <p>日没時刻: ${j}<p>
        `;
    })
    .catch(error => console.error(error));
});