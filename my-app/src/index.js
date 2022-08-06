import React from "react";
import ReactDOM from "react-dom";
// import './style.css';

// TheUseState() cant be hooked in class components, only into function components
class Counter extends React.Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById("root"));

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

// a fully functional React+Redux app!
// This might seem too much code for a simple counter app, however this architecture is great when building large scale apps, that use many components, multiple levels of nesting and manage a lot of data.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { connect } from 'react-redux';
// import './style.css';

// // Action creator
// function incrementCounter(num) {
//   return { type: 'INCREMENT', num: num }
// }

// const initialState = {
//   count: 0
// };
// // Reducer function
// function reducer(state = initialState, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.num };
//     default:
//       return state;
//   }
// }

// function Counter(props) {
//   function handleClick() {
//     props.incrementCounter(1);
//   }
//     return <div>
//     <p>{props.count}</p>
//     <button onClick={handleClick}>Increment</button>
//     </div>;
// }

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }
// const mapDispatchToProps = {
//   incrementCounter
// }

// const store = createStore(reducer);

// const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// const el = <Provider store={store}>
//           <Counter/>
//         </Provider>;

// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );
