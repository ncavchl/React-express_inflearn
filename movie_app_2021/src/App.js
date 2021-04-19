import React from 'react';
import PropTypes from 'prop-types'; 

class App extends React.Component{
  // counstructor(props) {
  //   super(props);
  //   console.log("hello");
  // }

  state = {
    count:0
  };
  add= () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus= () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("component update");
  }
  componentWillUnmount(){
    console.log("gootbye");
  }

  render (){
    console.log("render");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
    </div>
    )
  }
}

export default App;
