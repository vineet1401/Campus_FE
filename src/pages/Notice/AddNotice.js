import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import AddNotice from '../../features/Notice/AddNotice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "ADD NOTICE "}))
      }, [])


    return(
        
        <AddNotice />
    )
}

export default InternalPage