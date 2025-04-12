import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import DriveHomePage from '../../features/Drive/DriveHomePage'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Drives"}))
      }, [])


    return(
        <DriveHomePage />
    )
}

export default InternalPage