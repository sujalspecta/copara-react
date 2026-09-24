import { Link } from 'react-router-dom'
import blog1 from '@/assets/images/blog/1.webp'
import blog2 from '@/assets/images/blog/2.webp'
import blog3 from '@/assets/images/blog/3.webp'
import blog4 from '@/assets/images/blog/4.webp'
import { Icon } from '@iconify/react'

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
    title: '5 growth strategies every modern business should know',
    link: '/blog-details',
  },
  {
    image: blog4,
    category: 'Growth',
    date: 'June 20, 2025',
    title: 'Digital transformation for service-based businesses',
    link: '/blog-details',
  },
]

const Blog = () => {
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-15 flex flex-wrap justify-between gap-7.5 lg:mb-12.5">
          <div>
            <div className="text-default-950 mb-2 text-sm">Our blog</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">Insights & Ideas</h2>
            <p className="lg:max-w-3/4">
              Our blog delivers fresh perspectives on business growth, innovation, leadership, and
              operational efficiency
            </p>
          </div>
          <div className="place-content-end text-end">
            <Link
              to="/blog"
              className="group bg-primary inline-flex items-center justify-center rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  See all blog
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  See all blog
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-2.5 md:grid-cols-2 lg:gap-6">
          {blogsData.map((blog, index) => (
            <Link
              key={index}
              to={blog.link}
              className="group grid items-center gap-2.5 rounded-xl bg-white p-2 transition lg:grid-cols-4 lg:gap-4 lg:pe-6"
            >
              <div className="w-full overflow-hidden rounded-lg md:h-75 lg:h-full">
                <img
                  src={blog.image}
                  className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                  alt="blog"
                />
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-end justify-between gap-5 p-4">
                  <div>
                    <div className="text-default-500 mb-3 flex items-center gap-3">
                      <span className="bg-default-100 rounded-md px-2 py-1 text-xs font-medium">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
