const main = () => {
    const searchingForm = document.getElementById('form-action');
    let resultWeather = document.getElementById('result');
    searchingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        pencarianCuaca();
    });

    const pencarianCuaca = () => {
        const inputWeather = document.getElementById('InputKeyword');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputWeather.value}&appid=ac9ee995ee4e002852af86283d1e3ade`)
            .then((respons) => respons.json())
            .then((jsonData) => {
                resultWeather.innerHTML = `<div class="card">
                <div class="result">
                    <h2 style="font-size: 22px">${jsonData.name}, ${jsonData.sys.country}</h2>
                    <ul class="temperatur-cuaca">
                        <li class="status">
                            <p style="font-size: 14px">${jsonData.main.temp}°K</p>
                        </li>
                        <li class="status">
                            <p style="font-size: 14px">${jsonData.weather[0].description}</p>
                        </li>
                    </ul>
                    <div class="detail">
                        <p>kecepatan angin <span style="text-transform: none;">: ${jsonData.wind.speed} m/s</span></p>
                        <p>Koordinat <span>: Lat ${jsonData.coord.lat}, Long ${jsonData.coord.lon}</span></p>
                    </div>
                </div>
            </div>`;
            });
    };
};

export default main;