import { Link } from 'react-router-dom'
import blog2 from '@/assets/images/blog/2.webp'
import blog3 from '@/assets/images/blog/3.webp'
import blog4 from '@/assets/images/blog/4.webp'
import { Icon } from '@iconify/react'

type OtherBlogType = {
  image: StaticImageData
  category: string
  date: string
  title: string
  link: string
}

const otherBlogsData: OtherBlogType[] = [
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
]

const OtherBlogs = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-5 gap-4 text-center md:mb-7.5 lg:mb-15">
          <h2 className="text-4xl lg:text-[44px]">Other Blogs</h2>
        </div>
        <div className="mb-10 grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {otherBlogsData.map((blog, index) => (
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
      </div>
    </section>
  )
}

export default OtherBlogs
