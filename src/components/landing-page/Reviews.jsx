import config from "@/data/config.json"

const reviews = [
  {
    message: "This platform is a game-changer for job seekers. It automatically generated a stunning resume and portfolio for me, saving me countless hours of work.",
    name: "Alice Johnson",
    username: "@alicej",
    img: "female (1).jpg"
  },
  {
    message: "As a busy entrepreneur, I needed something quick and efficient. This platform exceeded my expectations, making it so easy to create and share my professional profile.",
    name: "Michael Brown",
    username: "@mikebrown",
    img: "male (3).jpg"
  },
  {
    message: "Incredible tool for anyone needing a professional resume without the hassle. The built-in SEO features helped my profile get noticed faster than I expected.",
    name: "Samantha Lee",
    username: "@samanthalee",
    img: "female (4).jpg"
  },
  {
    message: "I love how user-friendly the platform is. I could track how many views and clicks my resume was getting, which really helped me understand its effectiveness.",
    name: "David Kim",
    username: "@davidk",
    img: "male (1).jpg"
  },
  {
    message: "The Google indexing feature is a huge plus. My resume started appearing in search results within days, which boosted my visibility to recruiters.",
    name: "Jessica",
    username: "@thereal_jessy",
    img: "female (2).jpg"
  },
  {
    message: "This platform made it so easy to update my resume and portfolio. I could make changes on the fly, and the live link reflected updates instantly.",
    name: "Robert Johnson",
    username: "@robertj",
    img: "male (4).jpg"
  },
  {
    message: "Absolutely love this platform! It offers all the tools I need to create a professional online presence and share it effortlessly with potential employers.",
    name: "Emily Davis",
    username: "@emilyd",
    img: "female (3).jpg"
  },
  {
    message: "This is absolutely incredible 😱The inbuilt analysis tool is fantastic. I could see exactly how many people viewed my resume and what actions they took, which helped me tweak my approach.",
    name: "James Wilson",
    username: "@jamesw",
    img: "male (2).jpg"
  },
  {
    message: "Being able to download a professional PDF of my resume is so convenient. It looks great both online and offline, which is perfect for interviews.",
    name: "Laura Martinez",
    username: "@lauram",
    img: "https://makelanding.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-wonji.96376f67.jpeg&w=48&q=75"
  }
]


const Reviews = () => {
  return (
    <>
      <div className="landingPagePadx py-5 md:p-10 bg-base-200" id="reviews">
        <div className="text-center uppercase app-text-primary">Reviews</div>
        <h2 className="text-center">Over {config.portfolio_count}+ portfolio's have been created</h2>
        <div className="flex justify-center mt-2">
          <div className="text-center text-gray-600 max-w-[70%] md:max-w-[60%] lg:max-w-[40%]">You're in good company. Here's what our beautiful customers have to say about us.</div>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 md:gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-5">
              <div className="text-gray-600">
                {review.message}
              </div>
              <div className="divider"></div>
              <div className="flex gap-2 items-center">
                <div className="w-fit">
                  <div className="avatar">
                    <div className="w-10 rounded-xl">
                      <img src={"/images/avatar/b/" + review.img} />
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