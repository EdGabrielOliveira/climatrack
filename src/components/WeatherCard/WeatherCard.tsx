// src/components/WeatherCard.tsx
import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WeatherData } from "../../utils/Types";
import WeartherComponnents from "./WeartherComponnents";

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
        <div className="flex gap-8 items-center justify-center text-center">
          <WeartherComponnents
            title={"Umidade"}
            icon={<WiHumidity />}
            info={`${data.main.humidity}`}
            unit={"%"}
          />
          <WeartherComponnents
            title={"Sens. térmica:"}
            icon={<WiThermometer />}
            info={`${Math.round(data.main.feels_like)}`}
            unit={"°c"}
          />
          <WeartherComponnents
            title={"Pressão"}
            icon={<WiBarometer />}
            info={`${data.main.pressure}`}
            unit="kPa"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
