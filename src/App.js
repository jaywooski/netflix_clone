import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<>
			{/* Start here */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
