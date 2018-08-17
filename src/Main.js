import React, { Component } from 'react';
import makeJsxRows from './makeJsxRows';
import makeSpeedDialActions from './makeSpeedDialActions';

class ValleForm extends Component {

	constructor() {
		super()
		this.state = {
			filterByVisibleScreen: false,
			readOnly: false,
			editable: false
		}
	}

	componentDidMount() {
		if(this.props.readOnly) {
			this.setState({ readOnly: true })
		}
	}

	changeVisibleScreen() {
		this.state.filterByVisibleScreen
			? this.setState({filterByVisibleScreen: false})
			: this.setState({filterByVisibleScreen: true})
	}

	makeFieldsEditable() {
		this.setState({ readOnly: false });
		this.setState({ editable: true });
		this.refs.valleSpeedDial.open = false;
	}

	cancelFieldsEditable() {
		this.setState({ readOnly: true });
		this.setState({ editable: false });
		this.refs.valleSpeedDial.open = false;
	}

	render() {

		const $rows = makeJsxRows(
			this.props.rows, 
			this.state.filterByVisibleScreen,
			this.state.readOnly
		);

		return (
			<div className = "valleForm">

				<valle-switch 
					class = "valleForm__switch"
					label-left = "Limitar campos"
					disabled = { this.state.readOnly }
					onClick = { () => this.changeVisibleScreen() }>
				</valle-switch>

				{ $rows }

				<span className = "valleForm__sub"> * Campos obrigatórios </span>

				<valle-speed-dial ref = 'valleSpeedDial' class = 'valleForm__speedDial'>
	
					{ 
						makeSpeedDialActions({
							states: this.state,
							props: this.props,
							editCb: this.makeFieldsEditable.bind(this),
							cancelCb: this.cancelFieldsEditable.bind(this)
						}) 
					}

				</valle-speed-dial>

			</div>
		)

	}

}

export default ValleForm;