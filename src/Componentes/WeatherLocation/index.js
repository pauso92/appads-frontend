import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './styles.css';


//Esto es lo que va a renderizar, lo que se va a visualizar
class WeatherLocation extends Component {
    //Primer punto donde se empieza a construir el componente
    constructor(props) {
        //Este es el contructor de nuestro componente base es decir de "Component"
        super(props);
        const { city } = props;
        //El this.state es el estado local del componente, es nuestro estado parcil del componente y ayuda a que el componenre se renderise 
        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }




    //Funcion que se dispara con el click de boton actualizar
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
        //Para modificar el estado y introduccir los nuevos valores a un componente se ocupa el "this.setState" y insertando unicamente
        //Los nuevos valodres no es necesario agregar todos los valores solos los que se estan modificando.
    }
    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50} />
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;