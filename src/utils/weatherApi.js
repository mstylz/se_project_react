export const getWeather = ({ latitude, longitude }, APIkey) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
    ).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
};

export const filterWeatherData = (data) => {
    const result = {};
    result.city = data.name;
    result.temperature = {
        F: Math.round(data.main.temp),
        C: Math.round(((data.main.temp - 32) * 5) / 9),
    };
    result.type = getWeatherCondition(data.main.temp);

    result.isDay = isDay({
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        currentTime: Math.floor(Date.now() / 1000),
    });

    result.condition = data.weather[0].main.toLowerCase();
    return result;
};

const isDay = ({ sunrise, sunset, currentTime }) => {
    return currentTime > sunrise && currentTime < sunset;
};

const getWeatherCondition = (temperature) => {
    if (temperature > 86) {
        return "hot";
    } else if (temperature >= 66 && temperature <= 86) {
        return "warm";
    } else {
        return "cold";
    }
};