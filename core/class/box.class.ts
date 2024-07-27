import { boxInterface } from "../collisionSystem/interfaces/box.interface";

export class BoxClass implements boxInterface {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor();
  constructor(
    id: string,
    type: string,
    x: number,
    y: number,
    width: number,
    height: number
  );
  constructor(
    id?: string,
    type?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ) {
    this.id = id ?? "";
    this.type = type ?? "";
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? 0;
    this.height = height ?? 0;
  }
}
