import { Link } from 'react-router-dom'
import workStep from '@/assets/images/other/work-step.jpg'

const Process = () => {
  return (
    <section className="bg-default-950 py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-25 lg:grid-cols-7">
          <div className="lg:col-span-3">
            <div className="relative size-full overflow-hidden rounded-lg md:h-100 lg:h-full">
              <Link to="/service-detail" className="absolute inset-0 z-1"></Link>
              <img src={workStep} alt="Image" className="size-full rounded-lg object-cover" />
              <div className="absolute inset-x-5 bottom-5 text-center">
                <div className="text-default-950 inline-block rounded bg-white px-4 py-2">
                  Want to know what's possible?{' '}
                  <Link to="/contact-us" className="text-body-color underline">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-10 md:gap-25 lg:gap-37.5">
              <div>
                <div className="mb-2.5 text-sm text-white">How we work</div>
                <h1 className="mb-5 text-3xl text-white md:text-4xl lg:text-5xl">
                  Smart steps to business growth
                </h1>
                <p className="text-default-400">
                  We follow a strategic four-step approach designed to drive measurable results.
                  From deep discovery to ongoing optimization, every step is focused on moving your
                  business forward with clarity, efficiency, and impact.
                </p>
              </div>
              <div className="mt-auto">
                <div className="Fborder-b border-default-800">
                  <nav className="flex flex-wrap justify-between gap-3 md:gap-x-6" role="tablist">
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 active relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-understand"
                      data-hs-tab="#tab-pane-understand"
                      aria-controls="tab-pane-understand"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      Understand
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-strategize"
                      data-hs-tab="#tab-pane-strategize"
                      aria-controls="tab-pane-strategize"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      Strategize
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-execute"
                      data-hs-tab="#tab-pane-execute"
                      aria-controls="tab-pane-execute"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      Execute
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-optimize"
                      data-hs-tab="#tab-pane-optimize"
                      aria-controls="tab-pane-optimize"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      Optimize
                    </button>
                  </nav>
                </div>
                <div className="mt-12.5">
                  <div id="tab-pane-understand" role="tabpanel" aria-labelledby="tab-understand">
                    <p className="text-default-400">
                      We begin by listening closely to your challenges and goals. Through research
                      and deep business analysis, we uncover insights. This foundation shapes every
                      strategy we build moving forward.
                    </p>
                  </div>
                  <div
                    id="tab-pane-strategize"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-strategize"
                  >
                    <p className="text-default-400">
                      Strategize helps teams turn ideas into action with smart planning tools,
                      real-time collaboration, and data-driven insights. Empowers growing businesses
                      with tailored strategies to scale, compete, and thrive in fast-moving markets.
                    </p>
                  </div>
                  <div
                    id="tab-pane-execute"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-execute"
                  >
                    <p className="text-default-400">
                      Execute streamlines team workflows so you can focus less on planning and more
                      on progress. Execute helps dev teams ship code faster, safer, and smarter with
                      streamlined CI/CD pipelines.
                    </p>
                  </div>
                  <div
                    id="tab-pane-optimize"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-optimize"
                  >
                    <p className="text-default-400">
                      We're a results-driven agency helping brands grow through strategy, design,
                      and digital innovation. A full-service marketing agency delivering bold ideas,
                      data-backed strategies, and measurable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
