const features = [
  {
    title: "Inbuilt Analysis",
    message: "Track your resume's performance with detailed analytics. Get insights into total views, clicks, and conversion rates, helping you understand how potential employers are interacting with your content.",
    icon: "fi-ts-web-design"
  },
  {
    title: "SEO Optimization",
    message: "Enhance your online visibility with our SEO optimization features. Our platform automatically optimizes your resume and portfolio for search engines, making it easier for potential employers to find you.",
    icon: "fi-ts-web-design"
  },
  {
    title: "Google Indexing",
    message: "Get your resume and portfolio indexed by Google with just a few clicks. Our platform ensures your content is searchable and ranks well on Google, increasing your chances of being noticed.",
    icon: "fi-ts-web-design"
  },
  {
    title: "CMS Platform",
    message: "Manage your resume and portfolio with ease using our content management system (CMS). Update your information, add new sections, and keep your content current without any hassle.",
    icon: "fi-ts-web-design"
  },
  {
    title: "Live Links",
    message: "Share your resume and portfolio effortlessly with live links. Simply copy the link and share it with potential employers, allowing them to view your professional information online.",
    icon: "fi-ts-web-design"
  },
  {
    title: "PDF Download",
    message: "Download your resume as a professionally formatted PDF. Our platform ensures your resume looks great in print and digital formats, making it easy to share in any context.",
    icon: "fi-ts-web-design"
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 mt-5">
          {features.map((feature, index) => (
            <div key={index} className="p-5 bg-white rounded-lg">
              <div className="mb-2 flex justify-center">
                <div className="flex justify-center items-center rounded-full w-14 h-14 bg-green-100 mb-2">
                  <i className={`fi flaticon-offset ${feature.icon}`}></i>
                </div>
              </div>
              <div className="text-center text-xl font-bold mb-2">{feature.title}</div>
              <div className="flex justify-center">
                <div className="text-gray-600 text-center mb-2 md:max-w-[85%]">{feature.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Features