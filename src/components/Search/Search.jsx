import React, {Component} from 'react'
import Button from '../Buttons/Button.jsx'
import Input from '../Inputs/Input.jsx'
import Row from '../Row/Row.jsx'
import './Search.css'

export default class Search extends Component {
	render() {
		return(
			<Row rowClass="Search">
			  <Input
			  	changeHandler={this.props.changeHandler}
			  	className="Search-input"
			  	placeholder="Try 'Apples' or 'Candy'"
			  	type="text"
			  />
			  <Button
			    buttonClass="Search-button"
			    clickHandler={this.props.clickHandler}
			    iconClass="search"
			  />
			</Row>
		)
	}
}