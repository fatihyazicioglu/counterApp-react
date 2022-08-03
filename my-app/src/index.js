import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';


// TheUseState() cant be hooked in class components, only into function components
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
// As you can see, compared to the class component, the code is much shorter and easier to read and understand. That was one of the reasons why the React team created Hooks.


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