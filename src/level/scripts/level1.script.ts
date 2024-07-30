import {
  generateBox,
  generateGameObject,
} from "../../../core/renderSystem/code/generateGameObject.code.ts";
import { updateForFrame } from "../../../core/mainLoop/mainLoop.code.ts";
import { playerActor } from "../../actors/player.actor.ts";
import { moveGameObject } from "../../../core/gameObjectSystem/scripts/moveObjectGame.script.ts";
import { skeleton } from "../../actors/skeleton.actor.ts";

export const level1 = {
  script: function () {
    //load
    skeleton.load();
    playerActor.load();

    skeleton.actor.x = 400
    //get map
    const map = document.getElementById("map");

    //generate HTML
    generateGameObject.generate(map!, playerActor.actor);
    generateBox.generate(map!, skeleton.actor);

    updateForFrame(() => {
      //scripts
      moveGameObject(playerActor.actor);

      //generate
      generateGameObject.update(playerActor.actor);
      
    });
  },
};
