import { keyboard } from "../keyboard.code.ts";
import { controllerKeys } from "../data/defaultKeyboardKeys.data.ts";

export function directionMovementKeyboard() {
  let upKey = false;
  let downKey = false;
  let rightKey = false;
  let leftKey = false;

  if (keyboard.keyPressed(controllerKeys.up)) {
    upKey = true;
  }
  if (keyboard.keyPressed(controllerKeys.down)) {
    downKey = true;
  }
  if (keyboard.keyPressed(controllerKeys.left)) {
    leftKey = true;
  }
  if (keyboard.keyPressed(controllerKeys.right)) {
    rightKey = true;
  }

  return { upKey, downKey, rightKey, leftKey };
}
