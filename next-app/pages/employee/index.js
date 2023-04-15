import { useRouter } from "next/router"
const Employee = () => {
    const router = useRouter()
    console.log(router);
    const handleGetRecord = () => {
        router.push('/record')
     //   router.replace('/record')
    }
    return (
        <>
        <h1>Get Employee Record</h1>
        <button className="bg-black text-white px-2 py-1" onClick={handleGetRecord}>Get record</button>
        </>
    )
}

export default Employee