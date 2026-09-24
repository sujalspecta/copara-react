import { Link } from 'react-router-dom'
import service2 from '@/assets/images/service/2.jpg'
import service3 from '@/assets/images/service/3.jpg'
import service4 from '@/assets/images/service/4.jpg'

type ServiceType = {
  image: StaticImageData
  title: string
  link: string
}

const servicesData: ServiceType[] = [
  { image: service2, title: 'Process Optimization', link: '/service-detail' },
  { image: service3, title: 'Financial Advisory', link: '/service-detail' },
  { image: service4, title: 'Market Research', link: '/service-detail' },
]

const OtherServices = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <h2 className="mb-12.5 text-3xl md:text-4xl lg:text-5xl">Other services</h2>
        <div className="grid grid-cols-2 gap-7.5 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="group relative h-100 w-full overflow-hidden rounded-lg">
              <Link to={service.link} className="absolute inset-0 z-1"></Link>
              <img
                src={service.image}
                alt="Image"
                className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
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
    </section>
  )
}

export default OtherServices
