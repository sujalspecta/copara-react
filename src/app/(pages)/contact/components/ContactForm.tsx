import contactBg from '@/assets/images/other/contact-bg.jpg'

const ContactForm = () => {
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <h1 className="text-default-950 mb-15 text-4xl md:text-5xl lg:text-[56px]">
          Have a business challenge? We're ready to help
        </h1>
        <div className="grid gap-7.5 md:gap-12.5 lg:grid-cols-5 lg:gap-17.5">
          <div className="lg:col-span-3">
            <div className="mb-10">
              Whether you’re ready to scale, solve a business challenge, or explore a partnership -
              we're here to help.
            </div>
            <div className="mb-7.5 grid gap-7.5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm">
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="mb-1.5 block text-sm">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  className="bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2"
                />
              </div>
              <div>
                <label htmlFor="select-field" className="mb-1.5 block text-sm">
                  Services
                </label>
                <select
                  id="select-field"
                  name="select-field"
                  className="bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2"
                >
                  <option value="">Select one...</option>
                  <option value="Business Strategy">Business Strategy</option>
                  <option value="Process optimization">Process optimization</option>
                  <option value="Financial advisory">Financial advisory</option>
                  <option value="Market research">Market research</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="mb-1.5 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                className="bg-default-100 focus:border-default-200 flex w-full items-center rounded-lg border-transparent px-5 py-2"
                rows={8}
              ></textarea>
            </div>
            <div className="lg:-mb-14">
              <button
                type="submit"
                className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-5 py-3.5 font-medium text-white transition-all"
              >
                <span className="relative block overflow-hidden">
                  <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    Submit
                  </span>
                  <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    Submit
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="group size-full overflow-hidden rounded-lg">
              <img
                className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                src={contactBg}
                alt="contact background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
