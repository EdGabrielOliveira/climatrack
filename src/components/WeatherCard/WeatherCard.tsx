// src/components/WeatherCard.tsx
import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";
import { WeatherData } from "../../utils/Types";

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-2xl font-semibold">Clima</h1>
      <h1 className="flex flex-row gap-4 justify-center text-4xl font-semibold">
        <FaCloudSun />
        {Math.round(data.main.temp)}°C
      </h1>
      <div className="flex flex-col text-center gap-10 font-normal ">
        <h1 className="capitalize">{data.weather[0].description}</h1>
        <div className="flex gap-8 sm:text-sm">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-2xl">
              <WiHumidity />
            </span>
            <h1 className="flex justify-center gap-2">
              Umidade: <p>{data.main.humidity}%</p>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-2xl">
              <TbTemperatureSun />
            </span>
            <h1>Sensação térmica: {Math.round(data.main.feels_like)}°C</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-2xl">
              <CgCompressV />
            </span>
            <h1>Pressão: {data.main.pressure} kPa</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
