import BackButton from "./BackButton"

const CustomLayout1 = ({ children }) => {
    return (
        <>
            <div className="max-w-xl mx-auto py-5 md:py-10">
                <div>
                    <BackButton />
                </div>
                <div className="divider"></div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default CustomLayout1