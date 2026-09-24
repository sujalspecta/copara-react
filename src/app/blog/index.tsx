import blog1 from '@/assets/images/blog/1.webp'
import blog2 from '@/assets/images/blog/2.webp'
import blog3 from '@/assets/images/blog/3.webp'
import blog4 from '@/assets/images/blog/4.webp'
import blog5 from '@/assets/images/blog/5.webp'
import blog6 from '@/assets/images/blog/6.webp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'

type BlogType = {
  image: StaticImageData
  category: string
  date: string
  title: string
  link: string
}

const blogsData: BlogType[] = [
  {
    image: blog1,
    category: 'Strategy',
    date: 'June 20, 2025',
    title: 'Why your company needs a strategic roadmap in 2025',
    link: '/blog-details',
  },
  {
    image: blog2,
    category: 'Planning',
    date: 'June 20, 2025',
    title: 'From goals to KPIs: Turning vision into measurable success',
    link: '/blog-details',
  },
  {
    image: blog3,
    category: 'Marketing',
    date: 'June 20, 2025',
    title: '5 Growth strategies every modern business should know',
    link: '/blog-details',
  },
  {
    image: blog4,
    category: 'Growth',
    date: 'June 20, 2025',
    title: 'Digital transformation for service-based businesses',
    link: '/blog-details',
  },
  {
    image: blog5,
    category: 'Strategy',
    date: 'June 20, 2025',
    title: 'Customer experience revolution: How service businesses can win',
    link: '/blog-details',
  },
  {
    image: blog6,
    category: 'Marketing',
    date: 'June 20, 2025',
    title: 'Agility in action: How service businesses adapt and thrive',
    link: '/blog-details',
  },
]

const Index = () => {
  return (
    <>
      <PageMeta title="Blog" />
      <Navbar />
      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container">
          <div className="mb-12.5 text-center">
            <h1 className="mb-2.5 text-4xl md:text-5xl lg:text-[56px]">Our case studies</h1>
          </div>
          <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.map((blog, index) => (
              <div
                key={index}
                className="group bg-default-100 relative overflow-hidden rounded-lg p-2"
              >
                <Link to={blog.link} className="absolute inset-0 z-10"></Link>
                <div className="overflow-hidden rounded">
                  <img
                    src={blog.image}
                    className="size-full rounded object-cover transition-all duration-300 group-hover:scale-105"
                    alt="blog"
                  />
                </div>
                <div className="flex items-end justify-between gap-5 p-4">
                  <div>
                    <div className="text-default-500 mb-3 flex items-center gap-3">
                      <span className="border-default-200 rounded-md border px-2 py-1 text-xs font-medium">
                        {blog.category}
                      </span>
                      <span className="text-sm">{blog.date}</span>
                    </div>
                    <h3 className="text-xl">{blog.title}</h3>
                  </div>
                  <div className="grow">
                    <Icon
                      icon="tabler:arrow-narrow-right"
                      className="size-6 -rotate-45 transition duration-300 group-hover:rotate-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav className="mt-12.5 grid grid-cols-3 items-center gap-5 md:gap-10">
            <div>
              <button
                disabled
                className="bg-primary flex w-full items-center justify-center gap-2 rounded-lg px-10 py-4.5 text-center text-base font-medium text-white opacity-0 transition-all"
              >
                <Icon icon="tabler:chevron-left" />
                Previous
              </button>
            </div>
            <div className="text-center">1 / 2</div>
            <div>
              <button className="bg-primary flex w-full items-center justify-center gap-2 rounded-lg px-10 py-4.5 text-center text-base font-medium text-white transition-all">
                Next
                <Icon icon="tabler:chevron-right" />
              </button>
            </div>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
