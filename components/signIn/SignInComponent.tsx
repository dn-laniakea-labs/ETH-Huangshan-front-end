'use client';

import { getSession, signIn } from "next-auth/react";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string,
  password: string,
}

export const SignInComponent: FC = () => {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: "/"
    })

    if (result?.error) {
      setError(() => (result.error || ""));
    } else {
      const { user } = (await getSession()) || {};
      console.log("session?.user:", user, result);
      localStorage.accessToken = user?.accessToken;
      localStorage.refreshToken = user?.refreshToken;
      // Redirect to a protected page or dashboard
      window.location.href = '/';
    }
  }

  return <main id="container" className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-white font-bold sm:text-3xl">
            Sign In
          </h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-neutral-900 border border-neutral-700 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 sm:mb-8">
              <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium text-white">
                Username
                <span className="text-red-500">*</span>
              </label>
              <input type="text" id="hs-feedback-post-comment-name-1" className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-500 text-neutral-400 placeholder-neutral-400 focus:ring-neutral-600" placeholder="Full user Id"
                {...register("username", { required: "Username required", pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Username can only contain uppercase and lowercase letters, numbers, and underscores' } })} />
              {errors.username?.message && (
                <p className="text-red-500" role="alert">{errors.username.message}</p>
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
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700 focus:outline-hidden focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
}