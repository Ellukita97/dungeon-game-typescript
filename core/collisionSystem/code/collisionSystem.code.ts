import { BoxClass } from "../../class/box.class";
import { gameObjectClass } from "../../class/gameObject.class.ts";
import {
  currentsCollitions,
  setCurrentCollitionOverlapPlayer,
} from "../data/collision.state.ts";

export function overlaps(box1: BoxClass, box2: BoxClass) {
  return box1.x < box2.x + box2.width &&
    box1.x + box1.width > box2.x &&
    box1.y < box2.y + box2.height &&
    box1.height + box1.y > box2.y
    ? true
    : false;
}

export function checkCollition(gameObject: gameObjectClass) {
  let currentCollition = null as BoxClass | null;
  let up = false;
  let down = false;
  let right = false;
  let left = false;

  //check collitions
  for (let i = 0; i < currentsCollitions.length; i++) {
    if (currentsCollitions[i].id == gameObject.id) continue;
    const translateTemp = currentsCollitions[i];

    if (
      overlaps(
        translateCoordenates(gameObject.colliction[0], gameObject),
        translateTemp
      )
    ) {
      if (translateTemp.type == "collition") up = true;
      currentCollition = translateTemp;
    }
    if (
      overlaps(
        translateCoordenates(gameObject.colliction[1], gameObject),
        translateTemp
      )
    ) {
      if (translateTemp.type == "collition") right = true;
      currentCollition = translateTemp;
    }
    if (
      overlaps(
        translateCoordenates(gameObject.colliction[2], gameObject),
        translateTemp
      )
    ) {
      if (translateTemp.type == "collition") down = true;
      currentCollition = translateTemp;
    }
    if (
      overlaps(
        translateCoordenates(gameObject.colliction[3], gameObject),
        translateTemp
      )
    ) {
      if (translateTemp.type == "collition") left = true;
      currentCollition = translateTemp;
    }
  }
  setCurrentCollitionOverlapPlayer(currentCollition!)
  return { up, down, right, left };
}

function translateCoordenates(
  colitionSolid: BoxClass,
  SolidToApliColition: BoxClass
) {
  return new BoxClass(
    colitionSolid.id,
    colitionSolid.type,
    SolidToApliColition.x + colitionSolid.x,
    SolidToApliColition.y + colitionSolid.y,
    colitionSolid.width,
    colitionSolid.height
  );
}
