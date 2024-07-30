export const keyboard = {
  keys: new Array(),
  start: function () {
    document.onkeydown = keyboard.saveKey;
    document.onkeyup = keyboard.deleteKey;
  },
  saveKey: function (e: any) {
    if (keyboard.keys.indexOf(e.key) == -1) {
      keyboard.keys.push(e.key);
    }
  },
  deleteKey: function (e: any) {
    const pos = keyboard.keys.indexOf(e.key);
    if (pos !== -1) {
      keyboard.keys.splice(pos, 1);
    }
  },
  keyPressed: function (keyCode: any) {
    return keyboard.keys.indexOf(keyCode) !== -1 ? true : false;
  },
};
