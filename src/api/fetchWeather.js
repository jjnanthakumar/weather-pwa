import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '08276fedd6a2bdf9ec17dff5a721dddb';
export const fetchWeather = async (city) => {
    try {
        const { data } = await axios.get(URL, {
            params: { q: city, appid: API_KEY, units: 'metric' }
        })
        return data
    } catch (err) {
        return { error: true, message: "Please provide a proper name :("}

    }

}