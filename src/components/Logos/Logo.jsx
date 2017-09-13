import React, {Component} from 'react'

export default class Logo extends Component {
 	render() {
   	return (
   		<img className="Logo" src={require('./Logo.png')} alt="Bodega.AI Logo" />
		)
	}
}