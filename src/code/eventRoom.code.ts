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

      let currentDoomData;
      for (let i = 0; i < roomsData.length; i++) {
        const room = roomsData[i];

        if (room.id == States.Value) {
          currentDoomData = room.doors.find(
            (door) => door.doorId == getDoorElementId
          );
        }
      }

      console.log(currentDoomData);
      changeScene("ROOM", currentDoomData?.nextRoomId);
      break;

    default:
      break;
  }
}
export function getNumberOfString(textToGetNumber: string) {
  const a = textToGetNumber.match(/\d+/)!;
  return parseInt(a[0]);
}
