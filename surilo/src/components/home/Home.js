import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import PopularArtist from './playlist/PopularArtist';
import SongDisplay from '../songDisplay/SongDisplay';
import MusicBar from '../musicBar/MusicBar'
import './homeStyle.css';
import yabesh from '../img/yabesh.jpg'
import { useState, useEffect } from 'react';
import playerContext from '../PlayerContext/playerContext' 
import PlaylistCarousel from './playlistCarousel';
import axios from 'axios';
import { data } from 'jquery';




const Home = () => {
    
    const [artistDb, setArtistDb] = useState([]);

    const[weeklyHits, setWeeklyHits] = useState([]);

    const { songs_list, currentSong, setCurrent } = useContext(playerContext)

    function getBar(){
        if(songs_list.length>0){
            return 
        }
    }

    useEffect(async ()=>{
        const music = await axios.get(`/getmusic/9`)
        console.log();
        // localStorage.setItem('queue', JSON.stringify([]))
        let fetchedData = await axios.get(`/getpopularartist`)
        setArtistDb(fetchedData.data)

        let fetchWeeklyHits = await axios.get(`/getweeklyhits`)
        setWeeklyHits(fetchWeeklyHits.data)
    }, [])


    const getData=(artistDb)=>{

        // Shuffle popular artists
        let currentIndex = artistDb.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [artistDb[currentIndex], artistDb[randomIndex]] = [
            artistDb[randomIndex], artistDb[currentIndex]];
        }

        // Loop popular artists compnent till array length
        let data = []

        artistDb.map((i)=>data.push(<PopularArtist artists = {i}></PopularArtist>))
        return data;
    }

    const getWeeklyHits = ()=>{

        let data = []

        weeklyHits.map((i)=>data.push(<SongDisplay hits = {i}></SongDisplay>))
        return data;
    }


    return ( 

       <div className='homeContainer'>
           <div>
               <LeftSidebar></LeftSidebar>
           </div>
                <div className='contentContainer d-flex flex-column'>
                    <Navbar></Navbar>
                    <div className="innerContainer">

                        <div className="playlist row">
                        <h6 className='playListTitle'>Popular Artist</h6>
                        <div className='album d-flex'>

                            {getData(artistDb)}
                            </div>

                        </div>
                        <div className="playlist p-3 d-flex flex-wrap">
                            <div className='CarouselCtn'>
                                <PlaylistCarousel></PlaylistCarousel>
                            </div>
                            <div className='TrendingTracksCtn'>
                            <h6 className='playListTitle l-padding'>Trending this week</h6>
                            <div className="trendList">
                                {getWeeklyHits(weeklyHits)}
                            </div>
                            </div>
                            
                        </div>
                        <div className="playlist row">
                        <h6 className='playListTitle'>Popular Artist</h6>
                            <div className='album d-flex'>
                            {getData(artistDb)}
                            </div>
                        </div>
                    </div>

                    </div>
                        
                    </div>   


           
     );
}
 
export default Home;