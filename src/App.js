import './App.css';
import Login from './Login.js'
import React,{useState,useEffect} from 'react';
import { getTokenUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

const spotify =new SpotifyWebApi();

function App() {
  const [{ user,token },dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenUrl();
    window.location.hash="";
    const _token =hash.access_token;
    
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user: user,
        });

      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    
  },[token,dispatch]);

  
  return (
    <div className="App">
      {!token && <Login /> }
      { token && <Player spotify/> }
      
    </div>
  );
}

export default App;