const greeting1 = (name) => {
  // primeiro chamo o greeting1
  console.log("Hello, " + name + "!");

  //   segundo, chamo o greeting2
  greeting2(name);

  //   volto para o greeting1, removendo o greeting 2
  console.log("Getting ready to say goodbye...");

  //   "segundo", chamo o bye no lugar onde esta sendo ocupado pelo greeting2
  bye();

};

const greeting2 = (name) => {
  console.log("How are you, " + name + "?");
};

const bye = () => {
  console.log("Ok, bye!");
};

greeting("Marcos");
