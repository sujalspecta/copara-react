import { Link } from 'react-router-dom'
import aboutBg from '@/assets/images/other/about-bg.jpg'
import aboutImage1 from '@/assets/images/other/about-image-1.jpg'

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container max-w-315!">
        <div className="mb-12.5 text-center">
          <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
            Building better businesses with smart strategy
          </h1>
          <p className="mx-auto md:max-w-1/2">
            We're a forward-thinking consulting agency helping businesses grow smarter, scale
            faster, and lead with clarity.
          </p>
        </div>
        <div className="mb-2.5">
          <img src={aboutImage1} className="size-full rounded-lg" alt="About" />
        </div>
        <div className="grid gap-4 md:grid-cols-10">
          <div className="md:col-span-3">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-cover bg-center p-6 text-white"
              style={{ backgroundImage: `url(${aboutBg})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 space-y-3">
                <span className="inline-flex rounded-md bg-white/20 px-3 py-1 text-xs backdrop-blur">
                  Business transformed
                </span>
                <div>
                  <h2 className="mb-8 text-4xl text-white">260+</h2>
                  <p className="mt-2 text-white">Helping companies grow and perform better.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="bg-default-950 flex h-full flex-col justify-between rounded-xl p-6">
              <h3 className="text-2xl leading-snug text-white">
                24/7 support to keep your{' '}
                <span className="text-default-400">business moving forward</span>
              </h3>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group text-primary inline-flex items-center justify-center gap-5 rounded-xl bg-white px-4.5 py-3 font-medium transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      Get in touch
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      Get in touch
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-default-100 flex h-full flex-col justify-between rounded-xl p-6">
              <span className="w-fit rounded-md bg-white px-3 py-1 text-xs">
                Years for experiences
              </span>
              <div className="mt-6">
                <h3 className="text-default-900 text-4xl font-semibold">6+</h3>
                <p className="text-default-600 mt-2">Years helping businesses thrive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
