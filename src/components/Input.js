import { useState } from "react";

const Input = () => {
	const [value, setValue] = useState('Hola muchachos!!')
	return (
		<div>
			<input 
				value={value} 
				onChange={e => setValue(e.target.value)} 
			/>
			<button onClick={() => setValue('Adiós muchachos :(')}>
				{' '}
				Cambiar valor{' '}
			</button>
		</div>
	)
}

export default Input;