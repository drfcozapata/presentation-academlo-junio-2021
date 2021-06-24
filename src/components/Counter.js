import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>
					{ counter }
				</h2>
				<div className="flex">
					<button 
						type="button" 
						onClick={
							() => setCounter(counter + 1)
							}
					>
						Uno más
					</button>
					<button 
						type="button" 
						onClick={
							() => setCounter(counter - 1)
							}
					>
						Uno menos
					</button>
				</div>
		</div>
	)
}

export default Counter;