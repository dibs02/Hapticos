import "./style.css"

import { useEffect, useState } from "react"

import { ResetIcon } from "~components/icons/ResetIcon"
import { PopupHeader } from "~components/popup/PopupHeader"
import { StatCard } from "~components/popup/StatCard"

declare const chrome: any

const CLICK_COUNT_KEY = "hapticosClickCount"

function IndexPopup() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    chrome.storage.local.get([CLICK_COUNT_KEY], (result) => {
      setCount(
        typeof result[CLICK_COUNT_KEY] === "number"
          ? result[CLICK_COUNT_KEY]
          : 0
      )
    })

    const handleStorageChange: Parameters<
      typeof chrome.storage.onChanged.addListener
    >[0] = (changes, areaName) => {
      if (areaName !== "local" || !changes[CLICK_COUNT_KEY]) {
        return
      }

      setCount(changes[CLICK_COUNT_KEY].newValue ?? 0)
    }

    chrome.storage.onChanged.addListener(handleStorageChange)

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange)
    }
  }, [])

  const resetCount = () => {
    chrome.storage.local.set({
      [CLICK_COUNT_KEY]: 0
    })
  }

  return (
    <main className="w-80 bg-white text-stone-950">
      <section className="overflow-hidden border border-stone-200 bg-stone-50 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <PopupHeader />

        {count > 0 ? (
          <div className="border-t border-stone-200 bg-stone-100/80 px-4 py-4 text-center font-notch">
            <h2 className="mx-auto max-w-[250px] text-xl font-semibold leading-[1.15] tracking-wider text-stone-950">
              Haptics are active on this page.
            </h2>
            <p className="mx-auto mt-3 max-w-[290px] text-xs leading-4 tracking-wider text-stone-500">
              Every supported click is being counted and translated into tactile
              feedback as you interact.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Number of Haptics Triggered
              </p>
              <button
                aria-label="Reset haptics count"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-500 transition hover:border-stone-400 hover:text-stone-700"
                onClick={resetCount}
                type="button">
                <ResetIcon />
              </button>
            </div>
            <div className="mt-1">
              <StatCard label="In total" value={count} />
            </div>
          </div>
        ) : (
          <div className="px-6 pb-5 pt-2 text-center font-notch">
            <h2 className="mx-auto max-w-[250px] text-xl font-semibold leading-[1.15] tracking-wider text-stone-950">
              There&apos;s nothing to feel on this page.
            </h2>
            <p className="mx-auto mt-3 max-w-[290px] text-xs leading-4 tracking-wider text-stone-500">
              Hapticos is idle right now. Visit a supported interaction or
              trigger a test event to preview tactile feedback.
            </p>

            <div className="relative mx-auto mt-6 flex h-36 w-36 items-center justify-center">
              <div className="absolute inset-3 rounded-[42%] bg-sky-100 blur-sm" />
              <div className="absolute left-4 top-8 h-14 w-16 rounded-full bg-rose-100/80 blur-md" />
              <div className="absolute bottom-5 right-4 h-16 w-20 rounded-full bg-cyan-100/90 blur-md" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-6 border-white bg-[radial-gradient(circle_at_top,_#fef3c7,_#fde68a_55%,_#f59e0b)] shadow-[0_14px_24px_rgba(245,158,11,0.16)]">
                <div className="absolute inset-2 rounded-full border border-amber-200/80" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-inner">
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                </div>
              </div>

              <div className="absolute right-3 top-1 rotate-6 text-sm font-bold tracking-[0.2em] text-stone-700">
                zzz
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default IndexPopup
