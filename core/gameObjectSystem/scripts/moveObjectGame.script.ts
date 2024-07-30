import { checkCollition } from "../../collisionSystem/code/collisionSystem.code";
import { controllerKeys } from "../../keyboard/data/defaultKeyboardKeys.data";
import { gameObjectClass } from "../../class/gameObject.class";
import { keyboard } from "../../keyboard/keyboard.code";

export function moveGameObject(actor: gameObjectClass) {
  const { up, down, left, right } = checkCollition(actor);

  if (keyboard.keyPressed(controllerKeys.up) && !up) {
    actor.y -= actor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.down) && !down) {
    actor.y += actor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.left) && !left) {
    actor.x += actor.velocity;
  }
  if (keyboard.keyPressed(controllerKeys.right) && !right) {
    actor.x -= actor.velocity;
  }
}
