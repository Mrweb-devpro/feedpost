"use client";

import Logo from "./Logo";

export default function LoadingOverlay({
  children,
  showCanelButton = false,
}: {
  children?: React.ReactNode;
  showCanelButton?: boolean;
}) {
  return (
    <div className="absolute top-0 left-0 h-full w-screen bg-stone-700/50 overflow-y-hidden">
      <div className="shimmer w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-10 bg-white max-w-10/12 md:w-2/5 px-12 py-20 rounded-2xl">
          <span className="text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              <Logo className="w-35 mx-auto" />
              Almost there. Setting things up…
            </h2>
          </span>
          {children}
          <Spinner />
          {showCanelButton && (
            <button
              type="button"
              className="bg-red-500 px-3 py-2 text-white rounded-lg"
            >
              Cancel Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const Spinner = () => {
  return (
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  );
};
