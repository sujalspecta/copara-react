import { Link } from 'react-router-dom'
import aboutBg from '@/assets/images/other/about-bg.jpg'
import heroImage1 from '@/assets/images/other/hero-image-1.jpg'
import heroImage2 from '@/assets/images/other/hero-image-2.jpg'
import officeDubai from '@/assets/images/other/office-dubai.jpg'
import officeParis from '@/assets/images/other/office-paris.jpg'
import user5 from '@/assets/images/users/5.jpg'

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <div className="grid gap-7.5 md:gap-16 lg:grid-cols-2 lg:gap-25">
          <div className="flex h-full flex-col gap-7.5 lg:gap-15">
            <div>
              <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
                Driving business growth through expert strategy
              </h1>

              <p>
                Unlock your company's full potential with expert guidance, tailored solutions, and
                proven results from our seasoned consultants.
              </p>

              <div className="mt-11 inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
                <Link
                  to="/contact"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      See all case studies
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      See all case studies
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between gap-2.5">
              <div className="lg:w-3/4">
                <div className="text-default-700 mb-2.5">Firm of the Year 2025</div>
                <p className="text-primary">
                  Helping businesses thrive by providing expert guidance in business planning.
                </p>
              </div>

              <div>
                <div className="text-default-950 mb-1.5">Based in</div>

                <div className="flex gap-2.5">
                  <div className="group relative">
                    <img src={officeDubai} alt="Image" className="rounded" />
                    <div className="bg-default-100 absolute inset-s-0 -bottom-2 w-full translate-y-full rounded px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Dubai
                    </div>
                  </div>
                  <div className="group relative">
                    <img src={officeParis} alt="Image" className="rounded" />
                    <div className="bg-default-100 absolute inset-s-0 -bottom-2 w-full translate-y-full rounded px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Paris
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2">
            <div className="hero-image-one-wrap">
              <img className="size-full rounded-lg object-cover" src={heroImage1} alt="Image" />
            </div>

            <div className="space-y-2.5">
              <div className="bg-primary rounded-lg p-6">
                <p className="mb-25 text-white">
                  The consultants helped us shape a sustainable HR strategy that emphasized
                  performance, retention, and employee well-being.
                </p>

                <div className="flex items-center gap-4">
                  <img src={user5} loading="lazy" alt="Image" className="size-11.5 rounded-full" />

                  <div className="space-y-1.5">
                    <div className="text-lg text-white">Sofia Grant</div>
                    <div className="text-default-400 text-sm">Director of Strategy</div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img src={aboutBg} alt="Image" className="rounded-lg object-cover" />

                <div className="absolute inset-0 m-7.5 text-center">
                  <div className="text-default-950 mb-2.5 rounded bg-white/50 px-4 py-3">
                    Build a business growth
                  </div>

                  <img src={heroImage2} alt="Image" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
