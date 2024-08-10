import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import EducationDetail from '../features/profile/personalProfile/educationDetail'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Profile"}))
      }, [])


    return(
        <EducationDetail />
    )
}

export default InternalPage