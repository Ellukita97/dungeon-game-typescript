import { keyboard } from "./keyboard.code";

export const mainLoop = {
  idEjec: 0,
  lastReg: 0,
  maxFps: 0,
  fps: 0,
  updateForFrameLoop: function () {},
  iterate: (tempReg: number) => {
    setTimeout(() => {
      mainLoop.idEjec = window.requestAnimationFrame(mainLoop.iterate);
    }, 1000 / mainLoop.maxFps);

    mainLoop.actualizar();
    mainLoop.dibujar();

    if (tempReg - mainLoop.lastReg > 999) {
      mainLoop.lastReg = tempReg;
      console.log("FPS: " + mainLoop.fps);
      mainLoop.fps = 0;
    }
  },
  detener: () => {},
  actualizar: () => {
    mainLoop.updateForFrameLoop();
    mainLoop.fps++;
  },
  dibujar: () => {},
};

export function updateForFrame(callback: any) {
  mainLoop.updateForFrameLoop = callback;
}
