export function Logo() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 shadow-[0_8px_18px_rgba(251,113,133,0.35)] ring-1 ring-rose-300/40">
      <div className="absolute inset-[3px] rounded-[10px] border border-white/25" />
      <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/20 blur-md" />
      <span className="relative text-xs font-black uppercase text-white">
        HP
      </span>
    </div>
  )
}
