import { Link } from 'react-router-dom'
import caseStudy from '@/assets/images/other/case-study.webp'

const CaseStudies = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-12.5">
          <div className="text-default-950 mb-2.5 text-sm">Our case studies</div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">Futured case study</h1>
          <p className="text-default-600">
            Explore a selection of our featured case study to see how we've helped businesses
            overcome challenges and reach their full potential.
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link to="/service-detail" className="absolute inset-0 z-1"></Link>
          <img
            src={caseStudy}
            alt="Image"
            className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="inset-x-7.5 bottom-7.5 flex rounded bg-white p-4 md:absolute">
            <div className="space-y-2.5">
              <div className="bg-default-100 inline-flex rounded-md px-1.5 py-1 text-xs/none font-medium">
                Financial
              </div>
              <h2 className="text-xl md:text-2xl">Market entry strategy for a fintech startup</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
