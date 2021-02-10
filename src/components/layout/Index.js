import React,{useContext} from 'react'
import Tracks from "../tracks/Tracks"
import Search from "../tracks/Search"
import {myContext} from "../../Context"
const Index=()=> {
    return (

        <React.Fragment>
            <Search/>
            <Tracks/>
        </React.Fragment>
    )
}

export default Index;