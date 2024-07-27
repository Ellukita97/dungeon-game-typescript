import { renderScene } from "../code/core.sceneSystem.ts";
import { sceneInterface } from "../interface/scene.interface.ts";
import { States } from "./scene.state.ts";

export let router: Array<sceneInterface> = [];

export function createBrowserScene(scenes: Array<sceneInterface>) {
  try {
    if (scenes.length == 0) throw new Error("scenes not valid");

    //add routes
    router = scenes;
    States.currentNamePath = scenes[0].namePath;
    renderScene()
  } catch (error) {
    console.error(error);
  }
}
