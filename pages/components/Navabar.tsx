import React from "react";

type NavbarType = {
  title: string;
};

export default function Navabar({ title }: NavbarType) {
  return (
    <>
      <div className="p-3 w-full bg-emerald-600 text-white flex justify-center">
          <div className="font-bold">{title}</div>
      </div>
    </>
  );
}
