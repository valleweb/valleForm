import React, { Component } from 'react';
import makeJsxRows from './makeElements/makeJsxRows';
import makeSpeedDialActions from './makeElements/makeWebcomponents/makeSpeedDialActions';
import Snackbar from './components/Snackbar';
import Switch from './components/Switch';
import apiCreate from './rest/apiCreate';
import addFieldsValues from './fieldsControl/addFieldsValues'
import cleanFields from './fieldsControl/cleanFields';

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
	// Control dynamic values
	// -----------

	componentDidUpdate() {

		if (this.props.values && !this.state.defaultFieldsValues) {
			addFieldsValues(this.props.values)
			this.setState({ defaultFieldsValues: this.props.values });
		}

	}

	// -----------
	// Control vizualization only and editable states
	// -----------

	componentDidMount() {

		if (this.props.readOnly) {
			this.setState({ readOnly: true })
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
		addFieldsValues(this.state.defaultFieldsValues);
		this.setState({ readOnly: true, editable: false });
		this.state.valleSpeedDialRef.open = false;
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
	// Set form to insert mode
	// -----------

	makeFieldsDefault() {
		cleanFields();
		this.setState({ readOnly: false, editable: false });
		this.state.valleSpeedDialRef.open = false;
	}

	// -----------
	// Control keyboard actions
	// -----------

	handleKeyboard(event) {

		// const pressEnter = event.which === 13 || event.keyCode === 13;

		// if (pressEnter) {
		// 	event.preventDefault();
		// 	apiCreate(
		// 		this.props.baseApi,
		// 		this.props.canonicalApi,
		// 		this.props.params,
		// 		this.showFeedback.bind(this)
		// 	)
		// }

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

		if (this.props.rows.length > 0) { // Await the rows for renderize all component

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
								newCB:  this.makeFieldsDefault.bind(this),
								formCb: this.removeFieldsEditable.bind(this)
							})
						}

					</valle-speed-dial>

					{ $feedback }

				</div>
			)

		} else {

		// -----------
		// TODO: Add loading.
		// -----------

			return <span></span>

		}

	}

}

export default ValleForm;
