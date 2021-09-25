const loginUser = (info) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: info,
    });
  };
};

const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
    });
  };
};
export { loginUser, logoutUser };
