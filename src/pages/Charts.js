import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Charts from '../features/charts'
import { setPageTitle } from '../redux/headerSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Analytics"}))
      }, [])


    return(
        <Charts />
    )
}

export default InternalPage