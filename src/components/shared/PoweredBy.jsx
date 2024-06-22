import config from "@/data/config.json"
import Link from "next/link"

const PoweredBy = ({ variation }) => {
    return (
        <>

            <Link href="/" target="_blank">
                <div className={`fixed ${variation == 0 ? "bottom-5" : "bottom-16"} right-5 bg-white rounded-full flex gap-x-1 items-center duration-300 shadow-md hover:shadow-lg group p-1`}>
                    <div>
                        <img
                            className="w-10 rounded-full shadow-lg"
                            src="/images/logo/logo.png"
                            alt={config.app_name + "'s logo"}
                        />
                    </div>
                    <div className="pr-2 w-[0px] md:w-full duration-300 hidden md:block group-hover:w-full  group-hover:block">Powered  by <span className="font-bold"> {config.app_name}</span> </div>
                </div>
            </Link>
        </>
    )
}

export default PoweredBy