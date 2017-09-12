import React, {Component} from 'react'
import Results from '../Results/Results.jsx'
import Row from '../Row/Row.jsx'
import Search from '../Search/Search.jsx'

export default class Autocomplete extends Component {
	render() {
		return (
			<Row rowClass="Autocomplete">
				<Search />
				<Results />
			</Row>
		)
	}
}