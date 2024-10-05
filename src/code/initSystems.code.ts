import { createBrowserScene } from "../../core/sceneSystem/data/scene.routes";
import { titleScreenScene } from "../level/scenes/titleScreen.scene";
import { roomScene } from "../level/scenes/room.scene";

export function initScenes() {
  createBrowserScene([titleScreenScene, roomScene]);
}
