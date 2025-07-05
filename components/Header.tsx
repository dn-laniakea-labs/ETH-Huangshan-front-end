const menuList = [
  {
    title: "Launches",
    link: "#",
  },
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Resources",
    link: "#",
  },
  {
    title: "Jobs",
    link: "#",
  },
];

export const Header = () => {
  return <header
    className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-zinc-900 text-sm py-3 dark:bg-neutral-800 border-b-1 border-neutral-600"
  >
    <nav
      className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
    >
      <a
        className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
        href="#"
      >
        <div className="flex items-center space-x-4">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            UPIO
          </div>
          {/* <span className="hidden sm:block text-sm text-gray-500">AI产品生态平台 </span> */}
        </div>
      </a>
      <div className="sm:order-3 flex items-center gap-x-2">
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-1 border-gray-200 bg-zinc-900 text-white shadow-2xs hover:bg-gray-600 focus:outline-hidden focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          Register
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-purple-700 bg-purple-700 text-white shadow-2xs hover:bg-purple-800 focus:outline-hidden focus:bg-purple-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          Log in
        </button>
        <button
          type="button"
          className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-purple-700 bg-purple-700 text-white shadow-2xs hover:bg-purple-800 focus:outline-hidden focus:bg-purple-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          id="hs-navbar-alignment-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar-alignment"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-navbar-alignment"
        >
          <svg
            className="hs-collapse-open:hidden shrink-0 size-4"
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
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line
              x1="3"
              x2="21"
              y1="12"
              y2="12"
            ></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
          <svg
            className="hs-collapse-open:block hidden shrink-0 size-4"
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Toggle</span>
        </button>
      </div>
      <div
        id="hs-navbar-alignment"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        aria-labelledby="hs-navbar-alignment-collapse"
      >
        <div
          className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5"
        >
          {
            menuList.map(({ title, link }) => (
              <a
                key={title + link}
                className="font-medium text-gray-400 hover:text-white focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href={link}
              >
                {title}
              </a>
            ))
          }
        </div>
      </div>
    </nav>
  </header>
}
