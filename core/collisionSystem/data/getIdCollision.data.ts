import { gameObjectClass } from "../../class/gameObject.class";

const idGameCollition = [
  {
    idName: "",
    value: 0,
  },
];
export function getIdGame(SolidToSetId: gameObjectClass) {
  const a = idGameCollition.find((idGame) => {
    if (idGame.idName == SolidToSetId.type) {
      idGame.value++;
      return SolidToSetId.type + idGame.value;
    }
  });

  if (a) return a?.idName + a?.value;

  idGameCollition.push({
    idName: SolidToSetId.type,
    value: 0,
  });

  return SolidToSetId.type + 0;
}
