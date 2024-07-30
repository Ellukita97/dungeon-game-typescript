import { createBrowserScene } from "../../core/sceneSystem/data/scene.routes";
import { titleScreenScene } from "../level/scenes/titleScreen.scene";
import { level1Scene } from "../level/scenes/level1.scenes";
import { roomScene } from "../level/scenes/room.scene";

export function initScenes() {
  createBrowserScene([titleScreenScene, level1Scene, roomScene]);
}
