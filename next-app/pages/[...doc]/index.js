import { useRouter } from "next/router"

const Doc = () => {
    const router = useRouter()
    console.log(router);
    return (
        <h1>route doc</h1>
    )
}

export default Doc