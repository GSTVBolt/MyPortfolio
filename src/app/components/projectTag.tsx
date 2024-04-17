import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }: any) => {
  const buttonStyles = isSelected
    ? " dark:text-blue-100 text-black border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}