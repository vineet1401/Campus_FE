import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../redux/headerSlice'
import Team from '../features/profile/team'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Team Members"}))
      }, [])


    return(
        <Team/>
    )
}

export default InternalPage