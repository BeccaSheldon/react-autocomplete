import React, {Component} from 'react'
import base64 from 'base-64'
import BlockLoader from '../Loaders/BlockLoader.jsx'
import Card from '../Cards/Card.jsx'
import Credentials from '../Config/Credentials.json'
import Results from '../Results/Results.jsx'
import Row from '../Row/Row.jsx'
import Search from '../Search/Search.jsx'

export default class Autocomplete extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			page: 1,
			query: '',
			results: [],
			resultsTotal: '',
			selectedItem: '',
			showSelectedItem: false
		}
	}

	// Update state as user types
	setQuery(event) {
		this.clearSelected()
		this.setState({query: event.target.value})
		this.runSearch()
	}

	// Check if there is a valid query (for now just any letter will do)
	checkQuery() {
		if (this.state.query !== '' || this.state.query !== ' ' || this.state.query !== undefined) return true
	}

	// If the query is valid, kickoff the request methods, otherwise reset the state and the UI
	runSearch() {
		this.checkQuery() ? this.createRequest() : this.clearAll()
	}

	// Set up the request variables then call the method that makes the request
	createRequest() {
		let options = {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'Authorization': 'Basic ' + base64.encode(Credentials.username + ':' + Credentials.password)
			}
		}
		let api = 'https://www.bodega.ai/api/items'
		let url = `${api}/?page=${this.state.page}&search=${this.state.query}`
		this.makeRequest(url, options)
	}

	// Hit the API and update the state with results
	makeRequest(url, options) {
		this.setState({loading: true})
	  fetch(url, options)
		.then(result => result.json())
	  .then((data) => {
			this.setState({
				loading: false,
				results: data.results,
				resultsTotal: data.count
			})
	  })
		.catch(err => new Error(console.log('Hit a snag reaching API endpoint! Error code: ' + err)))
	}

	// Reset state for the query and results
	clearResults() {
		this.setState({
			query: '',
			results: [],
			resultsTotal: ''
		})
	}

	//  Reset state for selected item
	clearSelected() {
		this.setState({
			selectedItem: '',
			showSelectedItem: false
		})
	}

	// Clear text from the input field
	clearInput() {
		let elements = [].slice.call(document.getElementsByClassName('Search'))
		elements.map((input) => {
			return input.value = ''
		})
	}

	// Reset all state properties and clear the search input field
	clearAll() {
		this.clearResults()
		this.clearSelected()
		this.clearInput()
	}

	// Get the clicked on item
	handleSelect(event) {
	  console.log("The selected item is: ", event.target.innerText)
		this.setState({selectedItem: event.target.innerText})
		this.showSelectedItem()
	}

	// Set statte to show the selected item (see conditional in render method lines 127-132)
	showSelectedItem() {
		this.clearResults()
		this.setState({showSelectedItem: true})
	}

	render() {
		return (
			<Row rowClass="Autocomplete">
	      <h3>Type in an item name to find possible results.</h3>
				<Search changeHandler={this.setQuery.bind(this)} value={this.state.query} />
				{this.state.loading && <BlockLoader />}
				{!this.state.loading &&
					<Results
						results={this.state.results}
						selectedResult={this.handleSelect.bind(this)}
					/>
				}
				{this.state.showSelectedItem &&
					<Row rowClass="Selected">
						<Card text={this.state.selectedItem} />
					</Row>
				}
			</Row>
		)
	}
}