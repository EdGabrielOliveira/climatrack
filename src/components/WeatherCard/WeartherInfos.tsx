"use client";

import React from "react";

import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WeatherData } from "../../utils/Types";
import WeartherComponnents from "./WeartherComponnents";

interface WeatherCardProps {
  data: WeatherData;
}

const WeartherInfos: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <main>
      <div className="flex flex-col text-center font-normal ">
        <div className="flex text-lg md:gap-8 xs:gap-2 sm:gap-8 items-center justify-center text-center xs:bg-gray-200 md:bg-transparent rounded-lg">
          <WeartherComponnents
            title={"Umidade"}
            icon={<WiHumidity />}
            info={`${data.main.humidity}`}
            unit={"%"}
          />
          <WeartherComponnents
            title={"Sens. térmica"}
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
    </main>
  );
};

export default WeartherInfos;
