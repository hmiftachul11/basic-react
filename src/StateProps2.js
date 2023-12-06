import React, { Component } from 'react'

export default class StateProps2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: "Bakso"
        }
    }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.setState({ makanan: "Mie Ayam" })}>Ganti Makanan</button>
      </div>
    )
  }
}
