import React, { Component } from 'react';
import makeJsxRows from './makeJsxRows';
import makeSpeedDialActions from './makeSpeedDialActions';
import Snackbar from './Snackbar';
import Switch from './Switch';
import apiCreate from './apiCreate';
import addFieldsValues from './addFieldsValues'

class ValleForm extends Component {

	constructor() {
		super()
		this.state = {
			filterByVisibleScreen: false,
			readOnly: false,
			editable: false,
			valleSpeedDialRef: null,
			defaultFieldsValues: null,
			feedback: {
				open: false,
				text: '',
				type: ''
			}
		}
	}

	// -----------
	// Control vizualization only and editable states
	// -----------

	componentDidMount() {

		if(this.props.readOnly) {
			this.setState({ readOnly: true })
		}

		if (this.props.values) {
			addFieldsValues(this.props.values)
			this.setState({ defaultFieldsValues: this.props.values });
		}

		// -----------
		// TODO: Remove this. Use a React memory reference instead.
		// -----------

		this.setState({ valleSpeedDialRef: document.getElementById('valleSpeedDial') })

	}

	makeFieldsEditable() {
		this.setState({ readOnly: false, editable: true });
		this.state.valleSpeedDialRef.open = false;
	}

	removeFieldsEditable() {
		this.setState({ readOnly: true, editable: false });
		this.state.valleSpeedDialRef.open = false;
	}

	cancelFieldsEditable() {
		this.setState({ readOnly: true, editable: false });
		this.state.valleSpeedDialRef.open = false;
		addFieldsValues(this.state.defaultFieldsValues);
	}

	// -----------
	// Control visible fields
	// -----------

	changeVisibleScreen() {
			this.state.filterByVisibleScreen
			? this.setState({filterByVisibleScreen: false})
			: this.setState({filterByVisibleScreen: true})
	}

	// -----------
	// Control feedbacks status
	// -----------

	showFeedback(text, type) {

		// Clear old feedback
		this.setState({ feedback: {  open: false } })

		// Trick for second state change
		setTimeout(() => {
			this.setState({ feedback: { open: true, text: text, type: type } })
		}, 100);

		this.state.valleSpeedDialRef.open = false;

	}

	// -----------
	// Control keyboard actions
	// -----------

	handleKeyboard(event) {

		const pressEnter = event.which === 13 || event.keyCode === 13;

		if (pressEnter) {
			event.preventDefault();
			apiCreate(
				this.props.baseApi,
				this.props.canonicalApi,
				this.props.params,
				this.showFeedback.bind(this)
			)
		}

	}

	render() {

		// -----------
		// Control rows
		// -----------

		const $rows = makeJsxRows(
			this.props.rows,
			this.state.filterByVisibleScreen,
			this.state.readOnly
		);

		// -----------
		// Control feedbacks reports
		// -----------

		const $feedback =
			this.state.feedback.open
			? <Snackbar report = { this.state.feedback.text } type = { this.state.feedback.type }/>
			: null;

		return (
			<div className = "valleForm" onKeyPress = { this.handleKeyboard.bind(this) }>

				{/* ------- Header ------- */}

				<Switch 
					label = "Limitar campos"
					readOnly = { this.state.readOnly }
					onChange = { () => this.changeVisibleScreen() } />

				{/* ------- Main ------- */}

				{ $rows }

				{/* ------- Footer ------- */}

				<span className = "valleForm__sub"> * Campos obrigatórios </span>

				<valle-speed-dial id = "valleSpeedDial" class = "valleForm__speedDial">

					{
						makeSpeedDialActions({
							states: this.state,
							props: this.props,
							editCb: this.makeFieldsEditable.bind(this),
							cancelCb: this.cancelFieldsEditable.bind(this),
							feedbackCb: this.showFeedback.bind(this),
							formCb: this.removeFieldsEditable.bind(this)
						})
					}

				</valle-speed-dial>

				{ $feedback }

			</div>
		)

	}

}

export default ValleForm;
