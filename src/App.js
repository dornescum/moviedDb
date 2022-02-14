import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Movie from'./components/SingleMovie';
import {Link} from "react-router-dom";


function App() {

	return (
		<div>
			<Link to='/'>
				<h1 className="text-3xl font-bold underline text-center my-8"> Movies?! </h1>
			</Link>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/movies/:id' children={<Movie />} />
			</Switch>

		</div>
	);
}

export default App;
