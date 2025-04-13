import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import AppliedDrivePage from '../../features/Profile/AppliedDrivePage'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Applied Drive Details"}))
      }, [])


    return(
        <AppliedDrivePage />
    )
}

export default InternalPage