import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import CreateDrive from "../features/createDrive"

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Create Drive"}))
      }, [])


    return(
        <CreateDrive />
    )
}

export default InternalPage