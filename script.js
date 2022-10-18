const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//creates a blue square
context.fillStyle = 'blue';
context.fillRect(100, 100, 400, 400);
context.strokeStyle = 'purple';

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

//inserts a circle inside the square
context.strokeStyle = 'white';
context.beginPath();
// context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();


const width = 60;
const height = 60;
const gap = 20;
let x, y;

//loops - creates grid of 5 * 5 squares
// moved to 110 to fit inside border of main square
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {

    let x = 110 + (width + gap) * i;
    let y = 110 + (height + gap) * j;

    // context.strokeStyle = 'purple';

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke(); x
    // adds small sqare inside the grid squares - randomly generated
    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();
    }

  }

}

// menu.forEach(item => {
//   console.log(item)
// })

