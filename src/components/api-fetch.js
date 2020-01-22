import React from 'react'
class Api extends React.Component {
	constructor(){
		super()
		this.state = {
			isLoggedIn : false,
			character: [],
			loading: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn,
			}
		})
	}

	componentDidMount() {
		this.setState({loading:true})
		fetch("https://swapi.co/api/people/1")
			.then(response => response.json())
			.then(data => {
				this.setState({
					loading: false,
					character: data
				})
			})
	}

	render() {
		const buttonValue = this.state.isLoggedIn === true ? "Log Out" : "Log In"
		const load = this.state.loading === true ? "loading..." : this.state.character.name
		return(
			<div>
				<button onClick={this.handleChange}>{buttonValue}</button>
				<h1>{load}</h1>
			</div>
		)
	}
}

export default Api