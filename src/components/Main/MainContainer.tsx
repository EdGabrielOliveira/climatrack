"use client";
import React, { useRef, useState } from "react";
import { fetchWeatherData, getBackgroundClass } from "../../utils/WeatherApi";
import { WeatherData } from "../../utils/Types";
import SearchInput from "../../components/SearchInput/SearchInput";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import ModalInfos from "@/components/Modal/ModalInfos/ModalInfos";

export default function Homepage() {
  const [backgroundClass, setBackgroundClass] = useState<string>(
    "bg-[url('/backgrounds/background.jpg')] bg-cover transition-all duration-700 ease-in-out",
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function searchCity() {
    const city = inputRef.current?.value.trim();
    if (!city) {
      setError("Por favor, insira o nome de uma cidade.");
      return;
    }

    setError(null);

    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
      const temp = data.main.temp;
      setBackgroundClass(getBackgroundClass(temp));
    } else {
      setError("Cidade não encontrada ou erro na API.");
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      searchCity();
    }
  }

  return (
    <main
      className={`flex flex-col justify-center items-center h-screen w-full ${backgroundClass} overflow-x-hidden overflow-y-hidden`}
    >
      <div className="bg-transparent backdrop-blur-sm backdrop-brightness-[40%] rounded-2xl shadow-2xl p-10 flex flex-col gap-4 ">
        <h1 className="text-center text-2xl pb-4 font-semibold">ClimaTrack</h1>
        <section className="w-[32rem] flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2 ">
            <SearchInput
              onSearch={searchCity}
              onKeyPress={handleKeyPress}
              ref={inputRef}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          {weatherData && (
            <>
              <div className="text-center text-xl">
                <h1 className="capitalize font-semibold">
                  {weatherData.name} - {weatherData.sys.country}
                </h1>
              </div>
              <div className="flex flex-col gap-6 justify-center items-center">
                <WeatherCard data={weatherData} />
                <ModalInfos data={weatherData} />
              </div>
            </>
          )}
        </section>
      </div>
      {/* Developed by Gabriel Oliveira */}
    </main>
  );
}
