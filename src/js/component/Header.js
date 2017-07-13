import React from "react";

export default class Header extends React.Component{

	handleEvent(e){
		console.log(e.target.value)
		this.props.changeTitle(e.target.value);
	}

	render(){
		return(
			<h1>
							 	{this.props.title}
							 	<br/>
				<input onChange={this.handleEvent.bind(this)}/>
			</h1>
			);
	}

}