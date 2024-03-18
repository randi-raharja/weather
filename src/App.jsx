import axios from "axios";
import { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Card from "../components/Card";
import { DateTime } from "luxon";
import { IoMenu, IoClose } from 'react-icons/io5'

// URL
const baseUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=-3.3199&longitude=114.5907&current=temperature_2m,is_day,rain,weather_code&hourly=temperature_2m,rain,weather_code&timezone=Asia%2FSingapore&forecast_days=1";


export default function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setData(res.data);
    });
  }, []);
  if (!data) return null;
  // console.log(data)
  const hourly = data.hourly;

  // Date by Luxon
  const now = DateTime.now().toLocaleString({ month: 'long', day: 'numeric', weekday: 'long' });
  // console.log(hourly)

  function menu() {
    setToggle(!toggle)
  }

  return (
    <>
      <div className="relative justify-between bg-cover w-full" style={{
        backgroundImage: `url("https://images2.alphacoders.com/134/1341970.png")`,
      }}>
        <div className="flex flex-col h-screen justify-between">
          {/* Top */}
          <div className="flex-1 flex flex-col justify-between border-b-2 px-4 py-6 text-white">
            {/* Hamburger + Date */}
            <div className="flex justify-between items-center">
              <button onClick={menu} className="rounded-full hover:bg-white hover:text-black text-2xl p-2 transition ease-in-out delay-150">
                {toggle ? <IoClose /> : <IoMenu />}
              </button>
              <h1 className="font-bold font-Tomorrow  text-3xl">
                {now}
              </h1>
            </div>
            {/* Time */}
            <div className="text-center font-bold italic font-Tomorrow flex items-center flex-col">
              <h1 className="text-[7rem] ">19 : 22</h1>
            </div>
            {/* Cuaca */}
            {/* <div className="text-right">
              bawah
            </div> */}
          </div>

          {/* Bottom */}
          <div className="flex overflow-y-auto gap-2 mt-5 px-2">
            {hourly.time.map((x, i) => {
              return (
                <div key={i}>
                  <Card time={x.slice(-5)} icon={<TiWeatherPartlySunny />} temp={`${hourly.temperature_2m[i]}${data.hourly_units.temperature_2m}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
