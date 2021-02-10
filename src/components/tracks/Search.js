import React,{useContext, useRef, useState} from 'react'
import {myContext} from "../../Context"

import axios from "axios"

const Search = () => {
    const [state,setState]=useContext(myContext);
    const searchTrack = useRef();
    const [finalTrack,setFinalTrack]=useState('');

    React.useEffect(()=>{

axios.get(`https://thingproxy.freeboard.io/fetch/http://api.musixmatch.com/ws/1.1/track.search?q_track=${finalTrack}&page_size=10&page=1&s_track_rating=desc
&apikey=
${process.env.REACT_APP_MM_KEY}`)
.then(res=>{
    console.log(res.data.message.body.track_list)
    setState({trackList:res.data.message.body.track_list,top_heading:"Search Results"})
})
    },[finalTrack])

const handleSubmit=(e)=>{
    e.preventDefault();
    setFinalTrack(searchTrack.current.value);
}

    return(
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music">Search For a Song</i>
            </h1>
                <p className="lead text-center">Get the lyrics for any song</p>
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text"
                className="form-control fom-control-lg"
                placeholder="trackTitle"
                ref={searchTrack}
                />
            </div>
            <button className="btn btn-primary btn-lg btn-block mb-3 mt-3" type="submit" >
                Get Track Lyrics
            </button>
        </form>
        </div>
    )
}

export default Search