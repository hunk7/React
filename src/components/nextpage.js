import React from 'react'

class NextPage extends React.Component {
  constructor() {
    super();
    this.state = {value:''}
    this.HandleChange = this.HandleChange.bind(this)
  }

  HandleChange(event) {
    this.setState({value : event.target.value})
  }

  render() {
    return(
      <form>
        <label>Name : </label>
        <input type="text" Name="name" value={this.state.value} onChange={this.HandleChange} />
        <br />
        <label>Address : </label>
        <input type="text" Name="address" value={this.state.value} onChange={this.HandleChange} />
        <br />
        <input type="Submit" value="submit" />
        <h1>Name: {this.state.value}</h1>
        <h1>Address: {this.state.value}</h1>
      </form>
    );
  }
}

export default NextPage