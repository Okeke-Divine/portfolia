import { defaultImgUrl } from "@/constants/shared/constant";

const PortfolioAbout = () => {
  return (
    <>
      <section className="app-portfolio-padding bg-base-200" id="about">
        <div>
          <div className="app-text-light-2 uppercase text-sm font-semibold tracking-wide">
            Nice to meet you.
          </div>
          <div>
            <h1 className="max-w-[80%] md:max-w-[600px] text-4xl">
              Hey, I'm John - Full Stack Web Developer.
            </h1>
          </div>
          {/* about */}
          <div className="mt-2 app-text-light-2 app-portfolio-about-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sequi beatae consequatur nisi obcaecati voluptas
              modi laudantium quo, maiores cum ipsam quam nostrum nulla neque,
              rerum dicta tempora fugit, possimus illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo.
            </p>
          </div>
          {/* profile */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="avatar cursor-pointer">
              <div className="w-12 rounded-full ring ring-green-300">
                <img src={defaultImgUrl} alt="User Profile Picture" />
              </div>
            </div>
            <div className="grow">
              <div className="font-bold">John Doe</div>
              <div className="app-text-light-2">
                Full Stack Web Developer @ Figma
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAbout;
