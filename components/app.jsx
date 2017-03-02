import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './inputComponent.jsx';
import OutputComponent from './OutputComponent.jsx';

export default class App extends React.Component {

	constructor ( props ) {
		super( props );

		this.state = {
			value : '',
			symbol : 'm'
		};

		this.handlerChangeToKM = this.handlerChangeToKM.bind( this );
		this.handlerChangeToM = this.handlerChangeToM.bind( this );
	}

	handlerChangeToKM ( e ) {
		this.setState({
			value : e.target.value,
			symbol : 'km'
		});
		
	}

	handlerChangeToM ( e ) {
		this.setState({
			value : e.target.value,
			symbol : 'm'
		});
	}
	

	render () {

		const m = ( this.state.symbol == 'km' ) ? this.state.value*1000 : this.state.value;
		const km = ( this.state.symbol == 'm' ) ? this.state.value/1000 : this.state.value;

		const symbol = this.state.symbol;
		const output = this.state.output;

		return (
			<div>
				M : <InputComponent value={m} onChange={this.handlerChangeToM} /><br/>
				KM : <InputComponent value={km} onChange={this.handlerChangeToKM} />
				<OutputComponent currentState={this.state} />
			</div>

		);
	}
}
