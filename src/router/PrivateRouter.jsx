import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
    const user=true
  return (
    <div>
        {user ? <Outlet/> : <Navigate to="" />}
    </div>
  )
}

export default PrivateRouter