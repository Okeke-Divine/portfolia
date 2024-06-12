export function generateMetadata({params}){
    return {
        title : params.username
    }
}

export default function PortFolio({params}) {
    return (
        <>
            {params.username}
        </>
    )
}
