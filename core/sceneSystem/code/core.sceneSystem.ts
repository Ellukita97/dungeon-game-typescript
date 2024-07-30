import { States } from "../data/scene.state";
import { router } from "../data/scene.routes";
import { routeElement } from "../../config.ts";
import { currentsCollitions } from "../../collisionSystem/data/collision.state.ts";

export function renderScene() {
  const scene = searchScene();
  document.querySelector<HTMLDivElement>(routeElement)!.innerHTML ="";
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

export function changeScene(
  nameScene: string,
  sendValueToAnotherScene: number | null = null
) {
  try {
    
    if (nameScene == "") throw new Error("scene not valid");
    if (searchSceneByName(nameScene) == undefined)
      throw new Error("scene doesn't exist");
    if (sendValueToAnotherScene) States.Value = sendValueToAnotherScene;
    States.currentNamePath = nameScene;
    currentsCollitions.splice(0, currentsCollitions.length);
    renderScene();
  } catch (error) {
    console.error(error);
  }
}
