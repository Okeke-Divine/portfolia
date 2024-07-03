"use client"

const CopyContent = ({ url }) => {
    return (
        <>
            <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                <input
                    value={url}
                    required
                    disabled
                    readOnly
                    className="grow"
                />
                <i className="fi fi-tr-envelopes flaticon-offset"></i>
            </div></>
    )
}

export default CopyContent