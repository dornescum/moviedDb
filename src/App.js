import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Movie from'./components/SingleMovie'


function App() {

	return (
		<div>
			<h1 className="text-3xl font-bold underline text-center"> Hello world! </h1>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/movie/:id' children={<Movie />}>
					<Home />
				</Route>

			</Switch>

		</div>
	);
}

export default App;
