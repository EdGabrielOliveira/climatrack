import React from "react";

interface WeatherPoprs {
  title: string;
  icon: React.ReactNode;
  info: string;
  unit: string;
}

export default function WeartherComponnents({ title, icon, info, unit }: WeatherPoprs) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <section className="flex flex-col justify-center items-center">
        <h1>{title}</h1>
        <div className="flex flex-row gap-1 font-semibold text-lg">
          <p>{info}</p>
          <p>{unit}</p>
        </div>
      </section>
    </div>
  );
}
