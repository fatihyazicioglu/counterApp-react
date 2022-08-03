import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

// functional component and hooks!

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }

// const el = <Counter />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );