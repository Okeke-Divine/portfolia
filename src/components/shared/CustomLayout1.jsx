import Link from "next/link"

const CustomLayout1 = ({ children }) => {
    return (
        <>
            <div className="max-w-xl mx-auto py-5 md:py-10">
                <div>
                    <Link href=".." className="uppercase font-bold">
                        <i className="fi flaticon-offset fi-tr-angle-small-left"></i> Back</Link>
                </div>
                <div className="divider"></div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default CustomLayout1