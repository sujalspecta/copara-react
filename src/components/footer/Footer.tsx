import cs1 from '@/assets/images/case-studies/1.webp'
import cs2 from '@/assets/images/case-studies/2.webp'
import cs3 from '@/assets/images/case-studies/3.webp'
import cs4 from '@/assets/images/case-studies/4.webp'
import logoSmLight from '@/assets/images/logo-sm-light.svg'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

type RecentWorkType = {
  image: StaticImageData
  link: string
}

const recentWorksData: RecentWorkType[] = [
  { image: cs1, link: '' },
  { image: cs2, link: '' },
  { image: cs3, link: '' },
  { image: cs4, link: '' },
]

const Footer = () => {
  return (
    <footer className="bg-default-950 pt-20 pb-10 md:pt-8 lg:pt-27.5">
      <div className="container">
        <div className="grid gap-7.5 lg:grid-cols-9 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex h-full flex-wrap items-start justify-between gap-12 md:flex-row lg:flex-col">
              <img src={logoSmLight} className="h-10 w-[37.03px]" alt="logo" />
              <div className="space-y-3">
                <h3 className="text-default-400 text-sm">Say hello to us!</h3>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-default-400 block text-white transition duration-300"
                >
                  hello@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="hover:text-default-400 block text-white transition duration-300"
                >
                  +123 456 7890
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div>
              <div className="grid gap-7.5 lg:grid-cols-2">
                <div className="flex flex-wrap items-start gap-2.5 md:flex-row lg:flex-col">
                  <h3 className="text-default-400 mb-1.5 w-full text-sm">Pages</h3>
                  <Link
                    to="/home"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/service-detail"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Service Detail
                  </Link>
                  <Link
                    to="/blog"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/blog-details"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Blog Details
                  </Link>
                </div>
                <div className="flex flex-wrap items-start gap-2.5 md:flex-row lg:flex-col">
                  <h3 className="text-default-400 mb-1.5 w-full text-sm">Other Pages</h3>
                  <Link
                    to="/case-studies"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/error-404"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Error 404
                  </Link>
                  <Link
                    to="/error-401"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Password Protected
                  </Link>
                  <Link
                    to="https://unifato.com/"
                    target="_blank"
                    className="hover:text-default-400 inline-flex text-white transition duration-300"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-7.5 flex flex-wrap items-center gap-6 lg:mt-15 lg:gap-10">
              <h3 className="text-xl text-white">Stay informed.</h3>
              <form className="border-default-800 flex grow overflow-hidden rounded-lg border">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="placeholder-default-500 focus:bg-default-800 h-14 w-full border-0 bg-transparent px-5 py-2.5 text-white transition duration-400 outline-none"
                />
                <button
                  type="submit"
                  className="border-default-800 hover:text-default-950 flex items-center justify-center border-s px-6 transition duration-400 hover:bg-white"
                >
                  <Icon icon="tabler:arrow-up-right" className="size-6" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-medium text-white">Recent works</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-2">
              {recentWorksData.map((work, index) => (
                <Link
                  key={index}
                  to={work.link}
                  className="group relative overflow-hidden rounded-lg lg:h-27.5"
                >
                  <img
                    src={work.image}
                    className="size-full object-cover transition duration-400 group-hover:scale-105"
                    alt="work"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      icon="tabler:circle-arrow-right-filled"
                      className="size-6 text-white opacity-0 transition duration-300 group-hover:-rotate-30 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-default-800 my-10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-4">
            <Link to="" className="text-default-400 transition duration-300 hover:-translate-y-1">
              <Icon icon="lucide:facebook" className="size-5" />
            </Link>
            <Link to="" className="text-default-400 transition duration-300 hover:-translate-y-1">
              <Icon icon="lucide:instagram" className="size-5" />
            </Link>
            <Link to="" className="text-default-400 transition duration-300 hover:-translate-y-1">
              <Icon icon="lucide:linkedin" className="size-5" />
            </Link>
          </div>
          <p className="text-center text-sm text-white md:text-right">
            Develop by{' '}
            <a href="https://unifato.com/" target="_blank" className="underline">
              Unifato
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
