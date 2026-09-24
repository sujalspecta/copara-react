import { Link } from 'react-router-dom'
import client1 from '@/assets/images/client/1.svg'
import client2 from '@/assets/images/client/2.svg'
import client3 from '@/assets/images/client/3.svg'
import client4 from '@/assets/images/client/4.svg'
import client5 from '@/assets/images/client/5.svg'
import client6 from '@/assets/images/client/6.svg'
import emoji1 from '@/assets/images/other/emoji-1.svg'
import emoji2 from '@/assets/images/other/emoji-2.svg'
import service1 from '@/assets/images/service/1.jpg'
import service2 from '@/assets/images/service/2.jpg'
import service3 from '@/assets/images/service/3.jpg'
import service4 from '@/assets/images/service/4.jpg'

type ServiceType = {
  image: StaticImageData
  title: string
  url: string
}

const clientData: StaticImageData[] = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
]

const serviceData: ServiceType[] = [
  {
    image: service1,
    title: 'Business strategy',
    url: '/service-detail',
  },
  {
    image: service2,
    title: 'Process optimization',
    url: '/service-detail',
  },
  {
    image: service3,
    title: 'Financial advisory',
    url: '/service-detail',
  },
  {
    image: service4,
    title: 'Marketing Research',
    url: '/service-detail',
  },
]

const AboutCompany = () => {
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container mb-12.5 lg:max-w-[70%]!">
        <p className="text-default-950 mb-12.5 text-center text-lg font-medium md:text-xl">
          Companies who rely on our expertise
        </p>
        <div className="relative flex w-full flex-nowrap gap-5 overflow-hidden md:gap-16">
          <div className="from-default-100 absolute inset-0 end-auto z-10 hidden w-25 bg-linear-to-tr from-18% to-transparent lg:flex"></div>
          <div className="infinite-scroll-inverse inline-flex gap-5 md:gap-16">
            {clientData.map((client, index) => (
              <div key={index} className="inline-flex max-w-full min-w-20 md:min-w-32">
                <img src={client} alt="Logo" className="h-5 max-w-full" />
              </div>
            ))}
          </div>
          <div className="infinite-scroll-inverse inline-flex gap-5 md:gap-16">
            {clientData.map((client, index) => (
              <div key={index} className="inline-flex max-w-full min-w-20 md:min-w-32">
                <img src={client} alt="Logo" className="h-5 max-w-full" />
              </div>
            ))}
          </div>
          <div className="from-default-100 absolute inset-0 start-auto z-10 hidden w-25 bg-linear-to-l from-18% to-transparent lg:flex"></div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <div className="mb-15 lg:mb-25">
            <div className="text-default-950 inline-flex flex-wrap justify-center gap-1 rounded bg-white p-2 text-xs shadow md:gap-2.5 md:rounded-full md:px-4 md:py-1.25 md:text-sm">
              <span>Strategy</span>
              <img src={emoji1} alt="Icon" className="decorative-icon" />
              <span>We help businesses grow, adapt, and lead.</span>
              <img src={emoji2} alt="Icon" className="decorative-icon" />
              <span>Growth</span>
            </div>
          </div>
          <div className="mb-15 lg:mb-12.5">
            <div className="text-default-950 mb-2 text-sm">What we offer</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
              Our core consulting services
            </h2>
            <p className="mx-auto lg:max-w-2/5">
              We provide tailored consulting solutions to help businesses overcome challenges, seize
              opportunities, and achieve sustainable growth.
            </p>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2 md:gap-7.5 lg:grid-cols-4">
            {serviceData.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Link to={service.url} className="absolute inset-0 z-1"></Link>
                <img
                  src={service.image}
                  alt="Image"
                  className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-5 text-center">
                  <div className="text-default-950 inline-flex rounded bg-white px-4 py-2">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
