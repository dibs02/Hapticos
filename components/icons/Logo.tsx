import logoIcon from "~/assets/icon.png"

export function Logo() {
  return (
    <img
      src={logoIcon}
      alt="Hapticos logo"
      className="h-8 w-8 rounded-xl object-cover"
    />
  )
}
