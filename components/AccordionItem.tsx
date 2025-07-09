"use client";

import { FC, JSX, useState } from "react";

export interface AccordionItemProps {
   title: string, 
   children: JSX.Element
}

export const AccordionItem: FC<AccordionItemProps> = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-white text-xl">{title}</span>
        <svg
          className={`w-8 h-8 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="white"
          stroke="currentColor"
          viewBox="0 0 35 35"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-3 text-gray-200">{children}</div>
      </div>
    </div>
  );
}