import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import ProjectDetail from '../features/profile/personalProfile/projectsDetails'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Profile"}))
      }, [])


    return(
        <ProjectDetail />
    )
}

export default InternalPage