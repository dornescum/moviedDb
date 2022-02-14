import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {API_ENDPOINT} from "../context/AppContext";
import {useGlobalContext} from "../context/AppContext";


const SingleMovie = () => {
	const {id}= useParams();
	console.log(id);
	const {isLoading, setIsLoading, error} =useGlobalContext();
	const [movie, setMovie]=useState();

	const fetchMovies =async (url)=>{
		const res = await fetch(url);
		const data =await res.json();
		// console.log(data);
		// setMovie(data)
		if (movie.Response === 'False'){

		} else {
			setMovie(data);
		}
	}
	useEffect(()=>{
		// verificat docs
		fetchMovies(`${API_ENDPOINT}&i=${id}`)
	},[id])
	return (
		<div>
			<p>{movie.Title}</p>
		</div>
	);
};

export default SingleMovie;
