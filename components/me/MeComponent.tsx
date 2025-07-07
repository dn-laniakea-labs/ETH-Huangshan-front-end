import { FC } from "react";
import makeBlockie from 'ethereum-blockies-base64';
import { ProjectCard } from "../ProjectCard";
import { cyrb53 } from "@/util/cyrb53";
import { SessionUser } from "@/types/sessionUser";
import { Project } from "@/types/project.type";
import { PageDto } from "@/types/base.type";

export interface MeComponentProps extends SessionUser { }

export const MeComponent: FC<MeComponentProps> = async ({ id }) => {
  const userInfoRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/user/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    }
  })
  const userInfo = await userInfoRes.json();

  const projectListRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project?filters={"ownerId":${userInfo.id}}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    }
  })
  const projectList: PageDto<Project> = await projectListRes.json();

  return <main className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-x-3 mb-10">
          <div className="shrink-0">
            <img className="shrink-0 size-16 rounded-full" src={makeBlockie("0x" + cyrb53(userInfo.name || ""))} alt="Avatar" />
          </div>

          <div className="grow">
            <h1 className="text-white text-lg font-medium">
              {userInfo.name}
            </h1>
            <p className="text-sm text-gray-200 dark:text-neutral-400">
              {userInfo.description}
            </p>
          </div>
        </div>

        <h4 className="text-white text-xl font-bold mb-3">Create</h4>

        {projectList.data.map(({
          id, logo, name, introduction, categories
        }) => <div key={id} className="my-3">
            <ProjectCard id={id} logo={logo || makeBlockie("0x" + cyrb53(userInfo.name + userInfo.id || ""))} name={name} introduction={introduction} categories={categories.map(({id, name}) => ({id: id!, name}))} upVotes={0} />
          </div>
        )}
      </div>
    </div>
  </main>
}
