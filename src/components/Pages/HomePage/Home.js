import React from 'react'
import HomeLayout from '../../HomeLayout'
import TopFranchise from '../../TopFranchise'
import { BrowserRouter as Route } from 'react-router-dom';
import {homeObjOne, homeObjThree, homeObjTwo,} from './Data'
import {TopFranchiseData} from "../../FranData.json"
 

function Home() {
    return (
        <>
         <HomeLayout {...homeObjOne}  />
         <HomeLayout {...homeObjTwo}  />
         <HomeLayout {...homeObjThree}  />
         <Route path='/topfranchise'  >
              <TopFranchise data={TopFranchiseData}/>
            </Route>
         
        </>
    )
}

export default Home
