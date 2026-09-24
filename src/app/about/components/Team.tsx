import team1 from '@/assets/images/team/1.jpg'
import team2 from '@/assets/images/team/2.jpg'
import team3 from '@/assets/images/team/3.jpg'
import team4 from '@/assets/images/team/4.jpg'
import team5 from '@/assets/images/team/5.jpg'
import { Icon } from '@iconify/react'

const Team = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2.5 text-sm">Our team</div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">Our team of problem solvers</h1>
          <p className="text-default-600 mx-auto max-w-1/3">
            Our diverse team of experienced consultants, analysts, and industry specialists work
            together to deliver real results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          <div className="group relative flex flex-col items-center overflow-hidden rounded-lg">
            <img
              src={team1}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              alt="member"
            />
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5">
              <h3 className="text-lg">Rachel Kim</h3>
              <div className="text-default-700 mb-2">Chief Strategy Officer</div>
              <div className="-mb-9 flex gap-4 transition-all duration-500 group-hover:mb-0">
                <Icon icon="lucide:facebook" className="size-4.5" />
                <Icon icon="lucide:instagram" className="size-4.5" />
                <Icon icon="lucide:linkedin" className="size-4.5" />
              </div>
            </div>
          </div>
          <div className="group relative flex flex-col items-center overflow-hidden rounded-lg">
            <img
              src={team2}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              alt="member"
            />
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5">
              <h3 className="text-lg">Hannah Brooks</h3>
              <div className="text-default-700 mb-2">Chief Strategy Officer</div>
              <div className="-mb-9 flex gap-4 transition-all duration-500 group-hover:mb-0">
                <Icon icon="lucide:facebook" className="size-4.5" />
                <Icon icon="lucide:instagram" className="size-4.5" />
              </div>
            </div>
          </div>
          <div className="group relative flex flex-col items-center overflow-hidden rounded-lg">
            <img
              src={team3}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              alt="member"
            />
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5">
              <h3 className="text-lg">Amira Chen</h3>
              <div className="text-default-700 mb-2">Operations Consultant</div>
              <div className="-mb-9 flex gap-4 transition-all duration-500 group-hover:mb-0">
                <Icon icon="lucide:facebook" className="size-4.5" />
                <Icon icon="lucide:linkedin" className="size-4.5" />
              </div>
            </div>
          </div>
          <div className="group relative flex flex-col items-center overflow-hidden rounded-lg">
            <img
              src={team4}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              alt="member"
            />
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5">
              <h3 className="text-lg">David Hassan</h3>
              <div className="text-default-700 mb-2">Business Analyst</div>
              <div className="-mb-9 flex gap-4 transition-all duration-500 group-hover:mb-0">
                <Icon icon="lucide:facebook" className="size-4.5" />
                <Icon icon="lucide:instagram" className="size-4.5" />
                <Icon icon="lucide:linkedin" className="size-4.5" />
              </div>
            </div>
          </div>
          <div className="group relative flex flex-col items-center overflow-hidden rounded-lg">
            <img
              src={team5}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              alt="member"
            />
            <div className="absolute bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5">
              <h3 className="text-lg">Elena Novak</h3>
              <div className="text-default-700 mb-2">Market Research Lead</div>
              <div className="-mb-9 flex gap-4 transition-all duration-500 group-hover:mb-0">
                <Icon icon="lucide:instagram" className="size-4.5" />
                <Icon icon="lucide:linkedin" className="size-4.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
