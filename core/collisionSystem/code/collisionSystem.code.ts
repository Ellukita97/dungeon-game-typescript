import { playerActor } from "../../../src/actors/player/player.actor.ts";
import { BoxClass } from "../../class/box.class";
import { gameObjectClass } from "../../class/gameObject.class.ts";
import { currentsCollitions } from "../data/collision.state.ts";

export function overlaps(box1: BoxClass, box2: BoxClass) {
  return box1.x < box2.x + box2.width &&
    box1.x + box1.width > box2.x &&
    box1.y < box2.y + box2.height &&
    box1.height + box1.y > box2.y
    ? true
    : false;
}

export function checkCollition(gameObject: gameObjectClass) {
  let up = false;
  let down = false;
  let right = false;
  let left = false;

  //eliminate collision of function parameters
  const collitionFiltered = currentsCollitions.filter(
    (col) => col.id != gameObject.id
  );

  //check collitions
  for (let i = 0; i < collitionFiltered.length; i++) {
    const translateTemp = collitionFiltered[i];

    if (
      overlaps(
        translateCoordenates(playerActor.colliction[0], playerActor),
        translateTemp
      )
    ) {
      up = true;
    }
    if (
      overlaps(
        translateCoordenates(playerActor.colliction[1], playerActor),
        translateTemp
      )
    ) {
      right = true;
    }
    if (
      overlaps(
        translateCoordenates(playerActor.colliction[2], playerActor),
        translateTemp
      )
    ) {
      down = true;
    }
    if (
      overlaps(
        translateCoordenates(playerActor.colliction[3], playerActor),
        translateTemp
      )
    ) {
      left = true;
    }
  }

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
