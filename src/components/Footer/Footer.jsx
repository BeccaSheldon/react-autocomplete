import React, {Component} from 'react'
import Link from '../Links/Link.jsx'
import Row from '../Row/Row.jsx'
import './Footer.css'

export default class NavFooter extends Component {
	render() {
		return(
			<Row rowClass="Footer">
				<ul className="Footer-items">
					<li>
						<Link
							className="pulse"
							text="Email"
							url="mailto:rebecca.e.sheldon@gmail.com"
						></Link>
					</li>
					<li>
						<Link
							target="_blank"
							text="Github"
							url="http://github.com/beccasheldon"
						/>
					</li>
					<li>
						<Link
								target="_blank"
								text="LinkedIn"
								url="http://linkedin.com/rebeccasheldon"
							/>
					</li>
					<li>
						<Link
							target="_blank"
							text="Twitter"
							url="http://twitter.com/beccasheldon"
						/>
					</li>
					<li>
						<Link
							target="_blank"
							text="Website"
							url="http://cremedelacode.com"
						/>
					</li>
				</ul>
			</Row>
		)
	}
}