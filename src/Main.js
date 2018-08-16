import React, { Component } from 'react';
import makeJsxRows from './makeJsxRows';
import post from './post';

class ValleForm extends Component {

	constructor() {
		super()
		this.state = {
			filterByVisibleScreen: false
		}
	}

	changeVisibleScreen() {
		this.state.filterByVisibleScreen
			? this.setState({filterByVisibleScreen: false})
			: this.setState({filterByVisibleScreen: true})
	}

	render() {

		const $rows = makeJsxRows(
			this.props.rows, 
			this.state.filterByVisibleScreen
		);

		return (
			<div className = "valleForm">

				<valle-switch 
					class = "valleForm__switch"
					label-left="Limitar campos"
					onClick = { () => this.changeVisibleScreen() }>
				</valle-switch>

				{ $rows }

				<valle-fab
					class = 'valleForm__button'
					onClick = { () => {
						post(this.props.baseApi,
								 this.props.canonicalApi,
								 this.props.params)} }>
				</valle-fab>

			</div>
		)

	}

}

export default ValleForm;