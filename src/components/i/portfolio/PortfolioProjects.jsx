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
                      Shoes! <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
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
