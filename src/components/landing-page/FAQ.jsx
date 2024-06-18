const faqs = [
  { title: "Test", description: "amodmsodmosmdosdmfosdmfo" }
]

const FAQ = () => {
  return (
    <>
      <div className="landingPagePadx">
        <div className="text-center uppercase app-text-primary">FAQs</div>
        <h2 className="text-center">Questions & Anwers</h2>
        <div className="flex justify-center">
          <div className="text-center text-gray-600 md:max-w-[60%]">Any other questions? Reach out on twitter or mail. You will get answers withing a few hours.</div>
        </div>
        <div className=" flex justify-center">
          <div className=" join join-vertical w-full py-5 md:max-w-[80%] lg:max-w-[70%]">
            <div className="collapse collapse-arrow join-item border border-base-300 ">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ