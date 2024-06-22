import config from "@/data/config.json"
// import Link from "next/link"

const PoweredBy = () => {
    return (
        <>
            <div className="pr-2 w-[0px] duration-300 hidden group-hover:w-full  group-hover:block">Powered  by <span className="font-bold"> {config.app_name}</span> </div>
        </>
    )
}

export default PoweredBy