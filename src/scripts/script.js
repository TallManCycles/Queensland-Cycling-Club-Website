function contactUs() {
    const firstName = document.getElementById("first_name").value;
    document.getElementById("thankyou").innerText = `Thank you ${firstName}!, Your message has been received.
                                                                                We will be in contact shortly.`;
}

function getWeather () {
    const api = '2980dcb0d2442fc558d1e50f9278af8b';
    const city = 'Brisbane'
    const countryCode = 'au'
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${api}`;

    fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const { temp, feels_like, humidity, temp_min, temp_max } = data.main;                
        const temperature = document.getElementById('temp'); 
        const minimumTemp = document.getElementById('mintemp');
        const maximumTemp = document.getElementById('maxtemp') ;
        const feelsLike = document.getElementById('feelsLike');
        const humiditypercent = document.getElementById('humidty');

        try {
            temperature.table = `${temp} °C`;
            minimumTemp.innerText = temp_min;
            maximumTemp.innerText = temp_max;
            feelsLike.innerText = feels_like;
            humiditypercent.innerText = `${humidity} %`;
        } catch (err) {
            console.log(err.message);
        }        
    });
}

function onModalClicked() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

}

function onClose() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

getWeather();


