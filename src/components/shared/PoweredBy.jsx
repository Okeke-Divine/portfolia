import config from "@/data/config.json"
import Link from "next/link"

const PoweredBy = () => {
    return (
        <>
            <div className="pr-2 w-[0px] duration-300 hidden group-hover:w-full  group-hover:block">Powered  by <Link className="font-bold" href="/" target="_blank"> {config.app_name}</Link> </div>
        </>
    )
}

export default PoweredBy