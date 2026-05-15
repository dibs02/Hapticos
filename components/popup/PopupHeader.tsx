import { Logo } from "../../components/icons/Logo"

export function PopupHeader() {
  return (
    <div className="flex items-center gap-3 px-4 py-4">
      <Logo />
      <h1 className="text-xl font-semibold text-stone-950 font-notch">
        Hapticos
      </h1>
    </div>
  )
}
