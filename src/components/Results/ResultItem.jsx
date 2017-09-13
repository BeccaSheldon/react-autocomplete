import React, {Component} from 'react'
import './Results.css'

export default class ResultItem extends Component {
  render() {
    return (
      <li className="Result-list-items" onClick={this.props.selectedResult}>
        <ul>
          <li>{this.props.name}</li>
          <li>{'$' + this.props.price}</li>
        </ul>
      </li>
    )
  }
}