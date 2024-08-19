import {useState, useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setPageTitle } from '../../redux/headerSlice'
// import  GettingStarted from '../features/documentation/DocGettingStarted'
import CompanyCard from '../../features/Feedback/AppliedDrive'
import TitleCard from '../../components/Cards/TitleCard'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Feedback" }))
    }, [])


    return(
        <div className="">
            <CompanyCard />
        </div>
    )
}

export default InternalPage