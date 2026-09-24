import ctaBg from '@/assets/images/other/cta-bg.jpg'

const MissionVision = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-between gap-12 rounded-xl border p-5 pb-12 text-center md:items-start lg:p-10 lg:pb-16 lg:text-start">
              <h2 className="mb-12.5 text-2xl">Our Mission</h2>
              <p className="text-default-950">
                To empower businesses of all sizes to unlock their full potential through strategic
                insight, tailored consulting, and measurable results. We are committed to delivering
                innovative solutions that drive sustainable growth, operational excellence, and
                long-term success for our clients.
              </p>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl">
              <img src={ctaBg} className="h-full w-full object-cover" alt="testimonial video" />
              <div className="absolute inset-5 rounded-lg bg-white p-5 lg:inset-10">
                <div className="space-y-7.5">
                  <h2 className="text-2xl">Our Vision</h2>
                  <p className="text-default-950">
                    We aim to lead the way in reshaping how businesses grow, adapt, and lead in a
                    changing world.
                  </p>
                  <ul
                    role="list"
                    className="text-default-950 list-inside list-disc space-y-2.5 ps-2"
                  >
                    <li>Global impact</li>
                    <li>Innovative thinking</li>
                    <li>Empowering growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
