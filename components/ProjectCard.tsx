import { FC } from "react";
import { MaterialSymbolsArrowUpwardAltRounded } from "./icons/arrow-upward-alt-rounded";

export interface Category {
  id: number | string;
  name: string;
}

export interface ProjectCardProps {
  id: number;
  logo: string;
  name: string;
  introduction: string;
  categories: Category[];
  upVotes: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ id, logo, name, introduction, categories, upVotes }) => {
  return <div className="flex border-1 border-neutral-300 rounded-lg p-8">
    <img
      src={logo}
      className="w-12 h-12 border-1 border-neutral-300 rounded-xl flex-none"
    />
    <div className="px-2 grow">
      <a className="text-white hover:text-purple-600" href={`/project/${id}`}>
        <h3 className="text-xl font-bold">{name}</h3>
      </a>
      <p className="text-muted-foreground text-sm text-zinc-400 mb-3">
        {introduction}
      </p>
      <div>
        {categories.map(({ id, name }) => <div
          key={id}
          className="text-sm font-bold inline text-white py-0.5 px-3 rounded-2xl hover:bg-gray-700"
        >
          {name}
        </div>)}
      </div>
    </div>
    <div className="flex-none">
      <button
        className="flex flex-col text-white font-bold items-center hover:bg-gray-600 p-2 rounded-lg w-12 min-h-14"
      >
        <MaterialSymbolsArrowUpwardAltRounded />
        <span className="text-center">{upVotes}</span>
      </button>
    </div>
  </div >
}