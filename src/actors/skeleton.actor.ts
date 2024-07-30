import { BoxClass } from "../../core/class/box.class.ts";
import { createBoxObject } from "../../core/gameObjectSystem/gameObjectSystem.core.ts";

export const skeleton = {
  actor: new BoxClass(),
  load: function () {
    const playerAtributes = {
      id: "skeleton1",
      type: "skeleton",
      width: 100,
      height: 100,
    };

    //create player with his atributes
    this.actor = createBoxObject(playerAtributes);
  },
};
