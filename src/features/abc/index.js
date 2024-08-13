
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import { useState } from 'react'
import InputText from '../../components/Input/InputText';
import SearchBar from '../../components/Input/SearchBar';
import SelectBox from '../../components/Input/SelectBox';
import TextAreaInput from '../../components/Input/TextAreaInput';
import ToogleInput from '../../components/Input/ToogleInput';
import TitleCard from "../../components/Cards/TitleCard"

function CreateDrive(){

    const dispatch = useDispatch()
    
    


    return(
        <>
            
            <TitleCard title="New Drive" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue="" />
                    <InputText labelTitle="Program" defaultValue="" />
                    <InputText labelTitle="Stream" defaultValue="" />
                    <InputText labelTitle="Batch" defaultValue="" />
                    
                    <div className='grid grid-cols-4 md:grid-cols-4 gap-3'>
                        <p>Criteria</p>
                    <InputText labelTitle='From' defaultValue=''/>
                    <InputText labelTitle='To' defaultValue=''/>
                    <InputText labelTitle='Backlogs' defaultValue=''/>
                    </div>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" />
                    <InputText labelTitle="Timezone" defaultValue="IST" />
                    <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} />
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick=''>Update</button></div>
            </TitleCard>
        </>
    )
}

export default CreateDrive
