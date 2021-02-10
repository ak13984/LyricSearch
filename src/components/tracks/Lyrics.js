import React,{useState,useEffect} from 'react'
import Spinner from "../layout/Spinner"
import {Link} from "react-router-dom"
import axios from "axios";

const Lyrics=(props)=> {
const {id, commontrackId}= props.match.params;

const [lyrics, setLyrics]=useState({});
const [track, setTrack] = useState({})

useEffect(()=>{

    axios.get(`https://thingproxy.freeboard.io/fetch/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=
${process.env.REACT_APP_MM_KEY}`)
.then(res=>{
    setLyrics(res.data.message.body.lyrics);
    return axios.get(`https://thingproxy.freeboard.io/fetch/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${commontrackId}&apikey=${process.env.REACT_APP_MM_KEY}
`).then(res=>{
    setTrack(res.data.message.body.track)
})
    
})
    },[id])
    

const getGenre=(data)=>{
if(data.length==0)return "No Genre"

return data[0].music_genre.music_genre_name
}


if(track===undefined||lyrics===undefined||Object.keys(track).length===0||Object.keys(lyrics)===0){
    return <Spinner/>
}

    return (
        <React.Fragment>
            <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
            <div className="card">
                <h5 className="card-header">
                    {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                </h5>
            </div>
            <div className="card-body">
                <p className="card-text">
                    {lyrics.lyrics_body}
                </p>
            </div>
            

<ul className="list-group mt-3">
    <li className="list-group-item">
        <strong>Album ID</strong>: {track.album_id}
    </li>
    <li className="list-group-item">
        <strong>Song Genre</strong>:{
          getGenre(track.primary_genres.music_genre_list)
}
    </li>
    <li className="list-group-item">
        <strong>Explicit Words</strong>: {track.explicit===0?'No':'Yes'}
    </li>
</ul>

        </React.Fragment>
    )
}
export default Lyrics