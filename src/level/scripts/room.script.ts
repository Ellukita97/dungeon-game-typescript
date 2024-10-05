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
import { resetCurrentCollitions } from "../../../core/collisionSystem/data/collision.state.ts";

export const room = {
  script: function () {
    //get map
    const map = document.getElementById("map")!;

    //reset
    resetCurrentCollitions();
    doorActor.reset();

    //search room
    const currentRoom = roomsData.find(
      (room) => room.id === States.Value!.nextRoomId!
    );

    //search door
    let currentDoor;
    for (let i = 0; i < roomsData.length; i++) {
      const room = roomsData[i];
      if (room.id == States.Value.nextRoomId) {
        currentDoor = room.doors.find(
          (door) => door.doorId == States.Value.nextDoorId
        );
      }
    }

    console.log(currentRoom?.type);

    //load
    roomActor.load(currentRoom);
    !currentDoor
      ? playerActor.load(260, 260)
      : playerActor.load(
          currentDoor?.playerSpawn.x,
          currentDoor?.playerSpawn.y
        );

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
      playerActor.update()
      EventsRoom();

      //generate HTML
      generateGameObject.update(playerActor.actor);
    });
  },
};
