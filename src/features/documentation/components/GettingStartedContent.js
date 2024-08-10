import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../../components/Typography/Subtitle'
import { setPageTitle } from '../../../redux/headerSlice'
import {Link} from 'react-router-dom'



function GettingStartedContent(){

    const dispatch = useDispatch()



    return(
        <>
     
<div className="grid place-items-center p-4">
 
  <div className="card bg-gray-200 text-gray-800 w-full  max-w-4xl shadow-lg">
    <div className="card-body">
      <h2 className="card-title">Company name</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <Link to='/app/feedback'><button className="btn bg-gray-500 text-white hover:bg-gray-600">Give Feedback</button></Link>

      
        
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default GettingStartedContent