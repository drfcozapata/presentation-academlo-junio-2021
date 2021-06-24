import { useState } from "react";

const Bulb = () => {
	const [state, setState] = useState("ON");
	return (
		<div>
			<h6>Mi bombilla está: {state}</h6>
			<button
				onClick={() => {
					if (state === "ON") {
						setState("OFF");
						return;
					}
					setState("ON");
				}}
			>
				Intercambiar
			</button>
		</div>
	);
}

export default Bulb;