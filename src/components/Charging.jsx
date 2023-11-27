const Charging = () => {
    return (
        <span className='w-screen h-screen bg-zinc-700 bg-cover flex flex-col gap-3 items-center justify-center '>
            <img className='text-white w-[200px]' src="/typcn_weather-partly-sunny.svg" alt="" />
            <h1 className='text-white font-sans text-lg' >Weather App</h1>
            <ul className="flex">
                <li className="bg-white rounded-md rounded-r-none ndw-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon1.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon2.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon3.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon4.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon5.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon6.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon7.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
                <li className="bg-white p-[4px] rounded-md rounded-l-none w-[35px] flex items-center justify-center"><img src="/icons/chargingIcons/icon8.svg" alt="" className="text-center text-neutral-500 w-[22px]"/></li>
            </ul>
        </span>
    );
};

export default Charging;