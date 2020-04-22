const initState = {
  cards: [
    {
      id: "1",
      title: "TypeScript",
      content: "TypeScript is a superset of JavaScript",
    },
    {
      id: "2",
      title: "React",
      content:
        "React is a JavaScript library with many features for managing UI",
    },
    {
      id: "3",
      title: "Redux",
      content: "Redux creates an central store that contains the state",
    },
  ],
};

const cardReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_CARD":
      console.log("card created", action.card);
  }
  return state;
};

export default cardReducer;
