import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../features/common/headerSlice'
import Integration from '../features/noticBoard'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Notice Bord "}))
      }, [])
      
    return(
        <Integration />
    )
}

export default InternalPage