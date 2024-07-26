import { renderScene } from "./code/sceneSystem/code/core.sceneSystem";

const start = {
  initializers: [],
  startGame: () => {
    console.log("juego iniciado");
    renderScene()
  },
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    start.startGame();
  },
  false
);
