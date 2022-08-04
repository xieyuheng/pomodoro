import { Howl } from "howler"

export function emptySoundLoop() {
  return new Howl({
    src: [
      "/sounds/loops/empty-loop-for-js-performance.ogg",
      "/sounds/loops/empty-loop-for-js-performance.wav",
    ],
    volume: 0.1,
    loop: true,
  })
}
