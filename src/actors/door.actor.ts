import { createBoxObject } from "../../core/gameObjectSystem/gameObjectSystem.core.ts";

export const doorActor = {
  actor: new Array(),
  load: function (doorData: Array<any>) {
    doorData.map((door) => {
      this.actor.push(
        createBoxObject({
          id: "door" + door.doorId,
          type: "door",
          x: door.x,
          y: door.y,
          width: door.width,
          height: door.height,
        })
      );
    });

  },
};
