import axios from "axios";
import { WeatherData } from "./Types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error(
    "A chave da API não foi configurada. Verifique suas variáveis de ambiente.",
  );
}

export async function fetchWeatherData(input: string): Promise<WeatherData | null> {
  if (!input) {
    console.error("Input inválido.");
    return null;
  }

  let url: string;
  let cityName: string | undefined;

  if (/^\d+$/.test(input)) {
    try {
      const geocodeResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/zip`,
        {
          params: {
            zip: `${input},BR`,
            appid: API_KEY,
          },
        },
      );
      const { lat, lon, name } = geocodeResponse.data;
      if (!lat || !lon) {
        console.error("Dados de geocodificação inválidos.");
        return null;
      }
      cityName = name;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&units=metric`;
    } catch (error) {
      console.error("Erro ao buscar geocodificação:", error);
      return null;
    }
  } else if (/^[a-zA-ZÀ-ÿ\s-]+$/.test(input)) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      input,
    )}&appid=${API_KEY}&lang=pt_br&units=metric`;
  } else {
    console.error("Input inválido. Digite um nome de cidade ou CEP válido.");
    return null;
  }

  try {
    const response = await axios.get(url);
    const weatherData = response.data;

    if (cityName) {
      weatherData.name = cityName;
    }

    return weatherData;
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
    return null;
  }
}

export function getBackgroundClass(temp: number): string {
  const baseClass = "bg-cover transition-all duration-700 ease-in-out";

  if (temp <= 0) {
    return `bg-[url('/backgrounds/frio.webp')] ${baseClass}`;
  } else if (temp <= 11) {
    return `bg-[url('/backgrounds/pouco-frio.webp')] ${baseClass}`;
  } else if (temp <= 21) {
    return `bg-[url('/backgrounds/quente.webp')] ${baseClass}`;
  } else {
    return `bg-[url('/backgrounds/muito-quente.webp')] ${baseClass}`;
  }
}
