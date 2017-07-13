import React from "react";
import ReactDOM from "react-dom";


export default class Settings extends React.Component{

	render(){
	console.log(this.props);
		return(
			<h2>
				Settingsssssssss {this.props.params.setting}
				
			</h2>
			);
	}

}