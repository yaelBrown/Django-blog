import React, { Component } from 'react'

export default class EditableTable extends Component {
  constructor(props) {
    super()
  }

  componentWillUnmount() {
    console.log("editable table mounted")
  }

  render() {
    return (
      <div>
        <H1>Editable Table Component</H1>
      </div>
    )
  }
}
