import Link from "next/link"

export const metadata = {
    title: "Settings"
}

const SettingsPage = () => {
    return (
        <>
            <div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>Settings </li>
                    </ul>
                </div>
                <h1 className="flex items-center gap-2">
                    <i className="fi fi-tr-customization-cogwheel titleIcon"></i> Settings
                </h1>
            </div>
            <div className="divider"></div>
            <div>
                <Link href="/settings/profile/picture/change">Change Your Profile Picture</Link>
            </div>
        </>
    )
}

export default SettingsPage