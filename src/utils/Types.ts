// Types.ts
export interface WeatherData {
  id: number;
  main: {
    temp: number;
    temp_max: number;
    temp_mim: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
  name: string;
  dt: number;
}
