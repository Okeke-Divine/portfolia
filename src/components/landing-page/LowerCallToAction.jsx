
const LowerCallToAction = () => {
  return (
    <>
      <div className="bg-green-500 py-5 text-white md:py-10">
        <div className="landingPagePadx">
          <div className="text-center font-bold text-3xl">Launc your portfolio today</div>
          <div className="py-3 text-center">Just fill in your info and your portfolio + resume will be automatically generated</div>
          <div className="join flex justify-center mt-1">
            <input type="text" placeholder="Your username" className="join-item input input-bordered" />
            <button className="join-item btn app-button-primary">Create my Portfolio</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LowerCallToAction