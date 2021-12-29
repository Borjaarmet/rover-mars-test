/*  Create Rover Object  */

const rover = {
  x: 0,
  y: 0,
  direction: "N",
  travelLog: [[0, 0]],
};

const grid = [
  [null, null, null, null, "obs", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "obs", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obs", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "obs", null, null, null],
  [null, null, null, null, null, null, null, null, null, "obs"],
  [null, null, "obs", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "obs", null, null],
  [null, null, null, null, "obs", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

/*  Movility functions*/

function turnLeft() {
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.direction = "W";
      break;
    case (rover.direction = "W"):
      rover.direction = "S";
      break;
    case (rover.direction = "S"):
      rover.direction = "E";
      break;
    case (rover.direction = "E"):
      rover.direction = "N";
  }
  console.log("Rover turns left and now is facing " + rover.direction);
}

function turnRight() {
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.direction = "E";
      break;
    case (rover.direction = "E"):
      rover.direction = "S";
      break;
    case (rover.direction = "S"):
      rover.direction = "W";
      break;
    case (rover.direction = "W"):
      rover.direction = "N";
  }
  console.log("Rover turns right and now is facing " + rover.direction);
}

function moveForward() {
  console.log("moveForward was called");
  switch (rover.direction) {
    case (rover.direction = "N"):
      if (rover.y === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move!");
      } else if (grid[rover.y - 1][rover.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move!");
      } else {
        rover.y--;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog: ", rover.travelLog);
      }
      break;

    case (rover.direction = "S"):
      if (rover.y === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move!");
      } else if (grid[rover.y + 1][rover.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move!");
      } else {
        rover.y++;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:", rover.travelLog);
      }
      break;

    case (rover.direction = "E"):
      if (rover.x === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move!");
      } else if (grid[rover.y][rover.x + 1] != null) {
        console.log("Warning! Rover can CRASH, Not Move!");
      } else {
        rover.x++;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:", rover.travelLog);
      }
      break;

    case (rover.direction = "W"):
      if (rover.x === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move!");
      } else if (grid[rover.y][rover.x - 1] != null) {
        console.log("Warning! Rover can CRASH, Not Move!");
      } else {
        rover.x--;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:", rover.travelLog);
      }
      break;
  }
  console.log("Rover is now in: x = " + rover.x + ", y = " + rover.y);
}
//ITERATION 4: COMMANDS

function moveBackward() {
  console.log("moveBackward was called");
  switch (rover.direction) {
    case (rover.direction = "S"):
      if (rover.y === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
      } else if (grid[rover.y - 1][rover.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
      } else {
        rover.y--;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog: ");
        console.log(rover.travelLog);
      }
      break;

    case (rover.direction = "N"):
      if (rover.y === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
      } else if (grid[rover.y + 1][rover.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
      } else {
        rover.y++;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:");
        console.log(rover.travelLog);
      }
      break;

    case (rover.direction = "W"):
      if (rover.x === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
      } else if (grid[rover.y][rover.x + 1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
      } else {
        rover.x++;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:");
        console.log(rover.travelLog);
      }
      break;

    case (rover.direction = "E"):
      if (rover.x === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
      } else if (grid[rover.y][rover.x - 1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
      } else {
        rover.x--;
        rover["travelLog"].push([rover.x, rover.y]);
        console.log("travelLog:");
        console.log(rover.travelLog);
      }
      break;
  }
  console.log("Rover is now in: x = " + rover.x + ", y = " + rover.y);
}

function commands(firstLetters) {
  for (let i = 0; i < firstLetters.length; i++) {
    switch (firstLetters[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("Please, you must enter: l, r, b or f");
        break;
    }
  }
}
