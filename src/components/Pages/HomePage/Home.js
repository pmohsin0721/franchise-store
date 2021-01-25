import React from 'react'
import HomeLayout from '../../HomeLayout'
import TopFranchise from '../../TopFranchise'
import {homeObjOne, homeObjThree, homeObjTwo,} from './Data'
 

function Home() {
    return (
        <>
         <HomeLayout {...homeObjOne}  />
         <HomeLayout {...homeObjTwo}  />
         <HomeLayout {...homeObjThree}  />
         <TopFranchise/>
         
        </>
    )
}

export default Home
