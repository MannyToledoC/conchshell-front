// const initialState = {
//   data: [],
// };
const initialState = {
  data: [
    { id: "1", from: "Client", message: "lorem ipsum..." },
    { id: "2", from: "Bot", message: "Beep Boop Boop Bop..." },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "store-all":
      return {
        ...state,
        data: action.payload,
      };
    case "append":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
