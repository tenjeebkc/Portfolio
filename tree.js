let wind = 0;   // global varible to trach wind angle over time

function setup() {
    createCanvas(800, 800);  // drawing areas (the canvas)
    angleMode(DEGREES) // Used degrees for rotation later
    stroke('white');  // tree color
  
}

function draw(){
    background('#0a192f');   

    wind += 0.9  // wind intensity

    // Put the drawing start point at the bottom center
    translate(width / 2, height);

    drawBranch(120, wind)   // Start drawing the branch of length 120

}

function drawBranch(len, offset) {
    strokeWeight(map(len, 10, 120, 1, 5))  // thinner branch when smaller

    line(0, 0, 0, -len);  // draw branch line upwards
    translate(0, -len);  // move to the end of this branch

    if(len > 7){  // Stop recursion if branch is small

        // Calculate sway angle based on wind and branch length
        const sway = sin(offset) * (15 / (120 / len))
        
        push(); // save current drawing state
        rotate(25 + sway);   // rotate right
        drawBranch(len * 0.7, offset + 2);  // draw smaller right branch
        pop();   // restore drawing 
        
        push()
        rotate(-25 - sway)  // rotate left
        drawBranch(len * 0.7, offset + 2)  // draw smaller left branch
        pop()
    }
    
}



