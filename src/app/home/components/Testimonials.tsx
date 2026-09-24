import { Link } from 'react-router-dom'
import user4 from '@/assets/images/users/4.jpg'
import { Icon } from '@iconify/react'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

import { useEffect, useRef } from 'react'

const Testimonials = () => {
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
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2.5 text-sm">Testimonials</div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
            Proven impact, shared experiences
          </h1>
          <p className="text-default-600 mx-auto mb-7.5 lg:max-w-1/3">
            From startups to enterprises, our clients share how our strategic consulting helped them
            achieve lasting success.
          </p>
          <div className="inline-flex items-center gap-2">
            <Icon icon="tabler:star-filled" className="size-6 text-yellow-300" />
            <Icon icon="tabler:star-filled" className="size-6 text-yellow-300" />
            <Icon icon="tabler:star-filled" className="size-6 text-yellow-300" />
            <Icon icon="tabler:star-filled" className="size-6 text-yellow-300" />
            <Icon icon="tabler:star-filled" className="size-6 text-yellow-300" />
            <div className="ms-2">450+ reviews</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-10">
          <div className="lg:col-span-3">
            <div className="bg-default-950 flex h-full flex-col justify-between rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-1.5 text-lg text-white">Amanda Lewis</h4>
                  <p className="text-default-400 text-sm">Director of Strategy</p>
                </div>
                <p className="text-white">
                  Our company was growing fast, but our culture couldn’t keep pace.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap justify-between gap-12">
                <div>
                  <h3 className="text-4xl font-semibold text-white">18%</h3>
                  <p className="text-default-100">Reduced costs</p>
                </div>
                <div>
                  <h3 className="text-4xl font-semibold text-white">50%</h3>
                  <p className="text-default-100">Boosting productivity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="h-full w-full object-cover"
                alt="testimonial video"
                width={400}
                height={300}
              />
              <Link
                ref={videoRef}
                to="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde"
                data-toggle="video"
                className="absolute inset-s-1/2 bottom-6 flex -translate-x-1/2 items-center gap-2 rounded bg-white px-4 py-2 shadow"
              >
                <span className="font-medium">Watch a review</span>
                <Icon icon="tabler:player-play-filled" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <div className="border-default-200 flex h-full flex-col justify-between rounded-xl border p-6">
              <div className="mb-6 flex items-center gap-3">
                <img src={user4} className="size-12 rounded-full object-cover" alt="author" />
                <div>
                  <h4 className="mb-1 font-medium">Amanda Lewis</h4>
                  <p className="text-default-500 text-sm">Director of Strategy</p>
                </div>
              </div>
              <p className="text-default-600 leading-relaxed">
                Within the first three months, we saw a 35% boost in our sales performance and
                streamlined several underperforming areas of our operation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12.5">
          <div className="bg-default-100 flex items-center justify-between gap-2.5 rounded-lg p-2 md:ps-6">
            <div className="font-medium">
              Let's discuss your business goals - schedule your 20-minute consultation now.
            </div>
            <Link
              to="/contact"
              className="group text-primary inline-flex items-center justify-center rounded-lg bg-white px-10 py-5 font-medium text-nowrap transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  Let's talk
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  Let's talk
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
