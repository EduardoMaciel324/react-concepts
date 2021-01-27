import React from "react";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
class CountByClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
export { Toggle, CountByClick };
