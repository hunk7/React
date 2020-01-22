import React, {component} from 'react'
import Conditional from '../Conditional'

class Todo extends component {
	constructor(){
		super()
		this.state = {
			isLoading : true
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		},1500)
	}

	render() {
		return(
			<div>
				<Conditional isLoading={this.state.isLoading}/>
			</div>
		)
	}
}

export default Todo