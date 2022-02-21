let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Assigns gravity to the game scene
let gravity = 0.5

class Character {
    constructor(config){
        this.position = {
            x: 100,
            y:100,
        }
        this.velocity= {
            x: 0,
            y: 1,
        }
        this.speed={
            x: 2,
            y: 0,
        }
        this.width= 25
        this.height= 25
        this.canvasConfig = config

    }
// Gives the character a rectangular shape.
look(){
    this.canvasConfig.fillRect(this.position.x, this.position.y, this.width, this.height)
    
    }
// The update function should be running over and over again. This'll give the velocity, speed and recreate the rectangle in a new position constantly.
update(){
    this.look()
    this.position.y += this.velocity.y
    if (this.position.y + this.height + this.velocity.y <= canvas.height){
    this.velocity.y += gravity
    } else{
        this.velocity.y = 0    
    }
    if(this.position.x + this.speed.x + this.width <= canvas.width){
        this.position.x += this.speed.x
    } else{
        this.speed.x = 0
    }

}
}


const character = new Character(c)

//The animate function is key to looping the update function indefinitely.
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    character.update()
}
animate()

window.addEventListener('keydown', () => {
    if (character.position.y = canvas.height){
        character.position.y += -100
    } else {
        
    }
})