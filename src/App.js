import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let fetchdata = async () => {
			try {
				let todos = await axios.get("http://localhost:3000/todolist");
				setData([...todos.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchdata();
	}, []);

	return (
		<div>
			<ul>
				{data.map((e) => (
					<li key={e.id}>{e.message}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
