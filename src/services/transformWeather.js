import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers';

//Transformación de los valores a mostrar
const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(0);
}
//Seteando el valor del clima.
const getWeatherState = weather => {
    const { id } = weather;
    if(id < 300){
        return THUNDER;
    } else if(id < 400){
        return DRIZZLE;
    } else if(id < 600){
        return RAIN;
    } else if (id <700){
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
    
}

//Funcion que se exporta, que toma los datos de weather_data que es la respuesta del servidor y los asigna a un nuevo "data" para ser usados
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperture = getTemp(temp);


    const data = {
        humidity,
        temperture,
        weatherState,
        wind: `${speed} m/s`,

    }
    return data;
}

export default transformWeather;