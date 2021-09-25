const appendMessage = (info) => {
  return (dispath) => {
    dispath({
      type: "append",
      payload: info,
    });
  };
};
const storeAllMessages = (info) => {
  return (dispath) => {
    dispath({
      type: "store-all",
      payload: info,
    });
  };
};
export { appendMessage, storeAllMessages };
