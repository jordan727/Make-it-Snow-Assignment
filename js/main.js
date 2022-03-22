// Make it Snow Assignment by Jordan Antonio

// Initialize canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// array of snowflake objects
let snowflake = [];

// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    // fill Canvas
    background("black");
    
    // Move & Draw All snowflake
    for (let i = 0; i < snowflake.length; i++) {
        moveSnowflake(snowflake[i]);
        drawSnowflake(snowflake[i]);
        teleportSnowflake(snowflake[i]);
    }

    // Loop drawing
    requestAnimationFrame(draw);  
}

// EVENT LISTENER
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { 
        // Right Arrow - Add a new Snowflake
        snowflake.push(newSnowflake());
    }   else if (event.keyCode === 37) {
        // Left Arrow - Remove the last Snowflake
        snowflake.pop();
    }
}

