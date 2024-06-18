import config from "@/data/config.json"
import Link from "next/link"

const platforms = [
  { image: "product-hunt.webp", url: "#" },
  { image: "hackerNews.webp", url: "#" },
  { image: "reddit.webp", url: "#" },
  { image: "twitter.webp", url: "#" },
]

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 landingPagePadx py-5 md:py-10">
        <div>
          <h1 className="text-4xl md:text-5xl">
            Make a beautiful portfolio + resume in <span className="app-text-primary">minutes</span> not <span className="line-through">days</span>
          </h1>
          <p className="text-gray-600 lg:max-w-[400px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore quos ab ducimus aliquam soluta nam quod doloremque deleniti quas. Maiores iusto ipsum enim ipsam corrupti neque voluptates amet totam?
          </p>
          <Link className="app-primary-button mt-3 w-fit" href="/signup">Get yours now → It's free</Link>
        </div>
        <div className="">
          <div className="w-full">
            <img
              src={"/images/mockups/923_1x_shots_so.png"}
              alt={config.app_name}
              class="object-cover w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="landingPagePadx text-gray-600 py-5 flex justify-center">
        <div className="flex justify-center w-fit gap-5 md:gap-10 flex-wrap items-center">
          <div>As seen on</div>
          {platforms.map((platform, index) => (
            <div key={index}>
              <Link href={platform.url} target="_blank"><img src={"/images/logo/" + platform.image} alt={platform.image} /></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection