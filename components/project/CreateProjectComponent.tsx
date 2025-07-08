'use client';

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Select } from "../Select";
import { useEffect, useState } from "react";
import { LucideTag } from "../icons/lucide-tag";
import { LucideCode } from "../icons/lucide-code";
import { LucideZap } from "../icons/lucide-zap";
import { LucideGlobe } from "../icons/lucide-globe";
import { Category } from "@/types/category.type";
import { UploadLogo } from "../UploadLogo";
import _ from 'lodash';

type Inputs = {
  name: string, //
  logo: string, // 
  categories?: number,
  stage?: number,
  introduction: string, //
  website: string, //
  screenshot: Array<string>,
  video: string,
  functionality: string, //
  // coreTeam: Array<{
  //   id: 0,
  //   name: string,
  //   position: string,
  //   background: string,
  //   photo: string,
  //   social: string,
  // }>,
  social: string, //
}

export const CreateProjectComponent = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);
  const [stageOptions, setStageOptions] = useState<Category[]>([]);
  const [logoUrl, setLogoUrl] = useState<string>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/category`, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      const categoryList: Category[] = await res.json();
      const { category, stage } = _.groupBy(categoryList, "type");
      setCategoryOptions(category || []);
      setStageOptions(stage || []);
      console.log(category, stage);
    })()
  }, [])


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(() => true);
    const { logo, stage, categories, ...others } = data;
    if (!stage || !categories) return;
    const imageFormData = new FormData();
    imageFormData.append('file', logo);
    const imageRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/upload/image`, {
      method: 'POST',
      body: imageFormData,
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${localStorage.accessToken}`
      }
    })
    const { url } = await imageRes.json();

    const createProjectRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project`, {
      method: 'POST',
      body: JSON.stringify({
        ...others,
        logo: url,
        stage: [{ id: +stage }],
        categories: [{ id: +categories }],
        video: "",
      }),
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": `Bearer ${localStorage.accessToken}`
      }
    })
    const project = await createProjectRes.json();

    setIsSubmitting(() => false);
    location.href = `/project/${project.id}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-100 bg-clip-text text-transparent mb-4">
            Submit Your Project
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Share your innovative project with the community. Fill out the form below to get featured on our platform.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* 基本信息 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <LucideGlobe className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your project name"
                  {...register("name", {
                    required: "Project Name required",
                  })}
                />
                {errors.name?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brief Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Provide a concise overview of your project, its purpose, and key benefits..."
                  {...register("introduction", {
                    required: "Brief Description required",
                  })}
                />
                {errors.introduction?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.introduction.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="https://your-project.com"
                  {...register("website")}
                />
                {errors.website?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.website.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Social Link
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Twitter, Discord, Telegram, etc."
                  {...register("social")}
                />
                {errors.social?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.social.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Logo Upload
                </label>
                <Controller
                  name="logo"
                  control={control}
                  rules={{ required: "Logo required" }}
                  render={({ field: { onChange, value } }) => <UploadLogo onChange={(file, url) => { onChange(file); setLogoUrl(url) }} value={logoUrl} />}
                />
                {errors.logo?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.logo.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* 分类与标签 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <LucideTag className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Categories and Tags</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="categories"
                  control={control}
                  rules={{ required: "Category required" }}
                  render={({ field: { onChange, value } }) => <Select options={categoryOptions.map(({ id, name }) => ({ id: id + "", name }))} onChange={onChange} selectedId={(value ?? '') + ""} placeholder="Please select category." />}
                />
                {errors.categories?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.categories.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Stage <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="stage"
                  control={control}
                  rules={{ required: "Stage required" }}
                  render={({ field: { onChange, value } }) => <Select options={stageOptions.map(({ id, name }) => ({ id: id + "", name }))} onChange={onChange} selectedId={(value ?? '') + ""} placeholder="Please select stage." />}
                />
                {errors.stage?.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.stage.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* 功能说明 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <LucideCode className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Function Description</h2>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Functionality <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="What are the core features and use cases of your product? Describe the main functionalities, target audience, and unique value proposition..."
                {...register("functionality", {
                  required: "Functionality required",
                })}
              />
              {errors.functionality?.message && (
                <p className="mt-2 text-sm text-red-600">{errors.functionality.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Publishing...
                </>
              ) : (
                <>
                  <LucideZap className="w-5 h-5 mr-3" />
                  Publish
                </>
              )}
            </button>
          </div>
        </form>
      </div >
    </div >
  );
}
