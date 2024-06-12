import React from "react";

const PortfolioProjects = () => {
  const projects = [{}];
  return (
    <>
      <section className="app-portfolio-padding" id="projects">
        <div>
          <div className="app-text-light-2 uppercase font-semibold tracking-wide text-sm text-center mb-1">
            Portfolio
          </div>
          <h1 className="text-center text-4xl">My Creative Works</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project, index) => (
              <>
                <div className="card shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                Strender
                    </h2>
                    <p>Renowed social media platform with over <b>150k</b> users worldwide</p>
                    <div className="card-actions justify-end">
                      <button className="app-primary-button">Live Site</button>
                    </div>
                    <hr/>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">CSS</div>
                      <div className="badge badge-outline">HTML</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjects;
