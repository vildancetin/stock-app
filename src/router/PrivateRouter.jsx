import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
    const {user}=useSelector(state=>state.auth)
  return (
    <div>
        {user ? <Outlet/> : <Navigate to="" />}
    </div>
  )
}

export default PrivateRouter