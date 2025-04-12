import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import ViewNotice from '../../features/Notice/ViewNotice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Notice Bord "}))
      }, [])
      
    return(
        <ViewNotice/>
    )
}

export default InternalPage