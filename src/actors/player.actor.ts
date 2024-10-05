import { BoxClass } from "../../core/class/box.class.ts";
import { gameObjectClass } from "../../core/class/gameObject.class.ts";
import { createGameObject } from "../../core/gameObjectSystem/gameObjectSystem.core.ts";
import { squareCustomCollisionBoxes } from "../../core/collisionSystem/code/typeCollition.code.ts";
import walkPlayer from "../assets/player/Soldier-Walk.png";
import idlePalyer from "../assets/player/Soldier-Idle.png";
import attack1Palyer from "../assets/player/Soldier-Attack01.png";
import { check4sidedCollition } from "../../core/collisionSystem/code/collisionSystem.code.ts";
import { directionMovementKeyboard } from "../../core/keyboard/code/movementKeys.code.ts";
import { mainLoop } from "../../core/mainLoop/mainLoop.code.ts";
import { keyboard } from "../../core/keyboard/keyboard.code.ts";
import { controllerKeys } from "../../core/keyboard/data/defaultKeyboardKeys.data.ts";
import {
  flipAnimationX,
  createAnimation,
} from "../../core/animationSystem/animationSystem.core.ts";

export const playerActor = {
  actor: new gameObjectClass(),
  isAnited: false,
  isRightDirection: false,
  attack: false,
  frames: 0,
  load: function (x: number = 0, y: number = 0) {
    const hitBox = new BoxClass("hitBoxPlayer", "hitbox", 25, 25, 50, 50);

    const playerAtributes = {
      id: "player1",
      type: "player",
      x: x,
      y: y,
      width: 150,
      height: 100,
      sprite: "",
      hitBox: hitBox,
      velocity: 100,
      zIndex: "100",
    };

    //create player with his atributes
    this.actor = createGameObject(playerAtributes);

    //add collition boxes
    const box1 = new BoxClass("", "collition", 50, 60, 45, 5);
    const box2 = new BoxClass("", "collition", 40, 65, 10, 15);
    const box3 = new BoxClass("", "collition", 50, 80, 45, 10);
    const box4 = new BoxClass("", "collition", 95, 65, 10, 15);
    squareCustomCollisionBoxes(this.actor, box1, box2, box3, box4);
  },
  update: function () {
    const playerIsMoving = movePlayer();
    attackPlayer();
    if (!playerIsMoving) {
      idleAnimation();
    }
    if (playerIsMoving) {
      movingAnimation(playerIsMoving);
    }
    if (this.isAnited) {
      attackAnimation();
    }
  },
};
function attackObject() {}

function attackPlayer() {
  if (keyboard.keyPressed(controllerKeys.attack)) {
    playerActor.isAnited = true;
  }
}

function attackAnimation() {

  const a = document.querySelector<HTMLImageElement>(
    "#SPRITE" + playerActor.actor.id
  );

  flipAnimationX(a!, playerActor.isRightDirection);

  const animationFinished = createAnimation(a!, attack1Palyer, -1579);
  console.log(animationFinished);
  if (animationFinished == true) {
    playerActor.isAnited = false;
    console.log("dinish");
  }
}

function movePlayer() {
  const { up, down, left, right } = check4sidedCollition(playerActor.actor);
  const { upKey, downKey, rightKey, leftKey } = directionMovementKeyboard();
  let playerIsMoving = false;

  //logic of collition
  const actor: gameObjectClass = playerActor.actor;
  if (!up && upKey) {
    playerIsMoving = true;
    actor.y -= actor.velocity * mainLoop.deltaTime;
  }
  if (!down && downKey) {
    playerIsMoving = true;
    actor.y += actor.velocity * mainLoop.deltaTime;
  }
  if (!right && rightKey) {
    playerActor.isRightDirection = true;
    playerIsMoving = true;
    actor.x -= actor.velocity * mainLoop.deltaTime;
  }
  if (!left && leftKey) {
    playerActor.isRightDirection = false;
    playerIsMoving = true;
    actor.x += actor.velocity * mainLoop.deltaTime;
  }
  return playerIsMoving;
}

function movingAnimation(isMoving: boolean) {
  if (isMoving === false) return;

  const a = document.querySelector<HTMLImageElement>(
    "#SPRITE" + playerActor.actor.id
  );

  flipAnimationX(a!, playerActor.isRightDirection);

  createAnimation(a!, walkPlayer, -2300);
}

function idleAnimation() {
  const a = document.querySelector<HTMLImageElement>(
    "#SPRITE" + playerActor.actor.id
  );

  flipAnimationX(a!, playerActor.isRightDirection);

  createAnimation(a!, idlePalyer, -1700);
}
