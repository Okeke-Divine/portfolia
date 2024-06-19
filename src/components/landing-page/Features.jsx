
const features = [
  { title: "Inbuilt SEO", message: "Our Artificial Intelligence uses millions of converting headlines to write yours. It speaks 50+ languages!", icon: "fi-ts-web-design" },
]

const Features = () => {
  return (
    <>
      <div className="landingPagePadx py-5 md:p-10 bg-base-200" id="features">
        <div className="text-center uppercase app-text-primary">Features</div>
        <h2 className="text-center">The fastest way to setup a portfolio + resume</h2>
        <div className="flex justify-center mt-2">
          <div className="text-center text-gray-600 max-w-[70%] md:max-w-[60%] lg:max-w-[40%]">Packed with a ton of featueres</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">
          {features.map((feature, index) => (
            <div key={index} className="p-5 bg-white rounded-lg">
              <div className="mb-2 flex justify-center">
                <div className="flex justify-center items-center rounded-full w-14 h-14 bg-green-100">
                  <i className={`fi flaticon-offset ${feature.icon}`}></i>
                </div>
              </div>
              <div className="text-center text-xl font-bold mb-2">{feature.title}</div>
              <div className="text-gray-500">{feature.message}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Features