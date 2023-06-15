import React from 'react';

class ClassComponent extends React.Component {
  state = {
    value: 0,
  };

  // plus & minsu
  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleMin = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>hello {this.props.name}</h1>
        <h3>ini class component</h3>
        <button onClick={this.handleMin}> - </button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}> + </button>
      </div>
    );
  }
}

export default ClassComponent;
