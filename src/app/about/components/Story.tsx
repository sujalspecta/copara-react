import { Link } from 'react-router-dom'
import aboutImage2 from '@/assets/images/other/about-image-2.jpg'
import sign from '@/assets/images/other/sign.svg'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

import { useEffect, useRef } from 'react'

const Story = () => {
  const videoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const lg = lightGallery(videoRef.current, {
         licenseKey: 'GPLv3', 
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
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container mb-12.5">
        <div className="mb-12.5">
          <h5 className="text-3xl md:text-4xl lg:text-5xl">
            Built on expertise, driven by results - Get to know us
          </h5>
        </div>
        <div className="grid grid-cols-2 gap-7.5 lg:grid-cols-2 lg:gap-30">
          <div className="our-story-detail-item">
            <p className="text-default-800 mb-7.5 text-xl">
              We didn’t start with a big boardroom — just a big idea: to make business consulting
              more human, strategic, and impact-driven. Founded by professionals who’ve lived
              through both corporate complexity and startup chaos, we understand what it takes to
              scale smart, pivot fast, and stay competitive.
            </p>
            <p>
              From helping early-stage ventures define their roadmap to guiding enterprises through
              digital transformation, our journey has always been about one thing — unlocking
              clarity and measurable growth for every client. Today, we’re proud to be the go-to
              partner for businesses ready to think bigger and move faster, backed by strategy that
              works.We follow a strategic four-step approach designed to drive measurable results.
              From deep discovery to ongoing optimization, every step is focused on moving your
              business forward with clarity, efficiency, and impact.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="our-story-image-wrap">
                <img src={aboutImage2} alt="Image" className="rounded-lg" />
              </div>
              <div className="relative size-full overflow-hidden rounded-lg">
                <video
                  loop
                  autoPlay
                  muted
                  className="-z-10 flex h-full w-full rounded-lg bg-[url('/videos/video-poster.jpg')] bg-cover bg-center object-cover"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  <source src="/videos/video.webm" type="video/webm" />
                </video>
                <Link
                  ref={videoRef}
                  to="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde"
                  data-toggle="video"
                  className="bg-default-950/50 absolute inset-0 flex size-full items-center justify-center rounded-lg text-center"
                >
                  <div className="text-white">Play Reel</div>
                </Link>
              </div>
            </div>
            <div className="mt-7.5">
              <img src={sign} alt="Signature" className="signature" />
              <div className="mt-2.5">
                <h3 className="mb-2.5 text-lg">Carlos Mendes</h3>
                <div className="text-default-600">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
