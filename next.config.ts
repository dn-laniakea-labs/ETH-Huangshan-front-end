import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://cdn.pixabay.com/**'),
      new URL('https://image.stevending1st.cc/**')
    ],
  },
};

export default nextConfig;
