import React from "react";

interface WeatherPoprs {
  title: string;
  icon: React.ReactNode;
  info: string;
  unit: string;
}

export default function WeartherComponnents({ title, icon, info, unit }: WeatherPoprs) {
  return (
    <div className="flex flex-col xs:gap-0 xs:flex-row md:flex-col xs:pt-2 xs:pb-2  justify-center items-center gap-2 ">
      <span className="md:text-2xl xs:text-xl">{icon}</span>
      <section className="flex flex-col justify-center items-center">
        <h1 className="xs:hidden sm:hidden md:flex">{title}</h1>
        <div className="flex flex-row gap-1 xs:gap-0 font-semibold md:text-lg xs:text-sm">
          <p>{info}</p>
          <p>{unit}</p>
        </div>
      </section>
    </div>
  );
}
