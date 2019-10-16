import React, { Component } from "react";
export default class History extends Component {
  render() {
    return (
      <div>
        {this.props.history.map((item, index) => {
          return (
            <div key={index} className="history-list">
              <div className="history-formula">{item.formula.join("")}</div>
              <div
                className="history-input"
                value={item.result}
                onClick={this.props.onHistoryItemClicked}
              >
                ={item.result}
              </div>
            </div>
          );
        })}

        <button id="clear-history" onClick={this.props.onClearHistory}>
          Clear
        </button>
      </div>
    );
  }
}
