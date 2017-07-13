import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import Settings from "./../pages/Settings";
import Featured from "./../pages/Featured";
import Archives from "./../pages/Archives";


export default class Layout extends React.Component{

	constructor(){
		super();
		this.state = {name:"Hey!!!"}
	}

	changeTitle(title){
		
		this.setState({name:title});

		console.log(this.state.name);
	}
	render(){
		console.log(this.props);
		return(
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title = {this.state.name}/>
				<Link to="archives"> Archives </Link>
				<Link to="settings"><button class =  "btn btn-success">Settings</button></Link>
				{this.props.children}
				<Footer/>
			</div>
			);
	}

}