import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './inputComponent.jsx';

export default class App extends React.Component {

	constructor ( props ) {
		super( props );

		this.state = {
			value : 0,
			symbol : 'm',
			sum : 0
		};
	}

	render () {

		const value = this.state.value;
		const symbol = this.state.symbol;

		return (
			<div>
				M : <InputComponent value={value} /><br/>
				KM : <InputComponent value={value} />
			</div>
		);
	}
}
