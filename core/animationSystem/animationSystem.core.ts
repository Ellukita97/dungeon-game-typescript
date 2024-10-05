let animationFrames = 0;
let isAnited = true;

export function createAnimation(
  element: HTMLImageElement,
  animationImage: string,
  maxLeftAnimation: number
) {
  isAnited = true
  element.src = animationImage;
  //console.log(animationFrames)
  getAnimationFrames();
  if (animationFrames % 10 === 0) {
    const num = parseInt(element.style.left);
    element.style.left = `${num - 300}px`;
  }

  if (parseInt(element.style.left) < maxLeftAnimation) {
    element.style.left = "-80px";
    animationFrames = 0;
    isAnited = false;
    return true;
  }

  //reset,set and return values
  return false;
}

export function flipAnimationX(element: HTMLImageElement, flipRight: boolean) {
  if (flipRight === true) {
    element.style.transform = "scaleX(-1)";
  }

  if (flipRight === false) {
    element.style.transform = "scaleX(1)";
  }
}

function getAnimationFrames() {
  const num = getnumberForMiliSeconds();
  console.log(num)
  animationFrames = num
}

let oldMiliSeconds: number;
function getnumberForMiliSeconds() {
  return setInterval(() => {
    const now = new Date();
    const num = now.getMilliseconds() - oldMiliSeconds;
    oldMiliSeconds = now.getMilliseconds();
    return num;
  }, 100);
}
