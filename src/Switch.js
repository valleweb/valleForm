import React from 'react';

const Switch = ({ label, onChange }) => {
	return (
		<span className = "valleForm__switch">

			<label className = "valleForm__switch__label" htmlFor = "input"> { label } </label>

			<input 
				id = "input" 
				className = "valleForm__switch__input" 
				type = "checkbox"
				onChange = { onChange } />

			<label className = "valleForm__switch__toggle" htmlFor = "input"></label>

		</span>
	)
}

export default Switch;