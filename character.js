let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Assigns gravity to the game scene
let gravity = 0.5

class Character {
    constructor(config){
        this.position = {
            x: 0,
            y: 610,
        }
        this.velocity= {
            x: 3,
            y: 0.5,
        }
       
        this.width= 25
        this.height= 25
        this.canvasConfig = config

    }
// Gives the character a rectangular shape.
look(){
    this.canvasConfig.fillRect(this.position.x, this.position.y, this.width, this.height)
    
    }
// The update function should be running over and over again. This'll give the velocity, velocity and recreate the rectangle in a new position constantly.
update(){
    this.look()
    this.position.y += this.velocity.y
    if (this.position.y + this.height + this.velocity.y <= canvas.height){
    this.velocity.y += gravity
    } else{
        this.velocity.y = 0    
    }
    if (this.position.x + this.velocity.x + this.width <= canvas.width){
        this.position.x += this.velocity.x
    } else if (this.position.x + this.velocity.x + this.width >= canvas.width){
        this.velocity.x = -this.velocity.x
    } 
    if (this.position.x <= 0){
        let { velocity } = this
        velocity.x = 3
        
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
const jumpButton = {
    pressed: false
}
document.body.onkeypress = function(event) {
    if (event.keyCode === 32, jumpButton.pressed = false){
        character.position.y -= 80
        jumpButton.pressed = true
    } 

}
document.getElementById("jumpButton").addEventListener('click', () => {
        character.position.y -= 50 
        
})