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
          <h2 class="badge badge-ghost font-medium mt-3">The #1 Portfolio + Resume Generator</h2>
          <p className="text-gray-600 lg:max-w-[400px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore quos ab ducimus aliquam soluta nam quod doloremque deleniti quas. Maiores iusto ipsum enim ipsam corrupti neque voluptates amet totam?
          </p>
          <Link className="app-primary-button mt-3 w-fit" href="/signup">Get yours now → It's free</Link>
          <div className="my-2 flex items-center">
            <img src="/images/svg/flower-left.svg" alt="flower left" />
            <div className="flex md:block justify-center">
              <div>140+ portfolio's created</div>
              <div class="flex flex-row justify-center gap-0 pt-1" bis_skin_checked="1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span></div>
            </div>
            <img src="/images/svg/flower-right.svg" alt="flower right" />
          </div>
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
        <div className="">
          <div className="text-center text-xl font-semibold mb-3">As seen on</div>
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