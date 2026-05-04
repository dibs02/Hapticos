export const config = {
  matches: ["<all_urls>"]
}

declare const chrome: any

const CLICK_COUNT_KEY = "hapticosClickCount"

const soundUrl = chrome.runtime.getURL("sounds/sound.mp3")
const clickSound = new Audio(soundUrl)

clickSound.preload = "auto"
clickSound.volume = 0.35

const incrementClickCount = () => {
  chrome.storage.local.get([CLICK_COUNT_KEY], (result) => {
    const currentCount =
      typeof result[CLICK_COUNT_KEY] === "number" ? result[CLICK_COUNT_KEY] : 0

    chrome.storage.local.set({
      [CLICK_COUNT_KEY]: currentCount + 1
    })
  })
}

document.addEventListener("click", async () => {
  try {
    clickSound.currentTime = 0
    await clickSound.play()
    incrementClickCount()
  } catch (error) {
    console.warn("Hapticos could not play the click sound.", error)
  }
})

console.log("Hapticos content script loaded")

export {}
