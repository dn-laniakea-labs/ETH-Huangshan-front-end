import { FC } from "react";
import { LucideMessageCircle } from "./icons/lucide-message-circle";
import { LucideTrendingUp } from "./icons/lucide-trending-up";

export interface ProductCardProps {
  title: string;
  id: string | number;
  logo: string;
  rank: number;
  description: string;
  tags: Array<string>;
  comments: number;
  trend: number;
  tagColorClass?: string;
  onClick?: (id: string | number) => any;
}

export const ProductCard: FC<ProductCardProps> = ({ id, title, logo, rank, description, tags, comments, trend, tagColorClass, onClick }) => (
  <div className="p-3">
    <div className="shadow-2xs rounded-xl p-4 md:p-5 bg-gray-800 hover:bg-gray-700 cursor-pointer" onClick={() => onClick?.(id)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm font-medium"># {rank}</span>
          <img src={logo} alt={title} width={18} height={18} />
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${tagColorClass || ""} cursor-pointer hover:opacity-80 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-teal-500 text-teal-500`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* <div className="flex items-center justify-between text-gray-400 text-sm">
      <div className="stats-item hover:text-white transition-colors cursor-pointer flex items-center">
        <LucideMessageCircle width={16} />
        <span className="ms-1">{comments}</span>
      </div>
      <div className="stats-item hover:text-green-400 transition-colors flex items-center">
        <LucideTrendingUp width={16} />
        <span className="ms-1">{trend}</span>
      </div>
    </div> */}
    </div>
  </div>
);
