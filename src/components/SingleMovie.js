import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {API_ENDPOINT} from "../context/AppContext";
import defaultImg from '../assets/cinema.webp';



const SingleMovie = () => {
	const {id}= useParams();
	const [movie, setMovie]=useState();
	const [error, setError]=useState({show:false, msg: ''});
	const [isLoading, setIsLoading]=useState(true);
	// console.log(movie);

	const fetchMovies =async (url)=>{
		const res = await fetch(url);
		const data =await res.json();
		// console.log(data);
		// setMovie(data)
		if (data.Response === 'False'){
			setError({show: true, msg: data.Error})
			setIsLoading(false)
		} else {
			setMovie(data);
			setIsLoading(false)

		}
	}
	useEffect(()=>{
		// verificat docs
		fetchMovies(`${API_ENDPOINT}&i=${id}`)
	},[id])

	if(isLoading){
		return <div>Loading...</div>
	}
	if (error.show){
		return <div>
			<h1>{error.msg}</h1>
			<Link to="/">Home</Link>
		</div>
	}

	return (
		<div className='flex flex-col md:flex-row bg-zinc-50 rounded-sm mx-2 md:mx-12 lg:mx-48 my-32 '>
			<div className='basis-1/2 flex justify-center items-center'>
				<img src={movie?.Poster==="N/A" ? defaultImg : movie.Poster} alt={movie.Title}/>
			</div>
			<div className=' flex flex-start flex-col  basis-1/2  pt-8 px-4'>
				<p className='text-2xl py-2'>{movie?.Title}</p>
				<p className='text-justify py-2'>{movie.Plot}</p>
				<p className='py-2 italic'>Actors : {movie.Actors}</p>
				<p className='py-2'>Year : {movie?.Released}</p>
				<p className='py-2'>IMDB rating : {movie.imdbRating}</p>
				<p className='py-2'>Awards : {movie.Awards}</p>
				<p className='py-2'>Box Office : {movie.BoxOffice}</p>
				<Link to="/" className='font-bold bg-blue-400 p-1 mb-4 rounded-sm text-center'>Home</Link>
			</div>
		</div>
	);
};

export default SingleMovie;
