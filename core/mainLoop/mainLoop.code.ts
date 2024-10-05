export const mainLoop = {
  idEjec: 0,
  lastReg: 0,
  maxFps: 0,
  fps: 0,
  deltaTime: performance.now(),
  updateForFrameLoop: function () {},
  iterate: (tempReg: number) => {
    mainLoop.idEjec = window.requestAnimationFrame(mainLoop.iterate);
    mainLoop.deltaTime = (tempReg - mainLoop.lastReg) / 1000;
    mainLoop.lastReg = tempReg;

    mainLoop.actualizar();
  },
  detener: () => {},
  actualizar: () => {
    mainLoop.updateForFrameLoop();
  },
};

export function updateForFrame(callback: any) {
  mainLoop.updateForFrameLoop = callback;
}
