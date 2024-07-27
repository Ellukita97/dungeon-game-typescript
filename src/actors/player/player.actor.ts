import { BoxClass } from "../../../core/class/box.class";
import { gameObjectClass } from "../../../core/class/gameObject.class";
import { squareCollisionBoxesRef } from "../../../core/collisionSystem/code/typeCollition.code.ts";
import { keyboard } from "../../code/keyboard.code.ts";
import { controllerKeys } from "../../data/controllerKeyboard.data.ts";
import { checkCollition } from "../../../core/collisionSystem/code/collisionSystem.code.ts";
import { currentsCollitions } from "../../../core/collisionSystem/data/collision.state.ts";

export const playerActor = new gameObjectClass();

export function createPlayer() {
  playerActor.id = "player1";
  playerActor.type = "player";
  playerActor.width = 100;
  playerActor.height = 100;
  playerActor.velocity = 5;
  playerActor.zIndex = "100";

  playerActor.hitBox = new BoxClass("hitBoxPlayer", "hitbox", 25, 25, 50, 50);

  const box1 = new BoxClass("", "colicionPlayer", 0, 0, 80, 10);
  const box2 = new BoxClass("", "colicionPlayer", 0, 0, 10, 80);
  squareCollisionBoxesRef(playerActor, box1, box2);

  currentsCollitions.push(playerActor);
}

export function movePlayer() {
  const { up, down, left, right } = checkCollition(playerActor);

  if (keyboard.keyPressed(controllerKeys.up) && !up) {
    playerActor.y -= playerActor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.down) && !down) {
    playerActor.y += playerActor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.left) && !left) {
    playerActor.x += playerActor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.right) && !right) {
    playerActor.x -= playerActor.velocity;
  }
}
