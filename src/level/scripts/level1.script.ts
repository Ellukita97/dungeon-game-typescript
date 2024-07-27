import { BoxClass } from "../../../core/class/box.class.ts";
import { currentsCollitions } from "../../../core/collisionSystem/data/collision.state.ts";
import {
  generateBox,
  generateGameObject,
} from "../../../core/renderSystem/code/generateGameObject.code.ts";
import {
  createPlayer,
  movePlayer,
  playerActor,
} from "../../actors/player/player.actor.ts";
import { updateForFrame } from "../../code/mainLoop.code.ts";

export const level1 = {
  script: function () {
    const map = document.getElementById("map");

    const item = new BoxClass("", "", 300, 0, 100, 100);
    currentsCollitions.push(item);
    generateBox.generate(map!, item);

    createPlayer();
    generateGameObject.generate(map!, playerActor);

    updateForFrame(() => {
      movePlayer();
      generateGameObject.update(playerActor);
    });
  },
};
