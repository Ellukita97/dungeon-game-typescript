import { room } from "../scripts/room.script";
import "./room.style.css"

export const roomScene = {
  namePath: "ROOM",
  html: `
    <h3>Este es el LEVEL1</h3>
      <div id="map"></div>
    `,
  script: function () {
    room.script();
  },
};
