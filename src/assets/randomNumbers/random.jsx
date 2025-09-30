export function randomNumberList(listSize) {
  //range of numbers is 0-151 for pokemon
  let array = [];
  while (array.length < listSize) {
    let newNumber = Math.floor(Math.random() * 151) + 1;
    if (!array.includes(newNumber)) {
      array.push(newNumber);
    } else continue;
  }

  return array;
}
