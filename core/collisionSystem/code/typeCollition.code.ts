import { BoxClass } from "../../class/box.class";
import { gameObjectClass } from "../../class/gameObject.class";
import { currentsCollitions } from "../data/collision.state";

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
      new BoxClass("collition", col.type, col.x, col.y, col.width, col.height)
    );
  });

  //align collitions
  alignToTheSidesOfTheSquare(elementToSetCollicion);
}

export function squareCustomCollisionBoxes(
  elementToSetCollicion: gameObjectClass,
  box1: BoxClass,
  box2: BoxClass,
  box3: BoxClass,
  box4: BoxClass
) {
  //create shape of box colliction
  const Originalcolliction = [box1, box2, box3, box4];

  //add colliction to elementToSetCollicion
  Originalcolliction.map((col) => {
    elementToSetCollicion.addColliction(
      new BoxClass("collition", col.type, col.x, col.y, col.width, col.height)
    );
  });

}

export function squereCollectionCompleteSide(
  elementToSetCollicion: gameObjectClass,
  typeIdOfCollition: string,
  widthCollition: number
) {
  const { width, height } = elementToSetCollicion;
  const lengthSquereUp = width - widthCollition * 2;
  const lengthSquereSide = height - widthCollition * 2;

  const box1 = new BoxClass(
    typeIdOfCollition,
    "collition",
    0,
    0,
    lengthSquereUp,
    widthCollition
  );
  const box2 = new BoxClass(
    typeIdOfCollition,
    "collition",
    0,
    0,
    widthCollition,
    lengthSquereSide
  );

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

  elementToSetCollicion.colliction.map((col)=>{
    currentsCollitions.push(col)
  })
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
