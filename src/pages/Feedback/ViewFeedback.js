
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/headerSlice';
import { useEffect } from 'react';
import ViewFeedback from '../../features/feedback/ViewFeedback';




function InternalPage() {
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Feedback" }))
    }, [])


    return(
        <ViewFeedback/>
    )
}

export default InternalPage;