"use client";

import { FC, useEffect, useState } from "react";
import { Category } from "../ProjectCard";
import _ from 'lodash';
import { ProductCard } from "../ProductCard";
import { Project } from "@/types/project.type";

// const timeOptions = [
//   {
//     label: "Today",
//     value: "today",
//   },
//   {
//     label: "Yesterday",
//     value: "yesterday",
//   },
//   {
//     label: "This Week",
//     value: "this-week",
//   },
//   {
//     label: "Last Week",
//     value: "last-week",
//   }
// ]

export interface ProjectGroupByStage {
  idea: Project[],
  alphaBeta: Project[],
  live: Project[],
}


const sortOptions = [
  {
    label: "Popular",
    value: "vote",
  },
  {
    label: "Recent",
    value: "createTime",
  },
]

export const ProductComponent: FC<{}> = () => {
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);
  const [checkedCategory, setCheckCategory] = useState<number>(-1);
  // const [checkedTime, setCheckedTime] = useState<string>(timeOptions[0].value);
  const [checkedSortBy, setCheckedSortBy] = useState<string>(sortOptions[0].value);

  const [ideaProject, setIdeaProject] = useState<Project[]>([]);
  const [alphaBetaProject, setAlphaBetaProject] = useState<Project[]>([]);
  const [liveProject, setLiveProject] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/category`, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      const categoryList: Category[] = await res.json();
      const { category } = _.groupBy(categoryList, "type");
      setCategoryOptions(category || []);
      console.log(category);
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const params = [];
      if (checkedCategory > 0) {
        params.push(['categoryId', checkedCategory + ""]);
      }
      if (checkedSortBy) {
        params.push(['groupBy', checkedSortBy + ""]);
      }
      const searchParams = new URLSearchParams(params).toString();
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project/group-by/stage?${searchParams}`, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      const { idea, alphaBeta, live, }: ProjectGroupByStage = await res.json();
      setIdeaProject(() => idea);
      setAlphaBetaProject(() => alphaBeta);
      setLiveProject(() => live);
    })()
  }, [checkedCategory, checkedSortBy])

  return <main className="min-h-lvh bg-zinc-900">
    <div className="mx-6 pt-9">
      <label className="inline-flex items-center cursor-pointer my-1.5 mx-2">
        <input type="radio" name="category" value={-1} className="hidden peer" checked={checkedCategory == -1} onChange={() => setCheckCategory(-1)} />
        <span className="px-3 py-1.5 rounded-lg bg-gray-700 text-gray-300 peer-checked:bg-purple-600 peer-checked:text-white transition-colors">
          All
        </span>
      </label>

      {categoryOptions.map(({ id, name }) => <label key={id} className="inline-flex items-center cursor-pointer my-1.5 mx-2">
        <input type="radio" name="category" value={id} className="hidden peer" checked={checkedCategory == id} onChange={() => setCheckCategory(Number(id))} />
        <span className="px-3 py-1.5 rounded-lg bg-gray-700 text-gray-300 peer-checked:bg-purple-600 peer-checked:text-white transition-colors">
          {name}
        </span>
      </label>)}
    </div>

    {/* <div className="mx-6 pt-4">
      {timeOptions.map(({ label, value }) => <label key={value} className="inline-flex items-center cursor-pointer my-1.5 mx-2">
        <input type="radio" name="time" value={value} className="hidden peer" checked={checkedTime == value} onChange={() => setCheckedTime(value)} />
        <span className="px-3 py-1.5 text-gray-400 peer-checked:text-white transition-colors peer-checked:border-b-2 peer-checked:border-b-purple-500">
          {label}
        </span>
      </label>)}
    </div> */}

    <div className="mx-6 pt-4">
      <span className="text-white font-extrabold">Sort By</span>
      {sortOptions.map(({ label, value }) => <label key={value} className="inline-flex items-center cursor-pointer my-1.5 mx-2">
        <input type="radio" name="time" value={value} className="hidden peer" checked={checkedSortBy == value} onChange={() => setCheckedSortBy(value)} />
        <span className="px-3 py-1.5 text-gray-400 peer-checked:text-white transition-colors peer-checked:border-b-2 peer-checked:border-b-purple-500">
          {label}
        </span>
      </label>)}
    </div>

    <section className="px-6 py-5">
      <h3 className="text-2xl font-bold my-3">
        <span>🚀</span>
        <span className="text-white">Live Products</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {liveProject.map(({ name, id, logo, introduction, categories, vote }, index) => <ProductCard key={id + name} title={name} id={id} logo={logo} rank={index + 1} description={introduction} tags={categories.map(({ name }) => name)} comments={0} trend={vote?.score || 0} tagColorClass={""} onClick={(id) => console.log(id)} />)}
      </div>
    </section>
    <section className="px-6 py-5">
      <h3 className="text-2xl font-bold my-3">
        <span>🧪</span>
        <span className="text-white">Testing Versions</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {alphaBetaProject.map(({ name, id, logo, introduction, categories, vote }, index) => <ProductCard key={id + name} title={name} id={id} logo={logo} rank={index + 1} description={introduction} tags={categories.map(({ name }) => name)} comments={0} trend={vote?.score || 0} tagColorClass={""} onClick={(id) => console.log(id)} />)}
      </div>
    </section>
    <section className="px-6 py-5">
      <h3 className="text-2xl font-bold my-3">
        <span>💡</span>
        <span className="text-purple-400">Inspiration Pool</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {ideaProject.map(({ name, id, logo, introduction, categories, vote }, index) => <ProductCard key={id + name} title={name} id={id} logo={logo} rank={index + 1} description={introduction} tags={categories.map(({ name }) => name)} comments={0} trend={vote?.score || 0} tagColorClass={""} onClick={(id) => console.log(id)} />)}
      </div>
    </section>
  </main>
}