import { getCurrentSession } from "@/utils/session"

const DashboardTopComponent = async () => {

    const session = await getCurrentSession();
    for(let i = 0; i< 1000; i++){
        console.log(i);
    }

    return (
    <>
         <div>
          <div>
            <h1 className="flex items-center gap-2">
              <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,
              {session.user.name}
            </h1>
            <p>No code Portfolio & Resume builder.</p>
          </div>
        </div>
    </>
  )
}

export default DashboardTopComponent