import { initScenes } from "./code/initSystems.code";
import { keyboard } from "../core/keyboard/keyboard.code";
import { mainLoop } from "../core/mainLoop/mainLoop.code";
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
