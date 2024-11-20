"use client";

import React, { useState } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WeatherData } from "../../utils/Types";
import WeartherComponnents from "./WeartherComponnents";
import { getCloundsClass } from "./WeartherClounds";

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const [cloundsClass, setCloundsClass] = useState<React.ReactNode>("");

  React.useEffect(() => {
    if (data?.weather?.[0]?.description && data?.sys) {
      const description = data.weather[0].description;

      const currentTime = Date.now() / 1000;
      const isDay = currentTime >= data.sys.sunrise && currentTime <= data.sys.sunset;

      setCloundsClass(getCloundsClass(description, isDay));
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-4 justify-center items-center text-4xl font-semibold">
        <div className="flex flex-row gap-1 text-5xl">
          <p>{Math.round(data.main.temp)}</p>
          <p>°C</p>
        </div>
        <div className="flex justify-center items-center bg-gray-200/20 gap-4 p-6 pt-1 pb-1 rounded-lg">
          <p className="text-4xl">{cloundsClass}</p>
          <h1 className="capitalize text-[16px] font-light tracking-widest">
            {data.weather[0].description}
          </h1>
        </div>
      </div>
      <div className="flex flex-col text-center gap-10 font-normal ">
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
