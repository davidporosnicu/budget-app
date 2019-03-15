import React, { Component } from "react";

class EditExpensePage extends Component {
  render() {
    return (
      <div>
        <p>Editing the expense with id of {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default EditExpensePage;
