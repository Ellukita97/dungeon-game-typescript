import { States } from "../../../core/sceneSystem/data/scene.state";
import {
  generateBox,
  generateGameObject,
} from "../../../core/renderSystem/code/generateGameObject.code.ts";
import { roomActor } from "../../actors/room.actor.ts";
import { roomsData } from "../../data/rooms.data.ts";
import { playerActor } from "../../actors/player.actor.ts";
import { updateForFrame } from "../../../core/mainLoop/mainLoop.code.ts";
import { moveGameObject } from "../../../core/gameObjectSystem/scripts/moveObjectGame.script.ts";
import { doorActor } from "../../actors/door.actor.ts";
import { EventsRoom } from "../../code/eventRoom.code.ts";

export const room = {
  script: function () {
    //get map
    const map = document.getElementById("map")!;

    //reset
    doorActor.actor = []

    //search room
    const currentRoom = roomsData.find((room) => room.id === States.Value!);

    console.log(currentRoom);

    //load
    roomActor.load(currentRoom);
    playerActor.load(260, 260);
    doorActor.load(currentRoom?.doors!);

    //generate HTML
    generateGameObject.generate(map!, roomActor.actor);
    generateGameObject.generate(
      document.getElementById("room")!,
      playerActor.actor
    );

    //generate door
    doorActor.actor.map((roomHTML) => {
      generateBox.generate(document.getElementById("room")!, roomHTML);
    });

    updateForFrame(() => {
      //scripts
      moveGameObject(playerActor.actor);
      EventsRoom();

      //generate HTML
      generateGameObject.update(playerActor.actor);
    });
  },
};
