import { currentCollitionOverlapPlayer } from "../../core/collisionSystem/data/collision.state";
import { changeScene } from "../../core/sceneSystem/code/core.sceneSystem";
import { States } from "../../core/sceneSystem/data/scene.state";
import { roomsData } from "../data/rooms.data";

export function EventsRoom() {
  switch (currentCollitionOverlapPlayer?.type) {
    case "door":
      console.log(currentCollitionOverlapPlayer.id);

      //get current Door id
      const getDoorElementId = getNumberOfString(
        currentCollitionOverlapPlayer.id
      );

      let currentDoorData;
      for (let i = 0; i < roomsData.length; i++) {
        const room = roomsData[i];

        if (room.id == States.Value.nextRoomId) {
          currentDoorData = room.doors.find(
            (door) => door.doorId == getDoorElementId
          );
        }
      }

      //console.log(currentDoorData);
      changeScene("ROOM", {
        nextRoomId: currentDoorData?.nextRoomId,
        nextDoorId: currentDoorData?.nextDoorId,
      });
      break;
    default:
      break;
  }
}
export function getNumberOfString(textToGetNumber: string) {
  const a = textToGetNumber.match(/\d+/)!;
  return parseInt(a[0]);
}
