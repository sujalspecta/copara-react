import cs1 from '@/assets/images/case-studies/1.webp'
import cs2 from '@/assets/images/case-studies/2.webp'
import cs3 from '@/assets/images/case-studies/3.webp'
import cs4 from '@/assets/images/case-studies/4.webp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'

type CaseStudyType = {
  image: StaticImageData
  category: string
  title: string
  link: string
}

const caseStudiesData: CaseStudyType[] = [
  {
    image: cs1,
    category: 'Financial',
    title: 'Market entry strategy for a fintech startup',
    link: '',
  },
  {
    image: cs2,
    category: 'Financial',
    title: 'Digital transformation for a healthcare provider',
    link: '',
  },
  {
    image: cs3,
    category: 'Financial',
    title: 'International expansion for a retail',
    link: '',
  },
  {
    image: cs4,
    category: 'Website Design',
    title: 'Website for a green energy consulting firm',
    link: '',
  },
]

const Index = () => {
  return (
    <>
      <PageMeta title="Case Studies" />
      <Navbar />
      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container">
          <div className="mb-12.5 text-center">
            <h1 className="mb-2.5 text-4xl md:text-5xl lg:text-[56px]">Our case studies</h1>
          </div>
          <div className="grid gap-7.5 lg:grid-cols-2">
            {caseStudiesData.map((cs, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Link to={cs.link} className="absolute inset-0 z-10"></Link>
                <img
                  src={cs.image}
                  className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                  alt="case study"
                />
                <div className="absolute bottom-0 m-5">
                  <div className="inline-flex rounded bg-white p-4">
                    <div className="space-y-2.5">
                      <div className="bg-default-100 border-default-200 inline-flex rounded border px-2.5 py-1.5 text-sm/none font-medium">
                        {cs.category}
                      </div>
                      <h2 className="text-xl">{cs.title}</h2>
                    </div>
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
