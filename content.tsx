export const config = {
  matches: ["<all_urls>"]
}

declare const chrome: {
  runtime: {
    getURL(path: string): string
  }
}

const soundUrl = chrome.runtime.getURL("sounds/sound.mp3")
const clickSound = new Audio(soundUrl)

clickSound.preload = "auto"
clickSound.volume = 0.35

document.addEventListener("click", async () => {
  try {
    clickSound.currentTime = 0
    await clickSound.play()
  } catch (error) {
    console.warn("Hapticos could not play the click sound.", error)
  }
})

console.log("Hapticos content script loaded")

export {}
