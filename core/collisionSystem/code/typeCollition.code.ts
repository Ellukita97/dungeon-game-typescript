import { BoxClass } from "../../class/box.class";
import { gameObjectClass } from "../../class/gameObject.class";

export function squareCollisionBoxesRef(
  elementToSetCollicion: gameObjectClass,
  box1: BoxClass,
  box2: BoxClass
) {
  //create shape of box colliction
  const Originalcolliction = [box1, box2, box1, box2];

  //add colliction to elementToSetCollicion
  Originalcolliction.map((col) => {
    elementToSetCollicion.addColliction(
      new BoxClass("1", col.type, col.x, col.y, col.width, col.height)
    );
  });

  //align collitions
  alignToTheSidesOfTheSquare(elementToSetCollicion);
}

export function alignToTheSidesOfTheSquare(element: gameObjectClass) {
  const { colliction } = element;

  //get shape of collision box
  const HorizontalBox = colliction[0];
  const VerticalBox = colliction[1];

  //Calculate box alignments
  const alignX = element.width / 2 - HorizontalBox.width / 2;
  const alignY = element.height / 2 - VerticalBox.height / 2;
  const alignToRight = element.width - VerticalBox.width;
  const alignToUnder = element.height - HorizontalBox.height;

  //align collision boxes
  if (colliction[0]) colliction[0].x += alignX;

  if (colliction[1]) colliction[1].y += alignY;

  if (colliction[2]) colliction[2].x += alignX;
  if (colliction[2]) colliction[2].y += alignToUnder;

  if (colliction[3]) colliction[3].x += alignToRight;
  if (colliction[3]) colliction[3].y += alignY;
}
