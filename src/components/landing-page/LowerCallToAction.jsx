import { redirect } from "next/navigation";

const LowerCallToAction = () => {

  async function usernameRedirect(data) {
    "use server"
    const username = data.get("username");
    redirect("/signup?username=" + username)
  }

  return (
    <>
      <div className="bg-base-300 py-5 md:py-10">
        <div className="landingPagePadx">
          <div className="text-center font-bold text-3xl">Launch your portfolio today</div>
          <div className="py-3 text-center">Just fill in your info and your portfolio + resume will be automatically generated</div>
          <div className="join flex justify-center mt-1">
            <form action={usernameRedirect}>
              <input name="username" id="username" type="text" placeholder="Your username" className="join-item input input-bordered" />
              <button type="submit" className="join-item btn app-button-primary app-primary-button w-fit">Create my Portfolio</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LowerCallToAction