//	init() {
//		createCanvas()
//		window.requestAnimationFrame(gameLoop)
//	}
//
//
//
const Keys = {
	LEFT: false,
	RIGHT: false,
	SPACE: false 
}

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback, element) {
			window.setTimeout(callback, 1000/60)
		};
})();

document.onkeydown = function(e) {
	if(e.keyCode == 37) Keys.LEFT = true
	if(e.keyCode == 39) Keys.RIGHT = true
	if(e.keyCode == 32) Keys.SPACE = true
}

document.onkeyup = function(e) {
	if(e.keyCode == 37) Keys.LEFT = false
	if(e.keyCode == 39) Keys.RIGHT = false
	if(e.keyCode == 32) Keys.SPACE = false
}

let canvas,
	ctx
const CanvasInit = {
	createCanvas: function(width, height) {
			const canvasTag = document.createElement('canvas')
			canvasTag.height = height
			canvasTag.width = width
			canvasTag.id = 'game'
			document.getElementsByTagName("body")[0].appendChild(canvasTag)
			canvas = document.getElementById('game')
			ctx = canvas.getContext('2d')
	}
}
const Game = {
	canvas: null,

	appInit: function(appConfig) {
		const width = appConfig.width
		const height = appConfig.height
		this.scene = appConfig.startScene
		CanvasInit.createCanvas(width,height)
		this.canvas = canvas
		this.start()
	},

	start() {
		window.requestAnimFrame(this.start.bind(this))
		this.scene.update()
		this.scene.load()
	},

	gameLoop() {
	},

	setBackground: function(color) {
		ctx.fillStyle = color
		ctx.fillRect(0,0, canvas.width, canvas.height)
	},

	drawTriangle: function(x,y,height,width,color) {
		ctx.fillStyle = color
		ctx.beginPath()
		ctx.moveTo(x,y)
		ctx.lineTo(x-width,y)
		ctx.lineTo(x-(width/2),y-height)
		ctx.closePath()
		ctx.fill()
		
	},

	drawCircle: function(x, y, radius, color) {
		ctx.fillStyle = color
		ctx.beginPath()
		ctx.arc(x,y,radius,0,2*Math.PI)
		ctx.closePath()
		ctx.fill()
	}
}

export {
	Game,
	Keys
}
