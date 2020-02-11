import React from 'react';
import makeDefaultsSpeedDialActions from './makeDefaultsSpeedDialActions';

export default data => {

	// --------------
	// Filter actions by status
	// --------------

	const $createActions = data.props.buttons
		.filter(button => button.status == "create")
		.map(button => makeDefaultsSpeedDialActions(button, data))

	const $retrievalActions = data.props.buttons
		.filter(button => button.status == "retrieval")
		.map(button => makeDefaultsSpeedDialActions(button, data))

	const $updateActions = data.props.buttons
		.filter(button => button.status == "update")
		.map(button => makeDefaultsSpeedDialActions(button, data))

	// --------------
	// Ceate a new register state
	// --------------

	if (!data.states.readOnly && !data.states.editable) {
		return (
			<span className = "valleForm__speedDial__actions">
				{ $createActions }
			</span>
		)
	}

	// --------------
	// Ready only state
	// --------------

	if (data.states.readOnly && !data.states.editable) {
		return (
			<span className = "valleForm__speedDial__actions">
				{ $retrievalActions }
			</span>
		)
	}

	// --------------
	// Editable only state
	// --------------

	if(!data.states.readOnly && data.states.editable) {
		return (
			<span className = "valleForm__speedDial__actions">
				{ $updateActions }
			</span>
		)
	}

}
