import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const FinalCta = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="text-center">
          <div className="mx-auto mb-12.5 lg:w-3/5">
            <h2 className="mb-2.5 text-2xl md:text-4xl lg:text-5xl">
              Take the first step toward smarter business decisions today
            </h2>
            <p>Reach out and let's start a conversation that moves your business forward.</p>
          </div>
          <div className="inline-flex items-center gap-7.5">
            <Link
              to="/contact"
              className="group bg-primary inline-flex items-center justify-center rounded-lg px-10 py-5 font-medium text-white transition-all"
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
            <Link to="/contact" className="text-default-950 flex items-center gap-1 underline">
              <div>Contact sales</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
