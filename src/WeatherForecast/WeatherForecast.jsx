import './WeatherForecast.css';

const WeatherItem = (props) => {
    const { forecast } = props

    return (
        <div className="weather">
        <h2>{forecast.day}</h2>
        <img src={forecast.img} alt={forecast.imgAlt} />
        <p><span>conditions: </span>{forecast.conditions}</p>
        <p><span>time: </span>{forecast.time}</p>
        </div>
    )
}

export default WeatherItem;
//we will only work with this and 
// src/components/WeatherForecast/WeatherForecast.jsx


