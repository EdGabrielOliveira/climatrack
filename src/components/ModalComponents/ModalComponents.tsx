import React from "react";

interface ModalProps {
  title: string;
  type?: string;
  icon: React.ReactNode;
  info: string;
}

export default function ModalComponents({ title, icon, info, type }: ModalProps) {
  return (
    <div className="bg-gray-100 shadow-xl text-center justify-center p-2 rounded-lg w-[10rem] h-[6rem]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-2xl"> {icon} </p>
        <p className="text-sm"> {title} </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center font-semibold gap-1">
        <p className="text-xl">{info}</p>
        <p className="text-sm">{type}</p>
      </div>
    </div>
  );
}
