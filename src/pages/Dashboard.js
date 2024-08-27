import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import DashboardPage from '../features/dashboard/DashboardPage'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}))
      }, [])


    return(
        <DashboardPage />
    )
}

export default InternalPage