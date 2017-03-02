import React from 'react';
import ReactDOM from 'react-dom';

export default function OutputComponent( props ) {
	return <div>State now : value = {props.currentState.value}, conversion = from {props.currentState.symbol}</div>
}