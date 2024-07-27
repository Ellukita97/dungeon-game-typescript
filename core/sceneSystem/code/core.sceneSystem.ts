import { States } from "../data/scene.state";
import { router } from "../data/scene.routes";
import { routeElement } from "../../config.ts";

export function renderScene() {
  const scene = searchScene();
  document.querySelector<HTMLDivElement>(routeElement)!.innerHTML =
    scene?.html ?? "";
  scene?.script();
}

function searchScene() {
  return router.find((scene) => scene.namePath == States.currentNamePath);
}

function searchSceneByName(nameScene: string) {
  return router.find((scene) => scene.namePath == nameScene);
}

export function changeScene(nameScene: string) {
  try {
    if (nameScene == "") throw new Error("scene not valid");
    if (searchSceneByName(nameScene) == undefined)
      throw new Error("scene doesn't exist");
    if (nameScene == States.currentNamePath) return;
    States.currentNamePath = nameScene;
    renderScene();
  } catch (error) {
    console.error(error);
  }
}
