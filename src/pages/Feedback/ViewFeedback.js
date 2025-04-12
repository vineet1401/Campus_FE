
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/headerSlice';
import { useEffect } from 'react';
import ViewFeedback from '../../features/feedback/ViewFeedback';
import { useParams } from "react-router-dom";




function InternalPage() {
   
    const { companyName } = useParams();
    const dispatch = useDispatch()


    useEffect(() => {
        // Dispatch the page title with the company name included
        dispatch(setPageTitle({ title: `Feedback for ${companyName}` }));
    }, []); // Add companyName to the dependency array


    return(
        <ViewFeedback/>
    )
}

export default InternalPage;