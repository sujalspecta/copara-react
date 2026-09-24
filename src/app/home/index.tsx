import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Hero from './components/Hero'
import AboutCompany from './components/AboutCompany'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import ContactDetails from './components/ContactDetails'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Home" />
      <Navbar />
      <Hero />
      <AboutCompany />
      <Services />
      <Process />
      <CaseStudies />
      <Statistics />
      <Testimonials />
      <Blog />
      <ContactDetails />
      <Footer />
    </>
  )
}

export default Index
