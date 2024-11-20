import React from "react";

interface ModalProps {
  title: string;
  type?: string;
  icon: React.ReactNode;
  info: string;
}

export default function ModalComponents({ title, icon, info, type }: ModalProps) {
  return (
    <div className="bg-gray-100 shadow-xl text-center justify-center p-2 rounded-lg">
      <div className="flex flex-row items-center justify-center text-center gap-2">
        <p> {icon} </p>
        <p> {title} </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center font-semibold gap-1">
        <p>{info}</p>
        <p className="text-sm">{type}</p>
      </div>
    </div>
  );
}
