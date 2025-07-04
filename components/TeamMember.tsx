import { FC } from "react";
import Image from "next/image";

export interface TeamMemberProps {
  photo: string;
  name: string;
  position: string;
  background: string;
}

export const TeamMember: FC<TeamMemberProps> = ({ photo, name, position, background }) => {
  return <div
    className="w-full border-1 border-gray-300 rounded-xl p-4 flex flex-col items-center shadow-md h-full col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
  >
    <Image alt={name} src={photo} width={80} height={80}  className="w-20 h-20 rounded-full shadow-xl/30 mb-4" />

    <h5 className="text-xl font-bold mb-2 text-gray-100">{name}</h5>

    <p className="text-gray-300 text-sm font-medium mb-1">{position}</p>

    <p className="text-gray-300 text-sm">{background}</p>
  </div>
}