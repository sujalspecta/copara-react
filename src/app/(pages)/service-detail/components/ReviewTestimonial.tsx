import client2Light from '@/assets/images/client/2-light.svg'
import user4 from '@/assets/images/users/4.jpg'

const ReviewTestimonial = () => {
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="bg-default-950 relative rounded-lg p-10 lg:p-17.5">
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="flex flex-col items-start gap-5">
              <img src={user4} className="size-17.5 rounded-full object-cover" alt="avatar" />
              <div>
                <h3 className="mb-1.5 text-2xl text-white">Amanda Lewis</h3>
                <p className="text-default-400">Director of Strategy</p>
              </div>
              <img src={client2Light} className="h-6 opacity-80" alt="logo" />
            </div>
            <div className="md:col-span-2">
              <p className="text-2xl text-white">
                Within the first three months, we saw a 35% boost in our sales performance and
                streamlined several underperforming areas of our operation. Our company was growing
                fast, but our internal culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewTestimonial
