export const config = {
  matches: ["<all_urls>"]
}

declare const chrome: any

const CLICK_COUNT_KEY = "hapticosClickCount"

const bgAudio = new Audio(chrome.runtime.getURL("./sounds/bg.wav"))
const buttonAudio = new Audio(chrome.runtime.getURL("./sounds/button.wav"))
const linkAudio = new Audio(chrome.runtime.getURL("./sounds/link.wav"))

for (const audio of [bgAudio, buttonAudio, linkAudio]) {
  audio.preload = "auto"
  audio.volume = 0.35
}

const incrementClickCount = () => {
  chrome.storage.local.get([CLICK_COUNT_KEY], (result) => {
    const currentCount =
      typeof result[CLICK_COUNT_KEY] === "number" ? result[CLICK_COUNT_KEY] : 0

    chrome.storage.local.set({
      [CLICK_COUNT_KEY]: currentCount + 1
    })
  })
}

const playAudio = async (audio: HTMLAudioElement) => {
  audio.currentTime = 0
  await audio.play()
}

const getClickAudio = (target: EventTarget | null) => {
  if (!(target instanceof Element)) {
    return bgAudio
  }

  if (target.closest("a[href]")) {
    return linkAudio
  }

  if (
    target.closest(
      'button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"]'
    )
  ) {
    return buttonAudio
  }

  return bgAudio
}

document.addEventListener("click", async (event) => {
  try {
    const audio = getClickAudio(event.target)
    await playAudio(audio)
    incrementClickCount()
  } catch (error) {
    console.warn("Hapticos could not play the click sound.", error)
  }
})

console.log("Hapticos content script loaded")

export {}
