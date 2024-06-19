import config from "@/data/config.json"

const reviews = [
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
  { message: "Non-IT people can finally build this amazing landing page on their own (like me) 🤩 Truly brilliant idea to save lots of time and money for busy solo entrepreneurs! ", name: "John Doe", username: "@johndoe", img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75" },
]

const Reviews = () => {
  return (
    <>
      <div className="landingPagePadx py-5 md:p-10 bg-base-200">
        <div className="text-center uppercase app-text-primary">Reviews</div>
        <h2 className="text-center">Over {config.portfolio_count}+ portfolio's have been created</h2>
        <div className="flex justify-center mt-2">
          <div className="text-center text-gray-600 max-w-[70%] md:max-w-[60%] lg:max-w-[40%]">You're in good company. Here's what our beautiful customers have to say about us.</div>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-5">
              <div className="text-gray-500">
                {review.message}
              </div>
              <div className="divider"></div>
              <div className="flex gap-2 items-center">
                <div className="w-fit">
                  <div className="avatar">
                    <div className="w-10 rounded-xl">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold">{review.name}</div>
                  <div className="mb-1 text-gray-500">{review.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reviews