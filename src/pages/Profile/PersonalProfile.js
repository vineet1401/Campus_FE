import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import PersonalDetail from '../../features/Profile/personalDetail'


function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Profile"}))
      }, [])


    return(
        <PersonalDetail />
    )
}

export default InternalPage