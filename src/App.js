import './App.css';
import Home from './Pages/Home/Home';
import "./style.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Galleries from './Pages/Galleries/index';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/galareya' element={<Galleries />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
