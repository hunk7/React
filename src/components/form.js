import React from 'react'
class Form extends React.Component {
	constructor(){
		super()
		this.state = {
			isLoggedIn : false,
			character: [],
			loading: false,
			firstName: "",
			lastName: "",
			check: true,
			gender: "",
			favColor:""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleInChange = this.handleInChange.bind(this)
	}

	handleChange() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn,
			}
		})
	}

	handleInChange(event) {
		const {name, value , type, check} = event.target
		type === "checkbox" ? this.setState({[name]: check}) : this.setState({[name]: value})
		// this.setState({ [name]: value })
	}

	handleInChange(event) {
		const {name, value , type, check} = event.target
		type === "checkbox" ? this.setState({[name]: check}) : this.setState({[name]: value})
		// this.setState({ [name]: value })
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

// formik lib for forms

	render() {
		const buttonValue = this.state.isLoggedIn === true ? "Log Out" : "Log In"
		const load = this.state.loading === true ? "loading..." : this.state.character.name
		return(
			<div>
				<form onChange={this.handleSubmit}> 
					<input type="text"value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleInChange}/>
					<br />
					<input type="text"value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleInChange}/>
					<br />
					<h1>{this.state.firstName} {this.state.lastName}</h1>
					<br />
					<textarea value={"textarea"} />
					<br />
					<label>
						<input  type="checkbox" name="check" check={this.state.check} onChange={this.handleInChange} />
					Agreed To Condition ?
					</label>
					<br />
					<label>
						<input  type="radio" name="gender" value="male" check={this.state.gender === "male"} onChange={this.handleInChange} />
					Male 
					</label>
					<br />
					<label>
						<input  type="radio" name="gender" value="female" check={this.state.gender === "female"} onChange={this.handleInChange} />
					Female 
					</label>
					<br />
					<select value={this.state.favColor} onChange={this.handleInChange} name="favColor">
						<option value="blue">blue</option>
						<option value="green">green</option>
						<option value="orange">orange</option>
						<option value="black">black</option>
						<option value="red">red</option>
					</select>
				</form>
				<button onClick={this.handleChange}>{buttonValue}</button>
				<br />
				<h1>Api data:  {load}</h1>
				<h1>you are a:  {this.state.gender}</h1>
				<br />
				<h2>color is : {this.state.favColor}</h2>
			</div>
		)
	}
}

export default Form