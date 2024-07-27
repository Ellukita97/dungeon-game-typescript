import { level1 } from "../scripts/level1.script";
import "./level1.style.css";

export const level1Scene = {
  namePath: "LEVEL1",
  html: `
    <h3>Este es el LEVEL1</h3>
      <div id="map"></div>
    `,
  script: function () {
    level1.script();
  },
};
