import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.counterID = setInterval(() => this.tick(this.state.count + 1), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.counterID);
  }
  tick(newValue) {
    this.setState({ count: newValue });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.count}.</h2>
      </div>
    );
  }
}
// This code is perfect, because here i don't use can reload my component without overwrite other components with ReactDOM.render
// Also i learned about use state correct, in my TCC i use codes as for example this.state.x = 'y', and this is incorrect
