import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import Card from '@/components/Card'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of the projects
          </p>
        </div>
        <div className="container py-12">
          <div className="mx-auto mt-4 grid max-w-[26rem] grid-cols-1 gap-6 px-4 sm:mt-5 sm:max-w-[52.5rem] sm:grid-cols-2 sm:px-6 md:mt-7 lg:max-w-7xl lg:grid-cols-3 lg:gap-y-8 lg:px-8 xl:gap-x-8">
            {projectsData.map((d) => (
              <a href={d.href} target={'_blank'}>
                  <div className="group dark:highlight-white/5 relative rounded-3xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700/50">
                <div className="p-6">
                    <img
                      src={d.imgSrc}
                      className="relative aspect-[672/494] transform overflow-hidden rounded-md bg-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.08)] dark:bg-slate-700"
                    />
                    <div className="mt-6 flex flex-wrap items-center">
                      <h2 className="dark:group-hover:text-sky-40 flex flex-row text-sm font-semibold leading-6 text-slate-900 group-hover:text-sky-500 dark:text-white">
                        {d.title}
                        <svg
                          class="h-6 w-6 flex-none opacity-0 group-hover:opacity-100"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                            stroke="#0EA5E9"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </h2>
                      <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
