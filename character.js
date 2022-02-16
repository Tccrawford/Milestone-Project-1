const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

class Character {
    constructor(){
        this.position = {
            x: 100,
            y:100,
        }
        this.width= 100
        this.height= 100

    }
look(){
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.fillStyle('#F9DC5C')
    }
}

const character = new Character()
character.look()