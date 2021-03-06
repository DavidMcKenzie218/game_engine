const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js');
const Ai = require('./models/ai/ai.js');
const GameRules = require('./models/game_logic/game_rules.js');
const Boxer = require('./models/game_logic/boxer.js');
const Game = require('./models/game/game.js');


const setup = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const enemyImage = "./images/CharSheetIT.png";

  const player = new Boxer("player");
  const enemy = new Boxer("enemy");

  const gameRules = new GameRules();
  gameRules.addPlayer(player);
  gameRules.addPlayer(enemy);

  console.log(gameRules.players);

  const playSpace = new Canvas("#canvas-test");
  const enemyPlayeSpace = new Canvas("#canvas-enemy");
  enemyPlayeSpace.create(700, 700, "enemy-canvas");
  playSpace.create(700, 700, "player-canvas");  

  const playerAnim = new Animation(playerImage, 0, 10, "#player-canvas");
  const enemyAnim = new Animation(enemyImage, 500, 10, "#enemy-canvas");

  const playerParams = {
    width: 2304,
    height: 128,
    frameCount: 18,
    animFrames: {
      move: {
        start: 0,
        end: 3
      },
      punch: {
        start: 4,
        end: 9
      },
      doublePunch: {
        start: 4,
        end: 11
      }, 
      damage: {
        start: 11,
        end: 18
      },
      block: {
        start: 4,
        end: 5
      }
    }
  };

  const enemyParams = {
    width: 2300,
    height: 192,
    frameCount: 18,
    animFrames: {
      move: {
        start: 0,
        end: 5
      },
      punch: {
        start: 5,
        end: 7
      }, 
      damage: {
        start: 1,
        end: 3
      }
    }
  };

  playerAnim.makeSprite(playerParams);
  enemyAnim.makeSprite(enemyParams);

  const ai = new Ai(enemyAnim);

  const game = new Game({playerAnim: playerAnim, enemyAnim: enemyAnim, ai: ai, gameRules: gameRules});

  game.keyListeners();
  game.loop(0)
}


window.onload = setup;