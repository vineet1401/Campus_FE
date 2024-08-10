import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import ProfessionalDetail from '../features/profile/personalProfile/professionalDetails'


function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Profile"}))
      }, [])


    return(
        <ProfessionalDetail />
    )
}

export default InternalPage