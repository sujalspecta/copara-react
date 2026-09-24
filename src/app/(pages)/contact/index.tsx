import Navbar from '@/components/navbar/Navbar'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ExpertCTA from './components/ExpertCTA'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Contact Us" />
      <Navbar />
      <ContactForm />
      <ContactInfo />
      <ExpertCTA />
      <Footer />
    </>
  )
}

export default Index
