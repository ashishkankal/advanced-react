import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  state = {
    answer: 42
  };
  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await asyncFunc()
    });
  }

  render() {
    return (
      <div>
        <h2>Hello Class Component -- {this.state.answer}</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));