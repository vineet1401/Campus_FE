import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import Billing from '../features/profile/billing'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Bills"}))
      }, [])


    return(
        <Billing />
    )
}

export default InternalPage