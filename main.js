// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
// let myArray = [
//   200, 500, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275,
// ];

// let myArray = [];
// for (let i = 0; i < 15; i++) {
//   myArray[i] = 300;
// }

// let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

let myArray = [];
for (let i = 0; i < 100; i++) {
  myArray[i] = 300;
}

// add fifty 400
for (let i = 0; i < 50; i++) {
  myArray[100 + i] = 400;
}

// add fiffty 200
for (let i = 0; i < 50; i++) {
  myArray[150 + i] = 200;
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
// keydown gives a string of the key being pressed
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  let middleIndex = Math.floor(myArray.length / 2);

  if (event.code == "ArrowRight") {
    myArray.splice(middleIndex, 0, Math.random() * 600);
  } else if (event.code == "ArrowLeft") {
    myArray.splice(middleIndex, 1);
  }

  // 3. Random Dance
  if (event.code == "Space") {
    for (let i = 0; i < myArray.length; i++) {
      let random = Math.random() * (5 + 5) - 5;
      myArray[i] += random;
    }
  }

  if (event.code == "KeyR") {
    for (let i = 0; i < 100; i++) {
      myArray[i] = 300;
    }
  }

  //  4. Remove Challenge
  if (event.code == "Digit1") {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == 400) {
        myArray.splice(i, 1);
        i--;
      }
    }
  }

  if (event.code == "Digit2") {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == 200) {
        myArray.splice(i, 1);
        i--;
      }
    }
  }
}

// Demonstrating how keydown works:
// function keydownHandler(event) {
//     console.log(event.code);
//     if (event.code == "Space") {
//       // myArray[0] = 600;
//       // myArray[myArray.length - 2] *= 3;
//       for (let i = 0; i < myArray.length; i++) {
//         myArray[i] += Math.random() * 5;
//       }
//     }
//   }
