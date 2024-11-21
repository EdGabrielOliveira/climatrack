"use client";

import React, { useState } from "react";
import { getCloundsClass } from "./WeartherClounds";
import { WeatherData } from "@/utils/Types";
import WeartherInfos from "./WeartherInfos";

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
    <div className="flex flex-col md:gap-10 text-center xs:gap-8">
      <div className="flex flex-col gap-4 justify-center items-center text-4xl font-semibold">
        <div className="flex flex-row gap-1 md:text-5xl xs:text-4xl">
          <p>{Math.round(data.main.temp)}</p>
          <p>°C</p>
        </div>
        <div className="flex justify-center items-center text-center bg-gray-200/20 md:gap-4 xs:gap-2 md:p-4 xs:p-1 md:pt-1 md:pb-1 rounded-lg ">
          <p className="md:text-4xl xs:text-xl">{cloundsClass}</p>
          <h1 className="capitalize text-[16px] font-light tracking-widest xs:text-sm">
            {data.weather[0].description}
          </h1>
        </div>
        <div className="sm:hidden xs:hidden md:flex">
          <WeartherInfos data={data} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
