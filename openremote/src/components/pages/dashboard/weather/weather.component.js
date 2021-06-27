import React from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherComponent = () => {
    const customStyles = {
        fontFamily:  'Arial, sans-serif',
        gradientStart:  '#292929',
        gradientMid:  '#4e4e4e',
        gradientEnd:  '#d8ef9b',
        locationFontColor:  '#a3b421',
        todayTempFontColor:  '#a3b421',
        todayDateFontColor:  '#a3b421',
        todayRangeFontColor:  '#6fb421',
        todayDescFontColor:  '#6fb421',
        todayInfoFontColor:  '#6fb421',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#a3b421',
        forecastSeparatorColor:  '#262626',
        forecastDateColor:  '#4a4a4a',
        forecastDescColor:  '#4a4a4a',
        forecastRangeColor:  '#4a4a4a',
        forecastIconColor:  '#181818',
    };
    // const customStyles = {
    //     fontFamily:  'Arial, sans-serif',
    //     gradientStart:  '#292929',
    //     gradientMid:  '#4e4e4e',
    //     gradientEnd:  '#96b4cb',
    //     locationFontColor:  '#219eb4',
    //     todayTempFontColor:  '#219eb4',
    //     todayDateFontColor:  '#21afb4',
    //     todayRangeFontColor:  '#21a8b4',
    //     todayDescFontColor:  '#21a3b4',
    //     todayInfoFontColor:  '#21a3b4',
    //     todayIconColor:  '#FFF',
    //     forecastBackgroundColor:  '#6fb7dd',
    //     forecastSeparatorColor:  '#262626',
    //     forecastDateColor:  '#4a4a4a',
    //     forecastDescColor:  '#4a4a4a',
    //     forecastRangeColor:  '#4a4a4a',
    //     forecastIconColor:  '#181818',
    // };

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'f44ea812bc3aaa1a826da334993240ec',
        lat: '-25.757',
        lon: '28.1443',
        lang: 'en',
        unit: 'metric',
    });

    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            theme={customStyles}
            data={data}
            lang="en"
            locationLabel="Pretoria South Africa"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    )
}

export default WeatherComponent;