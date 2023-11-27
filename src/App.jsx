
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherData from './components/WeatherData'
import Charging from './components/Charging'
import WeatherNight from './components/WeatherNight'
import cities from './components/city.list.json'

function App() {




  const [weather, setWeather] = useState(null)

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const success = (pos) => {
    const lat = pos.coords.latitude
    const long = pos.coords.longitude

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4e4ae9a1fa38106691259e0377e47a1a&lang=es&units=metric`)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  const [color, setColor] = useState(true)

  const colorChange = () => {
    setColor(!color)
  }

  const getCity = () => {

    const input = document.getElementById('citySearched')
    const value = input.value

    console.log(value)

    const result = cities.find(city => city.name === value)

    const lat = result.coord.lat
    const long = result.coord.lon
    console.log(lat, long)

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4e4ae9a1fa38106691259e0377e47a1a&lang=es&units=metric`)
      .then(({ data }) => setWeather(data))
      .catch((err) => alert('Ciudad no encontrada'));
  }


  return (
    <main className='relative flex justify-center items-center h-screen w-screen bg-[src=(/icons/fonds/d2.jpg)]'>

      {weather ? color ? <div onClick={colorChange} className='absolute w-[75px] h-[35px] bg-zinc-400 top-10 m-auto rounded-full shadow-lg flex items-center'>
        <div className='w-[33px] h-[33px] bg-gray-200 rounded-full flex items-center justify-center'><img src="/dark_mode_FILL0_wght400_GRAD0_opsz24.svg" alt="" /> </div>
      </div> : <div onClick={colorChange} className='absolute w-[75px] h-[35px] bg-gray-900 top-10 m-auto rounded-full shadow-lg flex items-center justify-end'>
        <div className='w-[33px] h-[33px] bg-gray-200 rounded-full flex items-center justify-center'><img src="/light_mode_FILL0_wght400_GRAD0_opsz24.svg" alt="" /> </div>
      </div> : ''}
      {weather ? color ? <WeatherData data={weather} /> : <WeatherNight data={weather} /> : <Charging />}
      {weather ? color ?<div className='absolute bottom-8 flex items-center justify-center '>
        <input className='p-3 rounded-md font-sans font-semibold text-sm text-center shadow-md h-[50px] w-[300px] border-r-0 rounded-r-[0px]' id='citySearched' type="text" placeholder='Buscar ciudad'/>
        <button className='p-4 rounded-md font-sans font-semibold text-sm text-center shadow-md bg-slate-50 h-[50px] flex items-center justify-center border-l-0 rounded-l-[0px]' onClick={getCity}><img className='w-[20px]' src="/icons/search-loaction-svgrepo-com.svg" alt="" /></button>
      </div>: <div className='absolute bottom-8 flex items-center justify-center'>
        <input className='p-3 rounded-md font-sans font-semibold text-sm text-center shadow-md h-[50px] w-[300px] border-r-0 rounded-r-[0px] bg-slate-300 ' id='citySearched' type="text" placeholder='Buscar ciudad'/>
        <button className='p-4 rounded-md font-sans font-semibold text-sm text-center shadow-md bg-slate-400 h-[50px] flex items-center justify-center border-l-0 rounded-l-[0px] ' onClick={getCity}><img className='w-[20px]' src="/icons/search-loaction-svgrepo-com.svg" alt="" /></button>
      </div> : ''}
    </main>
  )
}

export default App
