import { Link } from 'react-router-dom'
import aboutImage from '@/assets/images/other/about-image.jpg'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

import { useEffect, useRef } from 'react'

type StatType = {
  label: string
  value: string
  description: string
}

const statsData: StatType[] = [
  {
    label: 'Business transformed',
    value: '260+',
    description: 'Helping companies grow and perform better.',
  },
  {
    label: 'Client satisfaction rate',
    value: '95%',
    description: 'Trusted and recommended by our clients.',
  },
  {
    label: 'Revenue growth generated',
    value: '$150M',
    description: 'Delivering measurable financial impact.',
  },
]

const Services = () => {
  const videoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const lg = lightGallery(videoRef.current, {
        selector: 'this',
        plugins: [lgVideo],
        download: false,
        youTubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
      })
      return () => {
        lg.destroy()
      }
    }
  }, [])

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-50">
          {statsData.map((stat, index) => (
            <div key={index}>
              <span className="bg-default-100 inline-block rounded-md px-2.5 py-1 text-sm">
                {stat.label}
              </span>
              <div className="mt-4 flex items-start gap-4">
                <h3 className="text-3xl">{stat.value}</h3>
                <p>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-default-200 my-5 md:my-12.5 lg:my-17.5" />
        <div className="grid gap-7.5 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-10 md:gap-25 lg:gap-50">
            <div>
              <div className="text-default-950 mb-2.5 text-sm">About Copora</div>
              <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
                Driven by insight. <br /> Focused on results
              </h1>
              <p className="text-default-600">
                We provide tailored consulting solutions to help businesses overcome challenges,
                seize opportunities, and achieve sustainable growth.
              </p>
              <div className="mt-11 inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
                <Link
                  to="/contact"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      More about us
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      More about us
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-auto">
              <div className="relative h-[116px] w-[215px] overflow-hidden rounded-lg">
                <video
                  loop
                  autoPlay
                  muted
                  className="absolute -inset-full -z-10 m-auto flex h-full w-full rounded-lg bg-[url('/videos/video-poster.jpg')] bg-cover bg-center object-cover"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  <source src="/videos/video.webm" type="video/webm" />
                </video>
                <Link
                  ref={videoRef}
                  to="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde"
                  data-toggle="video"
                  className="bg-default-950/20 absolute inset-0 flex size-full items-center justify-center text-center"
                >
                  <div className="text-white">Play Reel</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:h-100 lg:h-full">
            <img src={aboutImage} alt="About image" className="size-full rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
