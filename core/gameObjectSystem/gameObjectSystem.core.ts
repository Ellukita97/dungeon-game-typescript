import { BoxClass } from "../class/box.class.ts";
import { gameObjectClass } from "../class/gameObject.class.ts";
import { currentsCollitions } from "../collisionSystem/data/collision.state.ts";
import { mapObjectsGame } from "./data/mapObjectsGame.ts";

export function createGameObject(
  atributesToCreateObject: any
): gameObjectClass {
  const actor = new gameObjectClass();
  actor.id = atributesToCreateObject.id;
  actor.type = atributesToCreateObject.type;
  actor.x = atributesToCreateObject.x
  actor.y = atributesToCreateObject.y
  actor.sprite = atributesToCreateObject.sprite
  actor.width = atributesToCreateObject.width;
  actor.height = atributesToCreateObject.height;
  actor.velocity = atributesToCreateObject.velocity;
  actor.zIndex = atributesToCreateObject.zIndex;

  mapObjectsGame.push(actor);

  return actor;
}
export function createBoxObject(atributesToCreateObject: any): BoxClass {
  const actor = new gameObjectClass();
  actor.id = atributesToCreateObject.id;
  actor.type = atributesToCreateObject.type;
  actor.x = atributesToCreateObject.x
  actor.y = atributesToCreateObject.y
  actor.width = atributesToCreateObject.width;
  actor.height = atributesToCreateObject.height;

  mapObjectsGame.push(actor);

  /* OPTIONAL */
  currentsCollitions.push(actor);

  return actor;
}
