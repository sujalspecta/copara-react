import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title="Protected Page - 401" />
      <section className="relative flex size-full min-h-screen flex-col items-center justify-center p-5">
        <div className="container">
          <div className="border-default-300 relative z-10 mx-auto w-150 overflow-hidden rounded border bg-white">
            <div className="flex flex-col gap-4 p-10 text-center lg:p-15">
              <h3 className="lg:text-4xl">Protected Page</h3>
              <form action="/home">
                <div className="mb-4">
                  <label htmlFor="password" className="mb-2 block font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary inline-flex w-full items-center justify-center gap-5 rounded-xl px-9 py-3.5 font-medium text-white transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
