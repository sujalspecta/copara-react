import Navbar from '@/components/navbar/Navbar'
import BlogDetailsContent from './components/BlogDetailsContent'
import OtherBlogs from './components/OtherBlogs'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Blog Detail" />
      <Navbar />
      <BlogDetailsContent />
      <OtherBlogs />
      <Footer />
    </>
  )
}

export default Index
