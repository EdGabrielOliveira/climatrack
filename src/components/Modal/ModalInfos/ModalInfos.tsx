import React from "react";

import { WeatherData } from "../../../utils/Types";
import { WiStrongWind, WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiWindDeg } from "react-icons/wi";
import ModalComponents from "../ModalComponents/ModalComponents";
import WeartherInfos from "@/components/WeatherCard/WeartherInfos";

interface WeatherCardProps {
  data: WeatherData;
}

const Modal: React.FC<WeatherCardProps> = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);

  const getWindDirection = (deg: number): string => {
    if (deg >= 0 && deg < 45) return "Norte";
    if (deg >= 45 && deg < 90) return "Nordeste";
    if (deg >= 90 && deg < 135) return "Leste";
    if (deg >= 135 && deg < 180) return "Sudeste";
    if (deg >= 180 && deg < 225) return "Sul";
    if (deg >= 225 && deg < 270) return "Sudoeste";
    if (deg >= 270 && deg < 315) return "Oeste";
    if (deg >= 315 && deg <= 360) return "Noroeste";
    return "Direção desconhecida";
  };

  const url = `https://openweathermap.org/city/${data.id}`;

  return (
    <>
      <button
        className="xs:w-[12rem] sm:w-[18rem] md:w-[24rem] bg-white text-gray-600 active:bg-gray-400 font-bold uppercase text-sm px-6  h-10 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Mais Informações
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="text-center flex flex-col justify-center pt-8 xs:pt-4 text-2xl gap-4 text-gray-600 uppercase xs:text-sm">
                  <h1> Informações </h1>
                  <span className="border-[1px] flex self-center pb-0 m-0 border-gray-200 w-[16rem] xs:w-[10rem]" />
                </div>
                {/*body*/}
                <div className="relative justify-center items-center p-4 xs:p-2 flex md:w-[28rem] sm:w-[22rem] xs:w-[16rem] rounded-lg">
                  <div className="my-4 text-gray-600 text-blueGray-500 text-lg leading-relaxed text-center flex flex-col gap-4">
                    <div className="md:hidden">
                      <WeartherInfos data={data} />
                    </div>
                    <div className="gap-4 flex flex-col">
                      <div className="modal-comp">
                        <ModalComponents
                          title={"Nascer"}
                          icon={<WiSunrise />}
                          info={`${new Date(data.sys.sunrise * 1000).toLocaleTimeString(
                            "pt-BR",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}`}
                        />
                        <ModalComponents
                          title={"Pôr"}
                          icon={<WiSunset />}
                          info={`${new Date(data.sys.sunset * 1000).toLocaleTimeString(
                            "pt-BR",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}`}
                        />
                      </div>
                      <div className="modal-comp">
                        <ModalComponents
                          title={"Velocidade"}
                          icon={<WiStrongWind />}
                          info={`${data.wind.speed}`}
                          type={"m/s"}
                        />
                        <ModalComponents
                          title={"Direção"}
                          icon={<WiWindDeg />}
                          info={`${getWindDirection(data.wind.deg)}`}
                        />
                      </div>{" "}
                      <div className="modal-comp">
                        <ModalComponents
                          title={"Latitude"}
                          icon={""}
                          info={`${data.coord.lat}`}
                        />
                        <ModalComponents
                          title={"Longitude"}
                          icon={""}
                          info={`${data.coord.lon}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-col gap-4 items-center justify-center pb-4 rounded-b">
                  <button
                    className="text-gray-600 rounded-lg w-56 xs:w-36 xs:text-xs bg-gray-200 font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                  <a
                    href={url}
                    target="_blank"
                    className="justify-center flex text-blue-400 underline underline-offset-2 text-sm xs:text-[10px]"
                  >
                    Veja todas as informações sobre {data.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black rounded-2xl"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
