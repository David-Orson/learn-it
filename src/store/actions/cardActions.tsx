export const createCard = (card: any) => {
  return (dispatch: any, getState: any) => {
    // async call
    dispatch({ type: "CREATE_CARD", card });
  };
};
