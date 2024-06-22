import Link from "next/link";

const hiws = [
  {
    title: "Create Your Account",
    content: "Sign up with your email address and create a secure password. Once registered, you'll be able to access your dashboard where you can start building your resume and portfolio."
  },
  {
    title: "Fill in Your Information",
    content: "Enter your personal details such as name, contact information, skills, work experience, education, and any other relevant information. You can also add sections for projects, certifications, and more. Use our easy-to-navigate forms to input your data."
  },
  {
    title: "Customize and Share",
    content: "Our platform automatically generates a professional resume and portfolio based on the information you provide. Customize the look and feel to match your personal brand. Once you're satisfied, share your live link with potential employers or download your resume as a PDF."
  }
]


const HowItWorks = () => {
  return (
    <>
      <section className="bg-base-100" id="how">
        <div className="py-5 md:py-10 max-w-7xl mx-auto px-4"  >
          <div className="flex flex-col text-center w-full mb-4"  >
            <div className="text-center uppercase app-text-primary">How It Works</div>
            <h2 className="text-center">Get yours today</h2>
          </div>
          <div className="relative"  >
            <div className="absolute inset-x-0 hidden top-2 md:block md:px-20 lg:px-28 xl:px-44"  >
              <div className="flex justify-center w-full"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48" fill="none">
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray="1 12"
                    className="w-full mx-auto"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"  >
              {hiws.map((hiw, index) => (
                <div key={index} >
                  <div
                    className="flex items-center justify-center w-16 h-16 mx-auto bg-base-100 text-[#1098ad] border-2 border-[#1098ad]/30 rounded-full"
                  >
                    <span className="text-xl font-medium"> {index + 1} </span>
                  </div>
                  <h3 className="mt-6 text-lg lg:text-xl font-medium text-black md:mt-10">{hiw.title}</h3>
                  <p className="mt-4 text-base text-base-content-secondary leading-relaxed text-gray-600">
                    {hiw.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="btn btn-neutrual" href="https://www.youtube.com/watch?v=mWDAljdhhKk" target="_blank">Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
