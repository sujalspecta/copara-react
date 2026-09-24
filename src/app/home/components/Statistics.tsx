import { Link } from 'react-router-dom'
import cs1 from '@/assets/images/case-studies/1.webp'
import cs2 from '@/assets/images/case-studies/2.webp'
import cs3 from '@/assets/images/case-studies/3.webp'
import cs4 from '@/assets/images/case-studies/4.webp'
import { Icon } from '@iconify/react'

const Statistics = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-7.5">
          <div>
            <div className="text-default-950 text-sm">Recent case studies</div>
          </div>
          <div>
            <Link to="/contact" className="text-default-950 flex items-center gap-1 underline">
              <div>Let's work together</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>

        <hr className="border-default-200 my-4 md:my-10 lg:my-12.5" />

        <div className="hs-accordion rounded-2xl">
          <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 py-4 text-start md:py-10 lg:py-12.5">
            <div className="space-y-2.5">
              <div className="border-default-200 inline-flex rounded-md border px-2.5 py-1.5 text-sm/none font-medium">
                Healthcare
              </div>
              <h3 className="text-base md:text-3xl">
                Digital transformation for a healthcare provider
              </h3>
            </div>
            <div className="relative flex size-4.5 items-center justify-center">
              <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
              <i className="bg-default-950 flex h-0.5 w-4.5"></i>
            </div>
          </button>
          <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
            <div className="mb-12.5 grid gap-25 lg:grid-cols-7">
              <div className="lg:col-span-3">
                <div className="flex flex-col justify-between gap-10 md:gap-25 lg:gap-50">
                  <p className="text-default-600">
                    A large healthcare network partnered with our team to digitize patient
                    management systems, streamline appointment scheduling, and improve internal
                    workflows.
                  </p>
                  <div className="mt-auto">
                    <div className="bg-default-100 flex items-center justify-between gap-2.5 rounded-lg p-2 ps-4">
                      <div className="flex gap-1.25">
                        <div className="text-sm">Less time spent on manual tasks</div>
                        <div className="text-default-950 font-medium">50%</div>
                      </div>
                      <Link
                        to="/contact"
                        className="group bg-primary inline-flex items-center justify-center rounded-lg px-4.5 py-3 font-medium text-white transition-all"
                      >
                        <span className="relative block overflow-hidden">
                          <span className="block duration-[1.125s] group-hover:-translate-y-7">
                            See details
                          </span>
                          <span className="absolute inset-s-0 top-7 duration-[1.125s] group-hover:top-0">
                            See details
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img src={cs1} alt="Case Study 1" className="size-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-default-200" />

        <div className="hs-accordion rounded-2xl">
          <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 py-4 text-start md:py-10 lg:py-12.5">
            <div className="space-y-2.5">
              <div className="border-default-200 inline-flex rounded-md border px-2.5 py-1.5 text-sm/none font-medium">
                Retail
              </div>
              <h3 className="text-base md:text-3xl">
                International expansion strategy for a retail brand
              </h3>
            </div>
            <div className="relative flex size-4.5 items-center justify-center">
              <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
              <i className="bg-default-950 flex h-0.5 w-4.5"></i>
            </div>
          </button>
          <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
            <div className="mb-12.5 grid gap-25 lg:grid-cols-7">
              <div className="lg:col-span-3">
                <div className="flex flex-col justify-between gap-10 md:gap-25 lg:gap-50">
                  <p className="text-default-600">
                    A European retail brand collaborated with our consultants to expand into Middle
                    Eastern and Southeast Asian markets using localized marketing strategies.
                  </p>
                  <div className="bg-default-100 flex items-center justify-between rounded-lg p-2 ps-4">
                    <div className="flex gap-1.25">
                      <div className="text-sm">Cut in operational admin load</div>
                      <div className="text-default-950 font-medium">30%</div>
                    </div>
                    <Link
                      to="/contact"
                      className="group bg-primary rounded-lg px-4.5 py-3 font-medium text-white"
                    >
                      <span className="relative block overflow-hidden">
                        <span className="block duration-[1.125s] group-hover:-translate-y-7">
                          See details
                        </span>
                        <span className="absolute inset-s-0 top-7 duration-[1.125s] group-hover:top-0">
                          See details
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img src={cs2} alt="Case Study 2" className="size-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-default-200" />

        <div className="hs-accordion rounded-2xl">
          <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 py-4 text-start md:py-10 lg:py-12.5">
            <div className="space-y-2.5">
              <div className="border-default-200 inline-flex rounded-md border px-2.5 py-1.5 text-sm/none font-medium">
                Website Design
              </div>
              <h3 className="text-base md:text-3xl">
                Corporate website for a green energy company
              </h3>
            </div>
            <div className="relative flex size-4.5 items-center justify-center">
              <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
              <i className="bg-default-950 flex h-0.5 w-4.5"></i>
            </div>
          </button>
          <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
            <div className="mb-12.5 grid gap-25 lg:grid-cols-7">
              <div className="lg:col-span-3">
                <div className="flex flex-col justify-between gap-10 md:gap-25 lg:gap-50">
                  <p className="text-default-600">
                    We designed and developed a modern website for a renewable energy consulting
                    firm to showcase sustainability initiatives and global projects.
                  </p>
                  <div className="bg-default-100 flex items-center justify-between rounded-lg p-2 ps-4">
                    <div className="flex gap-1.25">
                      <div className="text-sm">Decrease in backend workload</div>
                      <div className="text-default-950 font-medium">37%</div>
                    </div>
                    <Link
                      to="/contact"
                      className="group bg-primary rounded-lg px-4.5 py-3 font-medium text-white"
                    >
                      <span className="relative block overflow-hidden">
                        <span className="block duration-[1.125s] group-hover:-translate-y-7">
                          See details
                        </span>
                        <span className="absolute inset-s-0 top-7 duration-[1.125s] group-hover:top-0">
                          See details
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img src={cs3} alt="Case Study 3" className="size-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-default-200" />

        <div className="hs-accordion rounded-2xl">
          <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 py-4 text-start md:py-10 lg:py-12.5">
            <div className="space-y-2.5">
              <div className="border-default-200 inline-flex rounded-md border px-2.5 py-1.5 text-sm/none font-medium">
                SaaS Product
              </div>
              <h3 className="text-base md:text-3xl">
                Product redesign for a SaaS analytics platform
              </h3>
            </div>
            <div className="relative flex size-4.5 items-center justify-center">
              <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
              <i className="bg-default-950 flex h-0.5 w-4.5"></i>
            </div>
          </button>
          <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
            <div className="mb-12.5 grid gap-25 lg:grid-cols-7">
              <div className="lg:col-span-3">
                <div className="flex flex-col justify-between gap-10 md:gap-25 lg:gap-50">
                  <p className="text-default-600">
                    Our team redesigned the user interface of a SaaS analytics platform to improve
                    usability, performance, and real-time reporting capabilities.
                  </p>
                  <div className="bg-default-100 flex items-center justify-between rounded-lg p-2 ps-4">
                    <div className="flex gap-1.25">
                      <div className="text-sm">Increase in user engagement</div>
                      <div className="text-default-950 font-medium">42%</div>
                    </div>
                    <Link
                      to="/contact"
                      className="group bg-primary rounded-lg px-4.5 py-3 font-medium text-white"
                    >
                      <span className="relative block overflow-hidden">
                        <span className="block duration-[1.125s] group-hover:-translate-y-7">
                          See details
                        </span>
                        <span className="absolute inset-s-0 top-7 duration-[1.125s] group-hover:top-0">
                          See details
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img src={cs4} alt="Case Study 4" className="size-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7.5 grid">
          <Link
            to="/case-studies"
            className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
          >
            <span className="relative block overflow-hidden">
              <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                View all case studies
              </span>
              <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                View all case studies
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Statistics
