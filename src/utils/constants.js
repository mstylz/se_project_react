const weatherOptions = [{
        day: true,
        condition: "clear",
        url: new URL("../../assets/day/clear.svg",
            import.meta.url).href,
    },
    {
        day: true,
        condition: "cloudy",
        url: new URL("../../assets/day/cloudy.svg",
            import.meta.url).href,
    },
    {
        day: true,
        condition: "rain",
        url: new URL("../../assets/day/rain.svg",
            import.meta.url).href,
    },
    {
        day: true,
        condition: "storm",
        url: new URL("../../assets/day/storm.svg",
            import.meta.url).href,
    },
    {
        day: true,
        condition: "snow",
        url: new URL("../../assets/day/snow.svg",
            import.meta.url).href,
    },
    {
        day: true,
        condition: "fog",
        url: new URL("../../assets/day/fog.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "clear",
        url: new URL("../../assets/night/clear.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "cloudy",
        url: new URL("../../assets/night/cloudy.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "rain",
        url: new URL("../../assets/night/rain.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "storm",
        url: new URL("../../assets/night/storm.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "snow",
        url: new URL("../../assets/night/snow.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "fog",
        url: new URL("../../assets/night/fog.svg",
            import.meta.url).href,
    },
];

const defaultWeatherOptions = [{
        day: true,
        condition: "default",
        url: new URL("../assets/day/default.svg",
            import.meta.url).href,
    },
    {
        day: false,
        condition: "default",
        url: new URL("../assets/night/default.svg",
            import.meta.url).href,
    },
];



export { weatherOptions, defaultWeatherOptions };

//I live in Boston so I use Boston's coordinates
export const coordinates = {
    latitude: 42.361145,
    longitude: -71.057083,
};
export const APIkey = "6a7bd1e73f7ede87ebb0421b20abcd8e";