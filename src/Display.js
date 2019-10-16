import React, { Component } from "react";
export default class Display extends Component {
  render() {
    return (
      <div class="display-area">
        <form class="display-textarea">
          <textarea
            class="textarea-formula"
            value={this.props.formula.join("")}
            readonly
          ></textarea>
          <textarea
            class="textarea-input"
            readonly
            value={this.props.input}
          ></textarea>
        </form>
      </div>
    );
  }
}
