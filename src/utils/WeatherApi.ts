import axios from "axios";
import { WeatherData } from "./Types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error(
    "A chave da API não foi configurada. Verifique suas variáveis de ambiente.",
  );
}

export async function fetchWeatherData(city: string): Promise<WeatherData | null> {
  if (!city || !/^[a-zA-ZÀ-ÿ\s-]+$/.test(city)) {
    console.error("Nome da cidade inválido.");
    return null;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city,
  )}&appid=${API_KEY}&lang=pt_br&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        `Erro na API: ${err.response?.status} - ${err.response?.data?.message}`,
      );
    } else {
      console.error("Erro desconhecido:", err);
    }
    return null;
  }
}

export function getBackgroundClass(temp: number): string {
  const baseClass = "bg-cover transition-all duration-700 ease-in-out";

  if (temp <= 0) {
    return `bg-[url('/backgrounds/frio.jpeg')] ${baseClass}`;
  } else if (temp <= 11) {
    return `bg-[url('/backgrounds/pouco-frio.jpg')] ${baseClass}`;
  } else if (temp <= 21) {
    return `bg-[url('/backgrounds/quente.jpg')] ${baseClass}`;
  } else {
    return `bg-[url('/backgrounds/muito-quente.jpg')] ${baseClass}`;
  }
}
