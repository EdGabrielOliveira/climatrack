import React from "react";
import {
  WiDayCloudy,
  WiDaySunny,
  WiNightClear,
  WiNightCloudy,
  WiNightPartlyCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiStormShowers,
  WiSnow,
  WiFog,
  WiRaindrops,
  WiSnowflakeCold,
  WiSprinkle,
} from "react-icons/wi";

export function getCloundsClass(description: string, isDay: boolean): React.ReactNode {
  const desc = description.toLowerCase();

  if (desc === "céu limpo") {
    return isDay ? <WiDaySunny /> : <WiNightClear />;
  } else if (desc === "algumas nuvens") {
    return isDay ? <WiDayCloudy /> : <WiNightPartlyCloudy />;
  } else if (desc === "nuvens dispersas") {
    return isDay ? <WiCloud /> : <WiNightPartlyCloudy />;
  } else if (desc === "nuvens quebradas") {
    return isDay ? <WiCloudy /> : <WiNightCloudy />;
  } else if (desc === "nublado") {
    return <WiCloudy />;
  } else if (desc === "chuva leve") {
    return <WiRain />;
  } else if (desc === "chuva moderada") {
    return <WiRain />;
  } else if (desc === "chuva forte") {
    return <WiStormShowers />;
  } else if (desc === "trovoadas") {
    return <WiStormShowers />;
  } else if (desc === "trovoada com chuva fraca") {
    return <WiSprinkle />;
  } else if (desc === "neve") {
    return <WiSnow />;
  } else if (desc === "névoa") {
    return <WiFog />;
  } else if (desc === "chuva congelante") {
    return <WiRaindrops />;
  } else {
    return <WiSnowflakeCold />; // Usando um ícone padrão
  }
}
