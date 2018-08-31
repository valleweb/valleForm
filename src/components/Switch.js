import React from 'react';

const Switch = ({ label, readOnly = false, onChange }) => {

	const switchState = readOnly ? "valleForm__switch--disabled" : "";

	return (
		<span className = {`valleForm__switch ${switchState}`}>

			<label className = "valleForm__switch__label" htmlFor = "input"> { label } </label>

			<input
				id = "input"
				className = "valleForm__switch__input"
				type = "checkbox"
				disabled = { readOnly }
				onChange = { onChange } />

			<label className = "valleForm__switch__toggle" htmlFor = "input"></label>

		</span>
	)
}

export default Switch;
