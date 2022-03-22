// Functions related to Snowflakes

// Create a new snowflake with a random location, size and speed
function newSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: 0,
        r: randomInt(1, 10),
        speed: randomInt(2, 10),
    }
}

// Draw snowflake
function drawSnowflake(aSnowflake) {
    fill("white");
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}

// Move snowflake at a constant random speed
function moveSnowflake(aSnowflake) {
    aSnowflake.y += aSnowflake.speed;
}

// Bring snowflake to top of canvas if it reaches the bottom
function teleportSnowflake(aSnowflake) {
    if (aSnowflake.y > cnv.height) {
        aSnowflake.y = 0;
        aSnowflake.x = randomInt(0, cnv.width);
    }
}
