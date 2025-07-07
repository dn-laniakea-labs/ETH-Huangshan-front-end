"use client"

import { FC, useEffect, useState } from "react";
import makeBlockie from 'ethereum-blockies-base64';
import { ProjectCard } from "../ProjectCard";
import { cyrb53 } from "@/util/cyrb53";
import { SessionUser } from "@/types/sessionUser";
import { Project } from "@/types/project.type";
import { PageDto } from "@/types/base.type";
import { User } from "@/types/user.type";

export interface MeComponentProps extends SessionUser { }

export const MeComponent: FC<MeComponentProps> = ({ id }) => {
  const [userInfo, setUserInfo] = useState<User>();
  const [projectList, setProjectList] = useState<Project[]>();
  const [total, setTotal] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const [limitNum, setLimitNum] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const userInfoRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/user/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      const info: User = await userInfoRes.json();
      setUserInfo(info);

      const projectListRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project?filters={"ownerId":${id}}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      const projectListPage: PageDto<Project> = await projectListRes.json();
      setProjectList(projectListPage.data);
      setTotal(projectListPage.total);
      setPageNum(projectListPage.page);
      setLimitNum(projectListPage.limit);
    })()
  }, [])

  const loadMore = async (pageNum = 1) => {
    const projectListRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project?page=${pageNum}&filters={"ownerId":${id}}&`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      }
    })
    const projectListPage: PageDto<Project> = await projectListRes.json();
    setProjectList((oldProjectList) => [...(oldProjectList || []), ...projectListPage.data]);
    setTotal(projectListPage.total);
    setPageNum(projectListPage.page);
    setLimitNum(projectListPage.limit);
  }


  return <main className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-x-3 mb-10">
          <div className="shrink-0">
            <img className="shrink-0 size-16 rounded-full" src={makeBlockie("0x" + cyrb53(userInfo?.name || ""))} alt="Avatar" />
          </div>

          <div className="grow">
            <h1 className="text-white text-lg font-medium">
              {userInfo?.name}
            </h1>
            <p className="text-sm text-gray-200 dark:text-neutral-400">
              {userInfo?.description}
            </p>
          </div>
        </div>

        <h4 className="text-white text-xl font-bold mb-3">Create</h4>

        {projectList?.map(({
          id, logo, name, introduction, categories
        }) => <div key={id} className="my-3">
            <ProjectCard id={id} logo={logo || makeBlockie("0x" + cyrb53((userInfo?.name || "") + (userInfo?.id || "") || ""))} name={name} introduction={introduction} categories={categories.map(({ id, name }) => ({ id: id!, name }))} upVotes={0} />
          </div>
        )}

        {total > limitNum * pageNum && <div>
          <button className="bg-purple-700 w-full hover:bg-purple-400 py-2.5 rounded-xl text-white hover:text-gray-200" onClick={() => loadMore(pageNum + 1)}>
            Load More...
          </button>
        </div>}
      </div>
    </div>
  </main>
}
