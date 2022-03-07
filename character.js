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
            x: 5,
            y: 0.5,
        }
       
        this.width= 50
        this.height= 50
        this.canvasConfig = config
    
    }
// Gives the character a rectangular shape.
look(){
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.fillStyle = "blue"
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
        velocity.x = 10
        
    }

}
}  

class Enemies{
    constructor(eConfig){
        this.position ={
            x: 750,
            y:610
        }
        this.velocity= {
            x: 6,
            y: 0.5,
        }
        this.width= 50
        this.height= 50
        this.canvaConfig = eConfig
    }
    look(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.fillStyle = "blue"
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
            velocity.x = 6
            
        }
    
}
}
class Platforms{
    constructor() {
        this.position = {
            x: Math.floor(Math.random() * canvas.width),
            y: 820
        }
        this.width = 250
        this.height = 5
        
    }
    look(){
        c.fillRect(this.position.x, this.position.y , this.width, this.height)
        
    }
}

const character = new Character()
const enemies = new Enemies()
const platform = new Platforms()
const platform2 = new Platforms()
const platform3 = new Platforms()
const platform4 = new Platforms()
const platform5 = new Platforms()
const platformPositions = [0, 196, 392, 588, 784, Math.floor(Math.random() * canvas.width - 250)]
const platforms = [platform, platform2, platform3, platform4, platform5]

//The animate function is key to looping the update function indefinitely.
function animateCharacter(){
    requestAnimationFrame(animateCharacter)
    c.clearRect(0, 0, canvas.width, canvas.height)
    character.update()
    // enemies.update()
    platform.look()
    platform2.look()
    platform3.look()
    platform4.look()
    platform5.look()
    if (character.position.y + character.height >= platform.position.y && 
        character.position.y <= platform.position.y + platform.height && 
        character.position.x  <= platform.position.x + platform.width &&
        character.position.x + character.width >= platform.position.x ){
                character.velocity.y = 0
        }

    if (character.position.y + character.height >= platform2.position.y && 
        character.position.y <= platform2.position.y + platform2.height && 
        character.position.x  <= platform2.position.x + platform2.width &&
        character.position.x + character.width >= platform2.position.x ){
                character.velocity.y = 0
            }

    if (character.position.y + character.height >= platform3.position.y && 
        character.position.y <= platform3.position.y + platform3.height && 
        character.position.x  <= platform3.position.x + platform3.width &&
        character.position.x + character.width >= platform3.position.x ){
                character.velocity.y = 0
                }
    if (character.position.y + character.height >= platform4.position.y && 
        character.position.y <= platform4.position.y + platform4.height && 
        character.position.x  <= platform4.position.x + platform4.width &&
         character.position.x + character.width >= platform4.position.x ){
                character.velocity.y = 0
                            }
    if (character.position.y + character.height >= platform5.position.y && 
        character.position.y <= platform5.position.y + platform5.height && 
        character.position.x  <= platform5.position.x + platform5.width &&
        character.position.x + character.width >= platform5.position.x ){
                character.velocity.y = 0
                                        }

        platform.position.y += 2
        platform2.position.y += 2
        platform3.position.y += 2
        platform4.position.y += 2
        platform5.position.y += 2

   if (platform.position.y >= canvas.height){
       platform.position.y = 500
       platform.position.x = platformPositions[Math.floor(Math.random() * platformPositions.length)]
   }

   if (platform2.position.y >= canvas.height){
    platform2.position.y = 450
    platform2.position.x = platformPositions[Math.floor(Math.random() * platformPositions.length)]
   }

    if (platform3.position.y >= canvas.height){
        platform3.position.y = 475
        platform3.position.x = platformPositions[Math.floor(Math.random() * platformPositions.length)]
}
    if (platform4.position.y >= canvas.height){
    platform4.position.y = 425
    platform4.position.x = platformPositions[Math.floor(Math.random() * platformPositions.length)]
}
    if (platform5.position.y >= canvas.height){
    platform5.position.y = 400
    platform5.position.x = platformPositions[Math.floor(Math.random() * platformPositions.length)]
}
   
}

animateCharacter()

// function 


document.body.onkeydown = function(event) {
    if (event.keyCode === 32){
        character.position.y -= 166  
    } 

}
document.getElementById("jumpButton").addEventListener('click', () => {
    if(character.position.y === 610){   
    character.position.y -= 100
    }     
})

// Pretty sure i took on more than i could do, I will continue to work on this because i really want to see a fully finished product.  