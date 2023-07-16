import MovieList from "./MovieList";
import {React, useState,useEffect } from "react";

//import data from './data.json'
function Home(){

    const [data, setData] = useState([]);
    async function getTrndingMovies(){
        const url =process.env.REACT_APP_SERVER_URL;
        //const url =`https://movies-api-ibl9.onrender.com`;
        const response = await fetch(`${url}/trending`);
        const movies = await response.json();
       setData(movies)
    }
    useEffect(() => {
        getTrndingMovies()
        
    }, []);

    return(
        <>
        <MovieList data={data}/>
        </>
    )
}

export default Home;