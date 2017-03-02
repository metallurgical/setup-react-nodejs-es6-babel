import React from 'react';
import ReactDOM from 'react-dom';

export default class InputComponent extends React.Component {

	constructor ( props ) {
		super(props);
	}

	render () {

		return (
			<div><input type="text" value={this.props.value} /></div>
		);
	}
}