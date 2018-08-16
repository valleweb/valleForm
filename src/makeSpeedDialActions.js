import React from 'react';
import apiCreate from './apiCreate';

export default data => {

	// --------------
	// Ceate a new register state
	// --------------

	if (!data.states.readOnly && !data.states.editable) {
		return (
			<span>

				<valle-speed-dial-action 
					label = "Salvar" 
					label-direction = "left" 
					onClick = { () => { apiCreate(data.props.baseApi, data.props.canonicalApi, data.props.params) } }>
				</valle-speed-dial-action>

			</span>
		)
	}

	// --------------
	// Ready only state
	// --------------

	if (data.states.readOnly && !data.states.editable) {
		return (
			<span>

				<valle-speed-dial-action 
					label = "Editar" 
					label-direction = "left"
					onClick = { data.editCb }>
				</valle-speed-dial-action>

			</span>
		)
	}

	// --------------
	// Editable only state
	// --------------

	if( !data.states.readOnly && data.states.editable) {
		return (
			<span>

				<valle-speed-dial-action 
					label = "Salvar alteraçōes" 
					label-direction = "left"
					onClick = { () => { console.log("Salvar alteraçōes") }}>
				</valle-speed-dial-action>

				<valle-speed-dial-action 
					label = "Excluir" 
					label-direction = "left"
					onClick = { () => { console.log("Excluir") }}>
				</valle-speed-dial-action>

				<valle-speed-dial-action 
					label = "Cancelar" 
					label-direction = "left"
					onClick = { data.cancelCb }>
				</valle-speed-dial-action>

			</span>
		)
	}

}