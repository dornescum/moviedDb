import React, {useState, useContext, useEffect, createContext} from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

export const AppProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('love');
	const [movies, setMovies] = useState([]);
	// ?obiect pt mesaj sa il arat
	const [error, setError] = useState({show: false, msg: ''});

	const fetchMovies = async ()=>{
		setIsLoading(true)
		try{
			// !$s "docs"
		const res = await fetch(`${API_ENDPOINT}&s=${query}`);
		const data = await res.json();
			if(data.Response === 'True'){
				setMovies(data.Search);
				setError({show: false, msg:''})
			} else {
				setError({show: true, msg: data.Error})
			}
			setIsLoading(false)
		} catch (error){
			console.log(error);
		}
	}
	useEffect(()=>{
		fetchMovies()
	}, [query]) //!fara query nu pot face update la search

	return (
		<AppContext.Provider value={{query, setQuery, movies, isLoading, error}}>
			{children}
		</AppContext.Provider>
	);
};


export const useGlobalContext = () => useContext(AppContext);
