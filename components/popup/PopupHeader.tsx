import { Logo } from "~components/icons/Logo"

import settingsIcon from "../icons/images/settings.png"

export function PopupHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-xl font-semibold text-stone-950 font-notch">
          Hapticos
        </h1>
      </div>

      <button
        aria-label="Open settings"
        className="rounded-lg p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
        type="button">
        <img src={settingsIcon} alt="Settings" className="h-5 w-5" />
      </button>
    </div>
  )
}
