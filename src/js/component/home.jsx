import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setImputValue]= useState ("")
	const [todos, setTodos] = useState([]);



	return (
		<div className="container text-center">
			<h1>To do List</h1>
			<ul>
				
				<li>
					<input 
			type="text"
			onChange= {(e) => setImputValue (e.target.value)}
			value= {inputValue}
			onkeyPress= {(e) => {
				if (e.onkeyPress ==="Enter"){
					setTodos (todos.concat (inputValue));
					setImputValue ("");
				}
			}}
			placeholder="your morning routine..."></input>
			 
    </li>
       {todos.map((item, index) => (
		<li>
			{item}{""}
			<i 
			class="fa-thin fa-trash"
			onClick={() =>
			setTodos (
				todos.filter(
					(item, currentIndex) => index != currentIndex
				)
			)
			}></i>

		</li>
	   ))}

	</ul>

    <div>{todos.length} tasks</div>

</div>)}

export default Home;
