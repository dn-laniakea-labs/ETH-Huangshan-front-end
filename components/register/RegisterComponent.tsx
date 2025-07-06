'use client';

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  uid: string,
  description: string,
  avatar: string,
  email: string,
  password: string,
}

export const RegisterComponent = () => {
  const [errorMsg, setErrorMsg] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try{
      console.log(data);
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      })
      console.log(res);
      const user = await res.json();
  
      if (!res?.ok) {
        return setErrorMsg(user.message);
      }
  
      return window.location.href = '/sign-in';
    } catch(error: any) {
      console.log(error);
    }
  }

  return (<main id="container" className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-white font-bold sm:text-3xl">
            Sign Up
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
                User Id
                <span className="text-red-500">*</span>
              </label>
              <input type="text" id="hs-feedback-post-comment-name-1" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full user Id"
                {...register("uid", { required: "Id required", pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Id can only contain uppercase and lowercase letters, numbers, and underscores' } })} />

              {errors.uid?.message && (
                <p className="text-red-500 " role="alert">{errors.uid.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">Description</label>
              <textarea id="hs-feedback-post-comment-textarea-1" rows={3} className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" placeholder="Full Description" {...register("description")}></textarea>
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Email address
                <span className="text-red-500">*</span>
              </label>
              <input type="email" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full Email address" {...register("email", { required: "Email required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'The email address does not comply with the rules.' } })} />
              {errors.email?.message && (
                <p className="text-red-500 " role="alert">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Password
                <span className="text-red-500">*</span>
              </label>
              <input type="password" id="hs-feedback-post-comment-email-1" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Password" {...register("password", { required: "Password required" })} />
              {errors.password?.message && (
                <p className="text-red-500 " role="alert">{errors.password.message}</p>
              )}
            </div>
            {errorMsg && (
              <p className="text-red-500 " role="alert">{errorMsg}</p>
            )}

            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700 focus:outline-hidden focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>)
}
