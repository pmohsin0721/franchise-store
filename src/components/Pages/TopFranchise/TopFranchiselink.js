import React from 'react';
import HomeLayout from '../../HomeLayout';
import TopFranchise from '../../TopFranchise';
import {homeObjOne} from './Data';
 

function TopFranchiselink() {
    return (
        <>
        <TopFranchise/>
         <HomeLayout {...homeObjOne}  />
        </>
    )
}

export default TopFranchiselink
