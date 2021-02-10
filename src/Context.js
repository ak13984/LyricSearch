import React, {useState, useEffect} from 'react'
import axios from "axios"

export const myContext = React.createContext();

export const Provider =( {children} )=> {

    let initialState={
        trackList:[],
        top_heading:""
    }

const [state, setState]=useState(initialState);


const getInfo = async()=>{

    axios.get(`https://thingproxy.freeboard.io/fetch/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1
&apikey=
${process.env.REACT_APP_MM_KEY}`)
    .then((res)=>{
        setState({trackList:res.data.message.body.track_list,top_heading:"Top 10 tracks in India"})
    })
    .catch(err=>console.log(err))
}

useEffect(() => {
    getInfo();
}, [])
    return (
        <myContext.Provider value={[state,setState]}>
            {children}
        </myContext.Provider>
    )
}


