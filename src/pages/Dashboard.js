import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import Dashboard from '../features/dashboard/DashboardPage'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}))
      }, [])


    return(
        <Dashboard />
    )
}

export default InternalPage