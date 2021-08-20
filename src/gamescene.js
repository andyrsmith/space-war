import {Game, Keys} from './canvas/game'

const GameScene = {

	player: {
		x: 400,
		y: 540,
		width: 40,
		height: 40,
		speed: 5
	},

	playerBullets: [],

	load(){
		Game.setBackground("black")
		Game.drawTriangle(this.player.x,this.player.y,this.player.width,this.player.height,"blue")
		for(const i in this.playerBullets) {
			const bullet = this.playerBullets[i]
			Game.drawCircle(bullet.x, bullet.y,bullet.radius, "red")
		}
	},

	update() {
		if(Keys.LEFT) {
			if(this.player.x < 0) {
				this.player.x = 0
			} else {
				this.player.x -= this.player.speed
			}
		}

		if(Keys.RIGHT) {
			if(this.player.x > Game.canvas.width + this.player.width) {
				this.player.x = Game.canvas.width + this.player.width
			} else {
				this.player.x += this.player.speed
			}
		}

		if(Keys.SPACE) {
			this.playerBullets.push({
				x: this.player.x-this.player.width/2,
				y: this.player.y - 40,
				radius: 5
			})
		}

		for(const i in this.playerBullets) {
			const bullet = this.playerBullets[i]
			console.log(bullet)
			bullet.y -= 4
		}

		this.playerBullets = this.playerBullets.filter(function(bullet) {
			return bullet.y > 0
		})


	}
}

export default GameScene
