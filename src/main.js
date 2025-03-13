import Phaser, { Game } from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import MathFighterScene from './scenes/MathFighterScene'
import GameOverScene from "./scenes/GameOverScene";


const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: true
		},
	},
	scene: [MathFighterScene, GameOverScene],
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
},
}

export default new Phaser.Game(config)
