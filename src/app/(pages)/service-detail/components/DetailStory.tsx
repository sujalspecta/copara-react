import { Link } from 'react-router-dom'
import detailsImage from '@/assets/images/service/details-image.jpg'

const DetailStory = () => {
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="grid gap-7.5 md:grid-cols-3 lg:gap-25">
          <div>
            <div className="size-full">
              <img src={detailsImage} alt="Image" className="size-full rounded-lg object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Strategy isn't just a plan - it's the foundation of sustainable success.
              </h2>
              <p>
                In a world of rapid disruption, shifting consumer behavior, and global competition,
                businesses that operate without a strategic compass risk falling behind. A
                well-crafted strategy provides clarity in chaos, focus in complexity, and direction
                in moments of uncertainty.
              </p>
            </div>
            <ul role="list" className="mb-10 list-inside list-disc space-y-2.5">
              <li>Prioritize what matters most</li>
              <li>Make smarter, data-driven decisions</li>
              <li>Allocate resources efficiently and intentionally</li>
              <li>Define a long-term vision grounded in reality</li>
            </ul>
            <Link
              to="/contact"
              className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  Get started now
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  Get started now
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-7.5 md:mt-12.5 lg:mt-15">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-37.5">
            <div>
              <h3 className="mb-2.5 text-xl">Discovery &amp; Audit</h3>
              <p className="text-sm">Understand your business, culture, and current state</p>
            </div>
            <div>
              <h3 className="mb-2.5 text-xl">Insight &amp; Analysis</h3>
              <p className="text-sm">
                Market trends, internal diagnostics, and opportunity mapping
              </p>
            </div>
            <div>
              <h3 className="mb-2.5 text-xl">Strategic Direction</h3>
              <p className="text-sm">Define goals, value proposition, and differentiation</p>
            </div>
            <div>
              <h3 className="mb-2.5 text-xl">Roadmap Creation</h3>
              <p className="text-sm">Step-by-step execution plan with measurable milestones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailStory
