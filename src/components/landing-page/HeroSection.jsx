import config from "@/data/config.json"
import Link from "next/link"

const platforms = [
  { image: "product-hunt.webp", url: "#" },
  { image: "hackerNews.webp", url: "#" },
  // { image: "reddit.webp", url: "#" },
  // { image: "twitter.webp", url: "#" },
]

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 landingPagePadx py-5 md:py-10">
        <div>
          <h1 className="text-4xl md:text-5xl">
            Create a Stunning Portfolio and Resume in <span className="app-text-primary">Minutes</span>, Not <span className="line-through text-red-500">Days</span>
          </h1>
          <h2 class="badge badge-ghost font-medium mt-3">The #1 Portfolio + Resume Generator</h2>
          <p className="text-gray-600 lg:max-w-[400px] mt-3">
            {config.description}
          </p>
          <Link className="app-primary-button mt-3 w-fit" href="/signup">Get yours now → It's free</Link>
          <div className="divider"></div>
          <div className="md:block my-2 flex justify-center">
            <div className="w-fit">
              <div className="font-semibold">Over {config.portfolio_count}+ portfolio's created</div>
              <div className="rating rating-sm flex justify-center">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <img
              src={"/images/mockups/mockup 1.png"}
              alt={config.app_name}
              class="object-cover w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="landingPagePadx text-gray-600 pt-2 pb-5 flex justify-center">
        <div className="">
          <div className="text-center text-lg font-semibold mb-3">Featured On</div>
          <div className="flex justify-center w-fit gap-x-5 gap-y-2 md:gap-x-10 md:gap-y-10 flex-wrap items-center">
            {platforms.map((platform, index) => (
              <div key={index}>
                <Link href={platform.url} target="_blank"><img src={"/images/logo/" + platform.image} alt={platform.image} /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection