import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../redux/headerSlice'
import { useParams } from 'react-router-dom';
import DriveDetails from '../../features/Drive/DriveDetail';

function InternalPage(){
      const dispatch = useDispatch()
      const { id } = useParams(); // Get the ID from the URL parameters
      const driveId = id; // Convert the id from string to number
      console.log("Drive id", id)
      
       // Find the drive by ID

      useEffect(() => {
          dispatch(setPageTitle( 'Details' )); // Set page title if drive is found
        }
      , [dispatch]);
    
      return (
        
        <DriveDetails id = {driveId}/>
      );
}
  
export default InternalPage;