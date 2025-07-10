// components/ComingSoon.tsx
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-4">We&apos;re Launching Soon!</h1>
        <p className="text-lg text-gray-400 mb-8">
          We&apos;re working hard to bring you something amazing. Sign up below to stay in the loop.
        </p>

        {/* 计时器或其他内容可以放在这里 */}
        <p className="text-sm text-gray-100">Thank you for your interest!</p>
      </div>
    </div>
  );
};

export default ComingSoon;