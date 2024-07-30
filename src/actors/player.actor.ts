import { BoxClass } from "../../core/class/box.class.ts";
import { gameObjectClass } from "../../core/class/gameObject.class.ts";
import { createGameObject } from "../../core/gameObjectSystem/gameObjectSystem.core.ts";
import { squareCollisionBoxesRef } from "../../core/collisionSystem/code/typeCollition.code.ts";

export const playerActor = {
  actor: new gameObjectClass(),
  load: function (x: number = 0, y: number = 0) {
    const hitBox = new BoxClass("hitBoxPlayer", "hitbox", 25, 25, 50, 50);

    const playerAtributes = {
      id: "player1",
      type: "player",
      x: x,
      y: y,
      width: 100,
      height: 100,
      sprite: "",
      hitBox: hitBox,
      velocity: 5,
      zIndex: "100",
    };

    //create player with his atributes
    this.actor = createGameObject(playerAtributes);

    //add collition boxes
    const box1 = new BoxClass("", "collition", 0, 0, 80, 10);
    const box2 = new BoxClass("", "collition", 0, 0, 10, 80);
    squareCollisionBoxesRef(this.actor, box1, box2);
  },
};
