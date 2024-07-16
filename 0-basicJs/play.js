const person = {
  name: "Pedro",
  age: 28,
  greet() {
    console.log(`Hi, im ${this.name}`);
  },
  hobbies: ["Tennis", "Hangout", "Series"],
  sayHobbies() {
    // console.log('My hobbies:');
    // for(let hobbie of this.hobbies){
    //     console.log(hobbie)
    // }
    console.log("my hobbies:");
    this.hobbies.map((hobbie) => {
      console.log(hobbie);
    });
  },
};

// let addHobbies = person.hobbies

// let copiedHobbies = [...addHobbies]
// console.log(copiedHobbies);

// const multipleArgs = (...args) => {
//     return args
// }

// let checking = multipleArgs(1,2,3,4)

// console.log(checking);