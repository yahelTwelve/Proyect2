import { useState } from "react";

const WeatherNight = ({ data }) => {

    const toFarenhet = (tempCelcius) => {
        const tempF = ((tempCelcius * 9 / 5) + 32).toFixed(1)
        return tempF
    }

    const [grades, setGrades] = useState(true)

    const changeGrades = () => {
        setGrades(!grades)
    }

    const fonds =
    {
        "01d": "url(/icons/fonds/d1.jpg)",
        "02d": "url(/icons/fonds/d2.png)",
        "03d": "url(/icons/fonds/d3.jpg)",
        "04d": "url(/icons/fonds/d4.jpg)",
        "09d": "url(/icons/fonds/d5.png)",
        "10d": "url(/icons/fonds/d6.jpg)",
        "11d": "url(/icons/fonds/d7.jpg)",
        "13d": "url(/icons/fonds/d8.jpg)",
        "50d": "url(/icons/fonds/d9.jpg)",
        "01n": "url(/icons/fonds/n1.png)",
        "02n": "url(/icons/fonds/n2.jpg)",
        "03n": "url(/icons/fonds/n3.png)",
        "04n": "url(/icons/fonds/n4.jpg)",
        "09n": "url(/icons/fonds/n5.jpg)",
        "10n": "url(/icons/fonds/n6.png)",
        "11n": "url(/icons/fonds/n7.png)",
        "13n": "url(/icons/fonds/n8.png)",
        "50n": "url(/icons/fonds/n9.jpg)"
    }

    const [fond, setFond] = useState(fonds[`${data.weather[0].icon}`])

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col bg-cover" style={{ backgroundImage: `linear-gradient(to right, rgba(20, 16, 19, 0.4), rgba(20, 16, 19, 0.4)), ${fond}` }}>
            <article className="w-[350px] flex items-center justify-center flex-col gap-14 font-sans md:w-[450px] lg:w-[750px]" rgba>
                <h2 className="text-gray-300 text-[22px] font-bold title md:text-[25px]">{data.name}, {data.sys.country}</h2>
                <div className="flex flex-col w-[95%] gap-14 lg:flex-row lg:justify-center">
                    <div className="flex flex-col gap-4 items-center h-[200px] justify-center bg-[#101010c8] p-1 rounded-2xl shadow-lg shadow-gray-400 md:h-[260px] md:justify-evenly lg:w-[1000px lg:h-[300px]">
                        <h3 className="text-gray-100 text-[17px] uppercase font-semibold md:text-[22px]">{data.weather[0].description}</h3>
                        <div className="flex justify-between items-center w-[83%]">
                            <p className="text-gray-100 font-semibold text-[50px] md:text-[70px]">{grades ? `${(data.main.temp).toFixed(1)}ºC` : `${toFarenhet(data.main.temp)}ºF`}</p>
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="bg-[#808080b9] rounded-2xl w-20 md:w-[200px] m-4" />
                        </div>
                    </div>
                    <ul className="flex items-center justify-center h-[90px] w-[100%] font-semibold lg:flex-col lg:h-[100%] lg:w-[200px]">
                        <li className="text-gray-100 h-[90px] flex items-center justify-evenly w-[33%] text-xs bg-[#101010c8] p-1 rounded-2xl rounded-r-none shadow-lg shadow-gray-400 md:text-base lg:w-[100%] lg:rounded-2xl lg:rounded-b-none">{data.wind.speed}m/s <img className="bg-gray-100 rounded-full w-[30px]" src="/icons/speedIcon.svg" alt="" /></li>
                        <li className="text-gray-100 h-[90px] flex items-center justify-evenly w-[33%] text-xs bg-[#101010c8]  p-1 shadow-lg shadow-gray-400 md:text-base lg:w-[100%] lg:rounded-0">{data.main.humidity}% <img className="bg-gray-100 rounded-full w-[30px]" src="/icons/humidityIcon.svg" alt="" /></li>
                        <li className="text-gray-100 h-[90px] flex items-center justify-evenly w-[33%] text-xs bg-[#101010c8]  p-1 rounded-2xl rounded-l-none shadow-lg shadow-gray-400 md:text-base lg:w-[100%] lg:rounded-2xl lg:rounded-t-none">{data.main.pressure}hPa <img className="bg-gray-100 rounded-full w-[30px]" src="/icons/windIcon.svg" alt="" /></li>
                    </ul>
                </div>
                <button className="w-[200px] p-2 bg-[#090808] rounded-3xl shadow-lg text-blue-700 font-semibold tracking-wide shadow-gray-400 lg:w-[250px] lg:h-[50px] lg:text-[20px]" onClick={changeGrades}>{grades ? `Cambiar a ºF` : `Cambiar a ºC`}</button>
            </article>
        </div>
    );
};

export default WeatherNight;