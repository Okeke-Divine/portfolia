import config from "@/data/config.json"
import Link from "next/link"

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 landingPagePadx py-5 md:py-10">
        <div>
          <h1 className="text-4xl md:text-5xl">
            Make a beautiful portfolio + resume in <span className="app-text-primary">minutes</span> not <span className="line-through">days</span>
          </h1>
          <p className="text-gray-600 lg:max-w-[400px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore quos ab ducimus aliquam soluta nam quod doloremque deleniti quas. Maiores iusto ipsum enim ipsam corrupti neque voluptates amet totam?
          </p>
          <Link className="app-primary-button mt-3 w-fit" href="/signup">Get Started → It's free</Link>
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
    </>
  )
}

export default HeroSection