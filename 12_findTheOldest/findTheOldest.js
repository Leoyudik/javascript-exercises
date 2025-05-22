const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(array) {
    const ages = array.map(findIdade);
    function findIdade(person){
      if ( "yearOfDeath" in person == false){ 
        const dateToday = new Date().getFullYear();//Pega ano atual
        Object.defineProperty(person, "yearOfDeath", {value:dateToday})
      }
      if ("yearOfDeath" in person){
        let age = (person.yearOfBirth - person.yearOfDeath)*-1;
      return { name: person.name,
              age: age
      }
      }
    }
    const oldest = ages.sort(function(a,b) {
      return b.age - a.age;
    })
    return oldest.at(0);
};

//date

findTheOldest(people)
// findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;

