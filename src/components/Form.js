import React from 'react';
import{useGlobalContext} from "../context/AppContext";


const Form = () => {
	const{query, setQuery, error}=useGlobalContext();
	// console.log(query);
	return (
		<div className='flex items-center justify-center my-8'>
			<form className='bg-stone-200' onSubmit={(e)=>{e.preventDefault()}}>
				<input type="text" id='search' placeholder='search' className='border w-60 md:w-96 pl-4' value={query}
					   onChange={(e)=>{setQuery(e.target.value)}}/>
				{error.show && <div >{error.msg}</div>}
			</form>
		</div>
	);
};

export default Form;
