import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/app/home/index'))
const About = lazy(() => import('@/app/about/index'))
const CaseStudies = lazy(() => import('@/app/case-studies/index'))
const Blog = lazy(() => import('@/app/blog/index'))
const BlogDetails = lazy(() => import('@/app/(pages)/blog-details/index'))
const Contact = lazy(() => import('@/app/(pages)/contact/index'))
const ServiceDetail = lazy(() => import('@/app/(pages)/service-detail/index'))
const Error401 = lazy(() => import('@/app/(pages)/error-401/index'))
const Error404 = lazy(() => import('@/app/(pages)/error-404/index'))

export const AllRoutes = [
  {
    path: '/',
    name: 'Root',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    element: <CaseStudies />,
  },
  {
    path: '/blog',
    name: 'Blog',
    element: <Blog />,
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    element: <BlogDetails />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
  {
    path: '/service-detail',
    name: 'ServiceDetail',
    element: <ServiceDetail />,
  },
  {
    path: '/error-401',
    name: 'Error401',
    element: <Error401 />,
  },
  {
    path: '/error-404',
    name: 'Error404',
    element: <Error404 />,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <Navigate to="/error-404" replace />,
  },
]
