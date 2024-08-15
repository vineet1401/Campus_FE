import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import DocFeatures from '../features/noticForm/addNotice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "ADD NOTICE "}))
      }, [])


    return(
        <DocFeatures />
    )
}

export default InternalPage