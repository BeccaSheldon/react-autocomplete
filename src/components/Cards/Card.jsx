import React, {Component} from 'react'
import Button from '../Buttons/Button.jsx'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h4>{this.props.text}</h4>
        <Button buttonClass="Buy-button" buttonText="Buy" />
      </div>
    )
  }
}