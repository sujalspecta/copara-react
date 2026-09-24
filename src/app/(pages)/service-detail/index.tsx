import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import DetailHero from './components/DetailHero'
import DetailStory from './components/DetailStory'
import PricingPlans from './components/PricingPlans'
import ReviewTestimonial from './components/ReviewTestimonial'
import DetailFaqs from './components/DetailFaqs'
import OtherServices from './components/OtherServices'
import FinalCta from './components/FinalCta'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Service Detail" />
      <Navbar />
      <DetailHero />
      <DetailStory />
      <PricingPlans />
      <ReviewTestimonial />
      <DetailFaqs />
      <OtherServices />
      <FinalCta />
      <Footer />
    </>
  )
}

export default Index
