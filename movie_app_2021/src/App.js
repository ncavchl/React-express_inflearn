import React from 'react';
import PropTypes from 'prop-types'; 

class App extends React.Component{
  state = {
    count:0
  };
  add= () => {
    console.log("Add");
    this.state.count = -1;
  };
  minus= () => {
    console.log("minus");
    this.state.count = 0;
  };

  render (){
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
