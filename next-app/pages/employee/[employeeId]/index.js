import { useRouter } from "next/router"

const EmployeeIdInfo = () => {
    const router = useRouter()
    const { employeeId } = router.query
    return <h1>Detail/Info of Employee ID {employeeId}</h1>
}

export default EmployeeIdInfo