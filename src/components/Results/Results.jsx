import React, {Component} from 'react'
import ResultItem from './ResultItem.jsx'
import Row from '../Row/Row.jsx'
import './Results.css'

export default class ResultTable extends Component {
	render() {
		return(
			<Row rowClass="Results">
				<ul className="Result-list">
					{this.props.results.map((result, index) => (
						<ResultItem
							code={result.upc_code}
							height={result.height_inches}
				      id={result.id}
				      key={index}
							name={result.product_name}
							price={result.price_per_unit}
							selectedResult={this.props.selectedResult}
							type={result.product_type}
							width={result.width_inches}
							weight={result.weight_oz}
						/>
					))}
				</ul>
			</Row>
		)
	}
}