import Link from "next/link"

const CustomLayout1 = ({ children }) => {
    return (
        <>
            <div className="max-w-xl mx-auto">
                <div>
                    <Link href="..">
                        <i className="fi flaticon-offset"></i>
                        Back</Link>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default CustomLayout1