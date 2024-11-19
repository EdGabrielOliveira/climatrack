// Types.ts
export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  sys: {
    country: string;
  };
  name: string;
  dt: number;
}
