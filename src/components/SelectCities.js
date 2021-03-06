import React from 'react'
import Bangalore from './Bangalore'
import Chennai from './Chennai'
import Hyderabad from './Hyderabad'
import Mumbai from './Mumbai'
import {HyderabadData,MumbaiData,BangaloreData,ChennaiData} from "./FranData.json"
 

function SelectCities() {
    return (
        <>
        <Hyderabad data={HyderabadData}/>
        <Bangalore data={BangaloreData}/>
        <Mumbai  data= {MumbaiData}/>
        <Chennai  data={ChennaiData}/>
        </>
    )
}

export default SelectCities
