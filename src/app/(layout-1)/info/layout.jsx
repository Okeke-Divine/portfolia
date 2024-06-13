const links = [
  { name: "Basic Info" },
  { name: "Skills" },
  { name: "Projects" },
];

export default function InfoLayout({ children }) {
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-ts-web-design titleIcon"></i> Info
          </h1>
          <p className="app-text-light">Enter once, use anywhere</p>
        </div>
        <div className="divider"></div>
        <div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-[100px">
              <div className="join join-horizontal md:join-vertical border-2 w-fit">
                {links.map((link, index) => (
                  <Link
                    href="#"
                    className="btn join-item font-semibold hover:app-bg-primary-dark app-bg-primary text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* <div className="divider divider-vertical"></div> */}
            <div className="grow">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
