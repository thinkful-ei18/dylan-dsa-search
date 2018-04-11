'use strict';

function eggDrop(floor) {
  let currentFloor = 14;
  let previousFloor = 0;
  let i = currentFloor - 1;
  while (i > 0) {
    if (currentFloor > floor) {
      while (previousFloor < currentFloor) {
        if (previousFloor === floor) {
          return floor;
        }
        console.log(previousFloor);
        previousFloor++;
      }
    }
    console.log(currentFloor);
    previousFloor = currentFloor;
    currentFloor += i;
    i--;
  }
}

console.log(eggDrop(56));