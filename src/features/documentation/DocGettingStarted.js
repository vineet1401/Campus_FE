import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { setPageTitle, showNotification } from "../../redux/headerSlice"
import GettingStartedNav from "./components/GettingStartedNav"
import ReadMe from "./components/GettingStartedContent"
import GettingStartedContent from "./components/GettingStartedContent"
import SearchBar from "../../components/Input/SearchBar"




function GettingStarted(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Feedback"}))
      }, [])


    return(
        <>
        <TitleCard title="Company Feedback" >
        {/* <SearchBar /> */}
            <div className="bg-base-100  flex overflow-hidden  rounded-lg" style={{height : "82vh"}}>
                    {/* <div className="flex-none p-4">
                        <GettingStartedNav activeIndex={1}/>
                    </div> */}
                    
                    
                    
                    <div className="grow pt-2  overflow-y-scroll">
                        <GettingStartedContent />
                        <GettingStartedContent />
                        <GettingStartedContent />
                    
                    </div>

                    

                </div>

        </TitleCard>        
           
        </>
    )
}

export default GettingStarted