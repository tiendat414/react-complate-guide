import React from 'react';
const person = (props) => {
	return (
		<div>
			<p>This is Person Name is {props.name} Age is {props.age}</p>
			<p>This is child Props is {props.children}</p>
			<input type="text" onChange={props.change} value={props.name}/>
		</div>		
		)
};
export default person;