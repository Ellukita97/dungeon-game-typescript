import { BoxClass } from "../../class/box.class";

export const currentsCollitions: Array<BoxClass> = [];
export let currentCollitionOverlapPlayer: BoxClass | null = null;

export function setCurrentCollitionOverlapPlayer(BoxClass: BoxClass) {
  currentCollitionOverlapPlayer = BoxClass;
}
