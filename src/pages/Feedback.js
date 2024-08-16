import {useState, useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setPageTitle } from '../redux/headerSlice'
// import  GettingStarted from '../features/documentation/DocGettingStarted'
import GettingStartedContent from '../features/feedback/CompanyCard'
import TitleCard from '../components/Cards/TitleCard'

function ExternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Feedback" }))
    }, [])


    return(
        // <TitleCard title="Company Feedback" topMargin={'mt-2'}>
        <div className="">
            <GettingStartedContent />
            <GettingStartedContent />
        </div>
        // </TitleCard>
    )
}

export default ExternalPage