import React, { Component } from "react";
export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <div className="row-1">
          <div className="button" onClick={this.props.onParenthesis}>
            (
          </div>
          <div className="button" onClick={this.props.onParenthesis}>
            )
          </div>
          <div className="button-clear" onClick={this.props.onClear}>
            AC
          </div>
          <div className="button-backspace" onClick={this.props.onBackspace}>
            CE
          </div>
        </div>
        <div className="row-1">
          <div className="button" onClick={this.props.onDigit}>
            1
          </div>
          <div className="button" onClick={this.props.onDigit}>
            2
          </div>
          <div className="button" onClick={this.props.onDigit}>
            3
          </div>
          <div className="button-action" onClick={this.props.onOperator}>
            *
          </div>
        </div>
        <div className="row-1">
          <div className="button" onClick={this.props.onDigit}>
            4
          </div>
          <div className="button" onClick={this.props.onDigit}>
            5
          </div>
          <div className="button" onClick={this.props.onDigit}>
            6
          </div>
          <div className="button-action" onClick={this.props.onOperator}>
            /
          </div>
        </div>
        <div className="row-1">
          <div className="button" onClick={this.props.onDigit}>
            7
          </div>
          <div className="button" onClick={this.props.onDigit}>
            8
          </div>
          <div className="button" onClick={this.props.onDigit}>
            9
          </div>
          <div className="button-action" onClick={this.props.onOperator}>
            -
          </div>
        </div>
        <div className="row-1">
          <div className="button" onClick={this.props.onDigit}>
            0
          </div>
          <div className="button" onClick={this.props.onDecimal}>
            .
          </div>
          <div className="button-equal" onClick={this.props.onEqual}>
            =
          </div>
          <div className="button-action" onClick={this.props.onOperator}>
            +
          </div>
        </div>
      </div>
    );
  }
}
