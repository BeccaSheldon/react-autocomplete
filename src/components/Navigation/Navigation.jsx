import React, {Component} from 'react'
import Link from '../Links/Link.jsx'
import Row from '../Row/Row.jsx'
import './Navigation.css'

export default class NavHeader extends Component {
	render() {
		return (
			<Row rowClass="Navigation">
				<ul className="Navigation-items">
					<li>
						<Link
							className="pulse"
							target="_blank"
							text="Source"
							url="https://github.com/ashwathnrajan/interview3"
						></Link>
					</li>
				</ul>
			</Row>
		)
	}
}
