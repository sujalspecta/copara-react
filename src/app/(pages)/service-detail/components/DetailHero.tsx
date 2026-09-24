import { Link } from 'react-router-dom'
import service1 from '@/assets/images/service/1.jpg'

const offersData: string[] = [
  'Strategic planning',
  'Goal alignment',
  'Customized solutions',
  'Industry analysis',
  'Competitive landscape',
  'Business model innovation',
  'Long-term vision',
  'Risk and scenario planning',
  'Diversification strategy',
]

const DetailHero = () => {
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <div className="grid gap-25 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col gap-7.5 lg:gap-15">
              <div>
                <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
                  Business Strategy
                </h1>
                <p>
                  We help you define a clear strategic direction, align your goals, and build a
                  resilient business model that's ready for tomorrow. Our business strategy services
                  are designed to give you the foresight to anticipate change, the frameworks to
                  manage complexity, and the confidence to act decisively.
                </p>
                <div className="mt-11 inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
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
              <div className="mt-auto">
                <h2 className="mb-2.5 text-xl">What we offer</h2>
                <div className="flex flex-wrap items-center gap-4">
                  {offersData.map((offer, index) => (
                    <div
                      key={index}
                      className="bg-default-100 text-default-950 rounded px-4 py-2.5"
                    >
                      {offer}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="hero-image-one-wrap">
              <img
                className="size-full rounded-lg object-cover"
                src={service1}
                alt="Business Strategy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailHero
