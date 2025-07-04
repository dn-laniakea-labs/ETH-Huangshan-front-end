import { FC } from "react";

export interface IamgeItem {
  link: string;
  alt?: string;
}

export interface CarouselProps {
  imageList: IamgeItem[];
}

export const Carousel: FC<CarouselProps> = ({ imageList }) => {
  return <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' className="relative">
    <div className="hs-carousel flex flex-col md:flex-row gap-2">
      <div
        className="md:order-2 relative grow overflow-hidden min-h-96 bg-white rounded-lg"
      >
        <div
          className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          {
            imageList.map(({ link, alt }) => (
              <div className="hs-carousel-slide" key={link+alt}>
                <div className="flex justify-center h-full p-6">
                  <img src={link} alt={alt || ''} width="100%" />
                </div>
              </div>
            ))
          }
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </div>

      <div className="md:order-1 flex-none">
        <div
          className="hs-carousel-pagination max-h-96 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto"
        >
          {
            imageList.map(({ link, alt }) => (
              <div key={link + alt} className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
                <div className="flex justify-center items-center text-center size-full p-2">
                  <img src={link} alt={alt || ""} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
}

