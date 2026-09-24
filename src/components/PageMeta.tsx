import { useEffect } from 'react'

type Pagedata = {
  title?: string
}

const PageMeta = ({ title }: Pagedata) => {
  const fullTitle = title
    ? `${title} | Copora - Creative SaaS & Startup Tailwind CSS 4 Template`
    : 'Copora - Creative SaaS & Startup Tailwind CSS 4 Template'

  useEffect(() => {
    document.title = fullTitle
  }, [fullTitle])

  return null
}

export default PageMeta
