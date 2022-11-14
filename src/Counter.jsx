
// A compone
import { createSignal, createEffect } from 'solid-js'

/*
Notes:
1. In solid components only run once
2. Reactivity has nothing to do with the component, components are just function 

*/

const [count, setCount] = createSignal(0);

export default function Counter(){
	
	// Add function
	function add() {
		setCount(count() + 1);
	}

	// Remove function
	function remove() {
		setCount(count() - 1);
	}

	createEffect(() => {
		console.log(`Hello ${count()}`);
	})


	return (
	<div>
		<button onClick={add}>Add</button>
		<button onClick={remove}>Remove</button>
		<p>Current count is {count()}</p>
	</div>
	);
}