import React from 'react';
import{useGlobalContext} from "../context/AppContext";
import {Link} from "react-router-dom";
import defaultImg from '../assets/cinema.webp'

const Movies = () => {
	const {movies, isLoading} =useGlobalContext();
	return (
		<div className='flex flex-col md:flex-row justify-center items-center'>
			{isLoading && <p>Loading</p>}
			<div className='flex flex-row flex-wrap w-full px-2 md:px-0 md:w-4/5 gap-2 justify-center items-center'>
				{movies.map((item)=>{
					return <div key={item.imdbID} className='bg-stone-100 h-[550px] md:h-[650px] lg:h-[550px] w-full md:w-64 lg:w-72 relative'>
			<Link to={`/movies/${item.imdbID}`}>
				<img src={item?.Poster ==="N/A" ? defaultImg : item.Poster } alt={item?.Title} className='h-96 w-full'/>
			</Link>

						<p className='font-bold text-2xl px-2'>{item?.Title}</p>
							<ul className='flex justify-between w-full absolute bottom-0'>
								<li className='px-2 pb-4 italic capitalize'>{item?.Type}</li>
								<li className='px-2 pb-4 text-blue-600'>{item?.Year}</li>
							</ul>
					</div>
				})}
			</div>

		</div>
	);
};

export default Movies;
