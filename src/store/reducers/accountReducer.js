import { setToken } from "../../services/api";

// const local = JSON.parse(localStorage.getItem("user"));
// const initialState = {
//   status: local ? local.status : null,
//   name: local ? local.name : null,
//   email: local ? local.email : null,
//   token: local ? local.token : null,
// };
const initialState = {
  status: "online",
  name: "Mr. Krabs Fine Ass",
  email: "krabs@gmail.com",
  token: "",
};

setToken(initialState.token);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      setToken(action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        status: action.payload.status,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "logout":
      localStorage.removeItem("user");
      return {
        ...state,
        status: null,
        name: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
