import { Link } from 'react-router-dom'
import contactInfo from '@/assets/images/other/contact-info.jpg'
import { Icon } from '@iconify/react'

const ContactInfo = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="relative size-full overflow-hidden rounded-xl">
              <img
                src={contactInfo}
                className="h-full w-full object-cover"
                alt="testimonial video"
              />
            </div>
          </div>
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-center gap-12 rounded-xl border p-10 text-center lg:py-20">
              <h4 className="text-2xl lg:max-w-4/5 lg:text-3xl">
                Business consulting agency Copora
              </h4>
              <p className="lg:max-w-2/5">Chicago HQ Estica Cop. Macomb, MI 48042</p>
              <a
                href="mailto:contact@copora.com"
                className="text-default-950 hover:text-default-400 underline transition duration-300"
              >
                contact@copora.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-default-950 mt-5 rounded-xl p-5 text-white lg:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-6">
              <h3 className="text-xl text-white md:text-2xl">Contact on:</h3>
              <a
                href="mailto:contact@copora.com"
                className="text-white/80 transition hover:text-white"
              >
                contact@copora.com
              </a>
              <span className="hidden h-6 w-px bg-white/30 md:block"></span>
              <a href="tel:+1234567890" className="text-white/80 transition hover:text-white">
                +123 456 7890
              </a>
            </div>

            <div className="flex items-center gap-5">
              <h3 className="text-xl text-white md:text-2xl">Social media:</h3>
              <div className="flex items-center gap-4">
                <Link
                  to=""
                  className="text-default-400 transition duration-300 hover:-translate-y-1"
                >
                  <Icon icon="lucide:facebook" className="size-5" />
                </Link>
                <Link
                  to=""
                  className="text-default-400 transition duration-300 hover:-translate-y-1"
                >
                  <Icon icon="lucide:instagram" className="size-5" />
                </Link>
                <Link
                  to=""
                  className="text-default-400 transition duration-300 hover:-translate-y-1"
                >
                  <Icon icon="lucide:linkedin" className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
