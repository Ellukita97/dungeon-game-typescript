import { BoxClass } from "../../class/box.class";
import { gameObjectClass } from "../../class/gameObject.class";

export const generateBox = {
  create: function (box: BoxClass) {
    const { width, height, x, y, id } = box;

    const boxHTMLElement = document.createElement("div");

    boxHTMLElement.id = `${id}`;
    boxHTMLElement.style.position = "absolute";
    boxHTMLElement.style.width = width + "px";
    boxHTMLElement.style.height = height + "px";
    boxHTMLElement.style.left = x + "px";
    boxHTMLElement.style.top = y + "px";
    boxHTMLElement.style.backgroundColor = "grey";

    return boxHTMLElement;
  },
  generate: function (elementToGenerateBox: HTMLElement, box: BoxClass) {
    elementToGenerateBox!.appendChild(generateBox.create(box));
  },
  update: (box: BoxClass) => {
    const { width, height, x, y, id } = box;

    const boxElement = document.getElementById(`${id}`);

    boxElement!.style.width = width + "px";
    boxElement!.style.height = height + "px";
    boxElement!.style.left = x + "px";
    boxElement!.style.top = y + "px";
  },
};

export const generateGameObject = {
  generate: function (
    elementToGenerateBox: HTMLElement,
    gameObject: gameObjectClass
  ) {
    const { sprite, hitBox, colliction, zIndex } = gameObject;
    const gameObjectHTMLElement = generateBox.create(gameObject);
    gameObjectHTMLElement.style.zIndex = zIndex;

    if (sprite == "") gameObjectHTMLElement.style.backgroundColor = "";

    const spirteImageHTML = document.createElement("img");
    spirteImageHTML.id = "SPRITE" + gameObject.id;
    spirteImageHTML.src = `${sprite}`;
    spirteImageHTML.style.position = "absolute";
    spirteImageHTML.style.height = "300px";
    spirteImageHTML.style.top = "-95px";
    spirteImageHTML.style.left = "-80px";
    gameObjectHTMLElement!.appendChild(spirteImageHTML);

    //generate colliction
    if (colliction)
      colliction.map((solid) => {
        generateBox.generate(gameObjectHTMLElement, solid);
      });

    //generate hitbox
    if (hitBox) generateBox.generate(gameObjectHTMLElement, hitBox);

    elementToGenerateBox!.appendChild(gameObjectHTMLElement);
  },
  update: (gameObject: gameObjectClass) => {
    /* por revisar */
    const { width, height, x, y, id, sprite } = gameObject;
    const boxElement = document.getElementById(`${id}`);

    boxElement!.style.width = width + "px";
    boxElement!.style.height = height + "px";
    boxElement!.style.left = x + "px";
    boxElement!.style.top = y + "px";
    if (sprite != "") {
      boxElement!.style.backgroundImage = `url(${sprite})`;
    }
  },
};
