import { initScenes } from "./code/initSystems.code";
import { keyboard } from "./code/keyboard.code";
import { mainLoop } from "./code/mainLoop.code";
import "./style.css";

const start = {
  startGame: () => {
    console.log("juego iniciado");
    mainLoop.iterate(0);
    keyboard.start();
    initScenes();
  },
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    start.startGame();
  },
  false
);
