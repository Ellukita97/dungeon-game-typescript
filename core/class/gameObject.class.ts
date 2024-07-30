import { BoxClass } from "./box.class";

export class gameObjectClass extends BoxClass {
  sprite: string;
  hitBox: BoxClass | null;
  colliction: BoxClass[];
  velocity: number;
  zIndex: string;

  constructor();
  constructor(
    id: string,
    type: string,
    x: number,
    y: number,
    width: number,
    height: number,
    sprite: string,
    hitBox: BoxClass | null,
    colliction: BoxClass[],
    velocity: number,
    zIndex: string
  );
  constructor(
    id?: string,
    type?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    sprite?: string,
    hitBox?: BoxClass | null,
    colliction?: BoxClass[],
    velocity?: number,
    zIndex?: string
  ) {
    super(id!, type!, x!, y!, width!, height!);
    this.sprite = sprite ?? ""; // Asigna un valor por defecto si no se proporciona
    this.hitBox = hitBox ?? null;
    this.colliction = colliction ?? [];
    this.velocity = velocity ?? 0;
    this.zIndex = zIndex ?? "";
  }

  addColliction(obj: BoxClass) {
    this.colliction?.push(obj);
  }
}
