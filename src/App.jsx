import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Beranda from "./Pages/Beranda";
import Favorit from "./Pages/Favorit";
import { useState, useEffect } from "react";


import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
	  const storedUser = localStorage.getItem("user");
	  if (storedUser) {
		setUser(JSON.parse(storedUser));
	  }
	}, []);
  
	const handleLogout = () => {
	  localStorage.removeItem("user");
	  setUser(null);
	};
  

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login/>} />
				<Route path="/beranda" element={<Beranda user={user} onLogout={handleLogout}/>} />
				<Route path="/favorit" element={<Favorit user={user} onLogout={handleLogout}/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
