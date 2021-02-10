import React,{useContext} from 'react'

import Spinner from "../layout/Spinner"
import {myContext} from "../../Context"
import Track from "../tracks/Track";

const Tracks=()=> {


const [state]=useContext(myContext);
    
const {trackList,top_heading}=state;

if(trackList===undefined||trackList.length===0){
    return <Spinner/>
}
return (
<>
<h3 className="text-center mb-4">{top_heading}</h3>
<div className="row">
    {trackList.map((item,index)=>{
return <Track key={index} track={item.track}/>
    })}
</div>
</>
)

}

export default Tracks;