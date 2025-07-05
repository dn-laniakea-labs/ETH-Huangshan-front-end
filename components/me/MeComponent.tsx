import { FC } from "react";
import makeBlockie from 'ethereum-blockies-base64';
import { ProjectCard } from "../ProjectCard";

export const MeComponent: FC<{}> = () => {
  return <main className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-x-3 mb-10">
          <div className="shrink-0">
            <img className="shrink-0 size-16 rounded-full" src={makeBlockie("0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8")} alt="Avatar" />
          </div>

          <div className="grow">
            <h1 className="text-white text-lg font-medium">
              Eliana Garcia
            </h1>
            <p className="text-sm text-gray-200 dark:text-neutral-400">
              Graphic Designer, Web designer/developer
            </p>
          </div>
        </div>

        <h4 className="text-white text-xl font-bold mb-3">Create</h4>

        <ProjectCard id={5} logo="/astro.svg" name="海螺AI2" introduction="怕怕怕怕怕怕怕怕怕怕怕怕怕" categories={[{ id: 1, name: "8888" }, { id: 2, name: "99999999999999" }]} upVotes={5} />
      </div>
    </div>
  </main>
}
