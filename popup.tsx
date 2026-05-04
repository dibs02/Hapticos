import "./style.css"

import { PopupHeader } from "~components/popup/PopupHeader"
import { StatCard } from "~components/popup/StatCard"

function IndexPopup() {
  return (
    <main className="w-[380px] bg-white text-stone-950">
      <section className="overflow-hidden border border-stone-200 bg-stone-50 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <PopupHeader />

        <div className="px-6 pb-5 pt-2 text-center font-notch">
          <h2 className="mx-auto max-w-[280px] text-2xl font-semibold leading-[1.15] tracking-wider text-stone-950">
            There&apos;s nothing to feel on this page.
          </h2>
          <p className="mx-auto mt-3 max-w-[290px] text-sm leading-6 tracking-wider text-stone-500">
            Hapticos is idle right now. Visit a supported interaction or trigger
            a test event to preview tactile feedback.
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

        <div className="border-t border-stone-200 bg-stone-100/80 px-4 py-4 font-notch">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Number of Haptics Triggered
          </p>
          <div className="mt-3">
            <StatCard label="In total" value="12,024" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPopup
