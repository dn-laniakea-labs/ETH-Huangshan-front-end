import { FC } from "react";
import { Carousel } from "../Carousel";
import { TeamMember } from "../TeamMember";
import Image from "next/image";
import { CreateCategoryDto } from "@/types/createCategoryDto.type";
import makeBlockie from "ethereum-blockies-base64";
import { cyrb53 } from "@/util/cyrb53";

export interface ProjectComponentProps {
  name: string;
  logo: string;
  introduction: string;
  categories: CreateCategoryDto[];
  website: string;
  screenshot: string[];
  functionality: string;
}

export const ProjectComponent: FC<ProjectComponentProps> = ({
  name, logo, introduction, categories, website, screenshot, functionality
}) => {
  const memberList = [
    {
      photo: "/favicon.svg",
      name: "张三",
      position: "CEO & 创始人",
      link: "baidu.com",
      background:
        "张三在计算机科学领域拥有超过15年的经验，专注于软件开发和人工智能技术的研究与应用。他曾在多家知名科技公司担任高级软件工程师和技术主管，负责领导多个大型项目的设计与实施，特别是在自然语言处理和机器学习领域取得了显著成就。",
    },
  ];

  const imageList = [
    {
      link: "/astro.svg",
      alt: "",
    },
    {
      link: "/favicon.svg",
      alt: "",
    },
  ];

  return <main className="bg-zinc-900">
    <section className="pt-30 pb-16 px-8 sm:px-16 lg:px-32">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <Image
          alt={name}
          src={logo || makeBlockie("0x" + cyrb53(name || ""))}
          className="h-48 w-48 object-contain border-2 border-violet-50 shadow-lg shadow-violet-400/50"
          width={192}
          height={192}
        />

        <div className="ml-0 sm:ml-8 mt-6 sm:mt-0 w-full">
          <h1 className="text-2xl font-bold text-white">{name}</h1>
          <p className="my-2 leading-4 text-gray-300">
            {introduction}
          </p>
          <div>
            <span className="font-bold text-gray-300">分类：</span>
            <ul className="inline">
              {categories.map(({id, name}) => 
                <li className="inline" key={id}>
                  <a className="text-gray-300 hover:text-violet-400">{name}</a>
                </li>
              )}
            </ul>
          </div>
          {website && <div>
            <a
              href={website}
              className="inline-block bg-gray-300 px-6 py-3 text-gray-600 rounded-lg mt-2 hover:text-violet-500 hover:bg-violet-300"
            >
              立即访问 &gt;
            </a>
          </div>}
        </div>
      </div>

      {screenshot?.length > 0 && <div className="mt-10 mb-6">
        <Carousel imageList={screenshot.map((item, index) => ({link: item, alt: name + " " + index}))} />
      </div>}

      <div className="mt-6">
        <h3 className="text-xl font-bold text-white">核心功能</h3>

        <p className="text-gray-200">{functionality}</p>
      </div>

      {/* <h3 className="text-xl font-bold mt-6 text-white">顾问团</h3>
      <div>
        {
          memberList.map((item) => (
            <div className="grid grid-cols-12 p-3" key={JSON.stringify(item)}>
              <TeamMember {...item} />
            </div>
          ))
        }
      </div>


      <h3 className="text-xl font-bold mt-6 text-white">团队成员</h3>
      <div>
        {
          memberList.map((item) => (
            <div className="grid grid-cols-12 p-3" key={JSON.stringify(item)}>
              <TeamMember {...item} />
            </div>
          ))
        }
      </div> */}
    </section>
  </main>
}
