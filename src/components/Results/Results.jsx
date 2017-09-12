import React, {Component} from 'react'
import DateFormat from 'dateformat'
import Row from '../Row/Row.jsx'

export default class ResultTable extends Component {
	formatDate(unixTimestamp) {
		let ms = new Date(unixTimestamp * 1000)
		let formattedDate = DateFormat(ms, 'mmmm d')
		return formattedDate
	}

	render() {
		return(
			<Row rowClass="Results">

			</Row>
		)
	}
}