import { changeScene } from "../../code/sceneSystem/code/core.sceneSystem";

const imgTitle = `https://i.pinimg.com/originals/df/4d/cd/df4dcd70b731dca09baa261b51d3cc8d.jpg`;

export const titleScreenScene = {
  namePath: "TITLE_SCREEN",
  html: `
    <div>
      <h1>Bienvenido al juego del perro</h1>
      <img style="height: 400px;width: 500px;" src=${imgTitle} alt="">
      <div class="card">
        <button id="start" type="button">Emprezar</button>
      </div>
      <p class="read-the-docs">
        Este juego fue creado con vitejs, html, css y typescript por Lucas Rodrigues.
      </p>
    </div>
  `,
  script: function () {
    const buttonStart = document.getElementById("start");

    buttonStart?.addEventListener("click", () => {
      changeScene("LEVEL1")
    });
  },
};