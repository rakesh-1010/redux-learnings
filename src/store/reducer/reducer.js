const initalState = {
  age: 21,
  history: []
}

const reducer = (state=initalState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "AGE_UP":
      //newState.age += action.value;
      console.log(state.history);
      return{
        ...state,
        age: (state.age + action.value),
        history: state.history.concat(state.age + action.value)
      }
    case "AGE_DOWN":
      //newState.age -= action.value;
      console.log(state.history);
      return{
        ...state,
        age: (state.age - action.value),
        history: state.history.concat(state.age - action.value)
      }
    default:
      return newState;

  }
}

export default reducer;
