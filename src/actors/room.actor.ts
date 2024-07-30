import { gameObjectClass } from "../../core/class/gameObject.class.ts";
import { squereCollectionCompleteSide } from "../../core/collisionSystem/code/typeCollition.code.ts";
import { createGameObject } from "../../core/gameObjectSystem/gameObjectSystem.core.ts";

export const roomActor = {
  actor: new gameObjectClass(),
  load: function (room: any, x: number = 0, y: number = 0) {
    const roomAtributes = {
      id: "room",
      type: "room",
      x: x,
      y: y,
      width: room.width,
      height: room.height,
      velocity: 5,
      zIndex: "1",
    };

    //create player with his atributes
    this.actor = createGameObject(roomAtributes);

    //add collition boxes
    squereCollectionCompleteSide(this.actor, "collition", 30);
  },
};
