export const createCard = (card: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    // async call
    const firestore = getFirestore();
    firestore
      .collection("cards")
      .add({
        ...card,
        authorFirstName: "David",
        authorLastName: "Orson",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_CARD", card });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_CARD_ERROR", err });
      });
  };
};
