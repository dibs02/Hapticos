export const config = {
  matches: ["http://*/*", "https://*/*"]
}

declare const chrome: any

const CLICK_COUNT_KEY = "hapticosClickCount"
const storageArea = chrome?.storage?.local

const bgAudio = new Audio(chrome.runtime.getURL("./sounds/bg.wav"))
const buttonAudio = new Audio(chrome.runtime.getURL("./sounds/button.wav"))
const linkAudio = new Audio(chrome.runtime.getURL("./sounds/link.wav"))

for (const audio of [bgAudio, buttonAudio, linkAudio]) {
  audio.preload = "auto"
  audio.volume = 0.35
}

const incrementClickCount = () => {
  if (!storageArea) {
    return
  }

  try {
    storageArea.get([CLICK_COUNT_KEY], (result) => {
      try {
        const currentCount =
          typeof result[CLICK_COUNT_KEY] === "number"
            ? result[CLICK_COUNT_KEY]
            : 0

        storageArea.set({
          [CLICK_COUNT_KEY]: currentCount + 1
        })
      } catch (error) {
        if (!isExtensionContextInvalidated(error)) {
          console.warn("Hapticos could not update the click count.", error)
        }
      }
    })
  } catch (error) {
    if (!isExtensionContextInvalidated(error)) {
      console.warn("Hapticos could not access extension storage.", error)
    }
  }
}

const playAudio = async (audio: HTMLAudioElement) => {
  audio.currentTime = 0
  await audio.play()
}

const isExtensionContextInvalidated = (error: unknown) => {
  return (
    error instanceof Error &&
    error.message.includes("Extension context invalidated")
  )
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
  } catch (error) {
    console.warn("Hapticos could not play the click sound.", error)
  }

  incrementClickCount()
})

console.log("Hapticos content script loaded")

export {}
