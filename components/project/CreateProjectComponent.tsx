'use client';

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Select } from "../Select";
import { SSRMdEditor } from "../SSRMdEditor";

type Inputs = {
  name: string,//
  logo: string,
  categories?: number,//
  introduction: string,//
  website: string,//
  screenshot: Array<string>,
  video: string,//不需要
  functionality: string, //
  // coreTeam: Array<{
  //   id: 0,
  //   name: string,
  //   position: string,
  //   background: string,
  //   photo: string,
  //   social: string,
  // }>,
  social: string,//
}

export const CreateProjectComponent = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return <main id="container" className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-white font-bold sm:text-3xl">
            Create Project
          </h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-neutral-900 border border-neutral-700 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium text-white">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input type="text" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full name" {...register("name", {
                required: "Name required",
              })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.message && (
                <p className="text-red-500 " role="alert">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Introduction
                <span className="text-red-500">*</span>
              </label>
              <textarea id="hs-feedback-post-comment-textarea-1" rows={3} className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" placeholder="Full introduction" {...register("introduction", { required: "Introduction required" })}></textarea>

              {errors.introduction?.message && (
                <p className="text-red-500 " role="alert">{errors.introduction.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Website
                <span className="text-red-500">*</span>
              </label>
              <input type="text" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full website" {...register("website", { required: "Website required" })}
              />
              {errors.website?.message && (
                <p className="text-red-500 " role="alert">{errors.website.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">Social</label>
              <input type="text" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full social" {...register("social")} />
              {errors.social?.message && (
                <p className="text-red-500 " role="alert">{errors.social.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Category
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="categories"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => <Select options={[{ id: '0', name: "0" }, { id: '1', name: "1" }]} onChange={onChange} selectedId={value + "" || ''} />}
              />
              {errors.categories?.message && (
                <p className="text-red-500 " role="alert">{errors.categories.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Functionality
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="functionality"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => 
                <SSRMdEditor onChange={onChange} value={value}/>}
              />
              {errors.functionality?.message && (
                <p className="text-red-500 " role="alert">{errors.functionality.message}</p>
              )}
            </div>

            

            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700 focus:outline-hidden focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
}
