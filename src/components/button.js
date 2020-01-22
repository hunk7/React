import React from 'react'
class Button extends React.Component {
	constructor(){
		super()
		this.state = {
			isLoggedIn : false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	render() {
		const buttonValue = this.state.isLoggedIn === true ? "Log Out" : "Log In"
		return(
			<div>
				<button onClick={this.handleChange}>{buttonValue}</button>
			</div>
		)
	}
}

export default Button