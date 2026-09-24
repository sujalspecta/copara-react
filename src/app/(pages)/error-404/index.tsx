import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Page Not Found - 404" />
      <section className="relative bg-white py-25 lg:py-50">
        <div className="container">
          <div className="border-default-300 relative z-10 mx-auto w-150 overflow-hidden rounded border bg-white">
            <div className="flex flex-col gap-5 p-10 text-center lg:p-15">
              <h2 className="text-4xl lg:text-6xl">404</h2>
              <h3 className="text-2xl lg:text-3xl">Page not found</h3>
              <p className="text-default-600 mb-4">
                The page you are looking for doesn't exist or has been moved.
              </p>
              <div className="grid">
                <Link
                  to="/home"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      Back to Home
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      Back to Home
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
