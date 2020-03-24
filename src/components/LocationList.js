import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';



const LocatuionList = ({ cities, onSelectedLocation }) => {
    const hanldeWeatherLocation = city => {
        console.log("hanldeWeatherLocation");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map( (city) => 
        (
        <WeatherLocation 
        key={city} 
        city={city}
        onWeatherLocationClick={() => hanldeWeatherLocation(city)} 
        />))
    );

    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

LocatuionList.propType = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocatuionList;