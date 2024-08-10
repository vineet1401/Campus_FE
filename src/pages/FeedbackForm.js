import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import DocFeatures from '../features/documentation/DocFeatures'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Feedback"}))
      }, [])


    return(
        <DocFeatures />
    )
}

export default InternalPage