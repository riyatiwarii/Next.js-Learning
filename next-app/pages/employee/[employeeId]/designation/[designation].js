import { useRouter } from "next/router"

const EmployeeDesignation = () => {
    const router = useRouter()
    const { employeeId, designation } = router.query
    return <h1>Detail/Info of Employee ID {employeeId} has designation {designation}</h1>
}

export default EmployeeDesignation