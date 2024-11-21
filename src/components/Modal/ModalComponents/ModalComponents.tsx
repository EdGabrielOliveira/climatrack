import React from "react";

interface ModalProps {
  title: string;
  type?: string;
  icon: React.ReactNode;
  info: string;
}

export default function ModalComponents({ title, icon, info, type }: ModalProps) {
  return (
    <div className="bg-gray-100 shadow-xl text-center justify-center items-center sm:p-2 md:p-2 xs:p-0 rounded-lg md:w-[10rem] sm:w-[8rem] md:h-min sm:h-min xs:h-min xs:w-[6rem]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="md:text-2xl xs:tex-xl"> {icon} </p>
        <p className="md:text-sm xs:text-xs"> {title} </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center font-semibold gap-1">
        <p className="md:text-xl xs:text-sm">{info}</p>
        <p className="text-sm">{type}</p>
      </div>
    </div>
  );
}
