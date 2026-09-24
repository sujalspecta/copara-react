import { Link } from 'react-router-dom'
import ctaBg from '@/assets/images/other/cta-bg.jpg'
import user1 from '@/assets/images/users/1.jpg'
import user2 from '@/assets/images/users/2.jpg'
import user3 from '@/assets/images/users/3.jpg'
import user4 from '@/assets/images/users/4.jpg'
import { Icon } from '@iconify/react'

type UserType = {
  image: StaticImageData
  alt: string
  name: string
}

const usersData: UserType[] = [
  {
    image: user1,
    alt: 'avatar',
    name: 'Alex Carry',
  },
  {
    image: user2,
    alt: 'avatar-1',
    name: 'Amanda Lewis',
  },
  {
    image: user3,
    alt: 'avatar-1',
    name: 'David Hassan',
  },
  {
    image: user4,
    alt: 'avatar-1',
    name: 'Elena Novak',
  },
]

const ContactDetails = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-between gap-12 rounded-xl border p-5 pb-12 text-center md:items-start lg:p-10 lg:pb-16 lg:text-start">
              <h4 className="text-2xl lg:text-3xl">
                Let’s build something that moves your business forward
              </h4>
              <div className="inline-flex items-center gap-3">
                <div className="text-sm">Talk to our experts</div>
                <Icon icon="tabler:circle-plus" className="size-5" />
                <div className="flex -space-x-2">
                  {usersData.map((user, index) => (
                    <div key={index} className="group relative inline-block">
                      <img
                        src={user.image}
                        alt={user.alt}
                        className="size-9 rounded-full object-cover transition duration-300 hover:scale-110"
                      />
                      <div className="bg-default-100 pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 rounded px-2.5 py-1 text-xs font-medium whitespace-nowrap opacity-0 shadow-sm transition duration-200 group-hover:opacity-100">
                        {user.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl">
              <img src={ctaBg} className="h-full w-full object-cover" alt="testimonial video" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link
                  to="/contact"
                  className="group text-primary inline-flex items-center justify-center rounded-lg bg-white px-10 py-5 font-medium text-nowrap transition-all"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
