import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ForecastExtended extends Component {
    render () {
        const { city } = this.props;

    return(<di>Pronostico Extendido {city}</di>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended