type FaqType = {
  question: string
  answer: string
}

const faqsData: FaqType[] = [
  {
    question: 'What types of businesses do you offer strategy consulting for?',
    answer:
      "We provide strategy consulting for startups, small to mid-sized businesses, and large enterprises across various industries—including technology, healthcare, manufacturing, retail, and professional services. Whether you're scaling, pivoting, or entering new markets, we tailor solutions to your unique goals.",
  },
  {
    question: 'How long does a typical strategy engagement take?',
    answer:
      'Most of our strategy projects range between 4 to 12 weeks, depending on the scope and depth required. For long-term support, we also offer ongoing advisory retainers and quarterly planning sessions.',
  },
  {
    question: 'Do you help with implementation or just strategy planning?',
    answer:
      "We do both. While we specialize in strategy planning, we also support implementation to ensure your vision turns into results. From execution roadmaps to hands-on project support, we're with you every step of the way.",
  },
  {
    question: "What's included in your strategic consulting package?",
    answer:
      'Our package includes business analysis, market research, goal setting, tailored growth strategies, and implementation support—all customized to your needs.',
  },
]

const DetailFaqs = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-250!">
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2 text-sm">FAQs</div>
          <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto lg:max-w-3/4">
            We've compiled answers to the most common questions clients ask about our business
            strategy consulting.
          </p>
        </div>

        <div>
          {faqsData.map((faq, index) => (
            <div key={index}>
              {index > 0 && <hr className="border-default-200 my-5" />}
              <div className={`hs-accordion p-5 ${index === 0 ? 'active' : ''}`}>
                <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 text-start">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <div className="relative flex size-4.5 items-center justify-center">
                    <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
                    <i className="bg-default-950 flex h-0.5 w-4.5"></i>
                  </div>
                </button>
                <div
                  className={`hs-accordion-content w-full ${index !== 0 ? 'hidden' : ''} overflow-hidden text-start transition-[height] duration-300`}
                >
                  <p className="mt-5">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailFaqs
