import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { useEffect, useState } from 'react'

type AnimatedNumberProps = {
  value: number
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    let startTimestamp: number | null = null
    const startValue = displayValue
    const endValue = value

    if (startValue === endValue) return

    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / 300, 1)
      setDisplayValue(Math.floor(progress * (endValue - startValue) + startValue))
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [value])

  return <>{displayValue}</>
}

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-7.5 flex flex-wrap justify-between gap-7.5 lg:mb-12.5">
          <div>
            <div className="text-default-950 mb-2 text-sm">Pricing</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">Choose your growth plan</h2>
            <p className="lg:max-w-3/5">
              We offer flexible pricing models to fit businesses of all sizes - from startups to
              enterprises.
            </p>
          </div>
          <div className="place-content-end text-end">
            <Link to="/contact" className="text-default-950 flex items-center gap-1 underline">
              <div>Explore pricing</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="grid gap-7.5 lg:grid-cols-3">
          <div>
            <div className="border-default-200 flex h-full flex-col gap-7.5 rounded-xl border p-6">
              <h2 className="mb-2.5 text-3xl">Start your free discovery call</h2>
              <p className="mb-7.5">
                Ready to explore how our consulting solutions can help your business thrive?
              </p>
              <div>
                <Link
                  to="/contact"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-4.5 py-3 font-medium text-white transition-all"
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
              <div className="mt-auto flex items-center gap-4">
                <div className="bg-default-100 flex size-12.5 items-center justify-center rounded-full">
                  <Icon icon="tabler:mail" className="size-7" />
                </div>
                <div>
                  <h4 className="mb-1">Want to email us directly?</h4>
                  <a href="mailto:hello@example.com" className="text-default-500 text-sm">
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-default-100 rounded-lg p-5">
              <div className="mb-5 flex">
                <div className="rounded-lg bg-white p-1 transition">
                  <div className="flex flex-wrap justify-center gap-1">
                    <button
                      onClick={() => setIsYearly(false)}
                      className={`flex cursor-pointer items-center rounded-md px-2.5 py-1.5 text-sm transition ${!isYearly ? 'bg-default-100' : 'bg-white'}`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setIsYearly(true)}
                      className={`flex cursor-pointer items-center rounded-md px-2.5 py-1.5 text-sm transition ${isYearly ? 'bg-default-100' : 'bg-white'}`}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-7.5 lg:grid-cols-2">
                <div className="flex flex-col rounded-lg bg-white p-6">
                  <h3 className="mb-4 text-xl">Pro plan</h3>
                  <hr className="border-default-200 my-6" />
                  <div className="mb-7.5 flex items-end">
                    <h2 className="text-[26px] leading-none">
                      <span>$&nbsp;</span>
                      <span>
                        <AnimatedNumber value={isYearly ? 499 : 449} />
                      </span>
                    </h2>
                    <div>/month</div>
                  </div>
                  <Link
                    to="/contact"
                    className="group bg-primary inline-flex w-full items-center justify-center gap-5 rounded-lg px-4.5 py-2.5 font-medium text-white transition-all"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                        Get Started
                      </span>
                      <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                        Get Started
                      </span>
                    </span>
                  </Link>
                  <ul role="list" className="my-7.5 list-inside list-disc space-y-2.5">
                    <li>Initial business assessment</li>
                    <li>2 strategy sessions (1 hour each)</li>
                    <li>Competitor &amp; Market overview</li>
                    <li>Email support (up to 7 days post-session)</li>
                  </ul>
                  <p className="bg-default-100 mt-auto rounded px-2.5 py-1.5">
                    Best for: Market entry and early scaling
                  </p>
                </div>

                <div className="flex flex-col rounded-lg bg-white p-6">
                  <h3 className="mb-4 text-xl">Business plan</h3>
                  <hr className="border-default-200 my-6" />
                  <div className="mb-7.5 flex items-end">
                    <h2 className="text-[26px] leading-none">
                      <span>$&nbsp;</span>
                      <span>
                        <AnimatedNumber value={isYearly ? 1499 : 1304} />
                      </span>
                    </h2>
                    <div>/month</div>
                  </div>
                  <Link
                    to="/contact"
                    className="group bg-primary inline-flex w-full items-center justify-center gap-5 rounded-lg px-4.5 py-2.5 font-medium text-white transition-all"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                        Schedule a free consultation
                      </span>
                      <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                        Schedule a free consultation
                      </span>
                    </span>
                  </Link>
                  <ul role="list" className="my-7.5 list-inside list-disc space-y-2.5">
                    <li>Everything in starter plan</li>
                    <li>Monthly consulting (4 sessions/month)</li>
                    <li>Dedicated business strategist</li>
                    <li>Priority support via email &amp; chat</li>
                    <li>Quarterly progress review</li>
                  </ul>
                  <p className="bg-default-100 mt-auto rounded px-2.5 py-1.5">
                    Best for: Market entry and early scaling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
