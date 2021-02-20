import { createStore } from "redux";

// Action generator - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count,
  };
};

const resetCount = ({ reset = 0 } = {}) => {
  return {
    type: "RESET",
    reset,
  };
};

// Reducers
// 1. Reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "SET":
      return { count: action.count };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store
// increment, decrement, reset

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(setCount({ count: 100 }));

store.dispatch(resetCount());

store.dispatch({
  type: "RESET",
});
