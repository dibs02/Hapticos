import "./style.css"

import { PopupHeader } from "~components/popup/PopupHeader"
import { StatCard } from "~components/popup/StatCard"

function IndexPopup() {
  return (
    <main className="w-[380px] bg-white text-stone-950">
      <section className="overflow-hidden border border-stone-200 bg-stone-50 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <PopupHeader />

        <div className="px-6 pb-8 pt-2 text-center font-notch">
          <h2 className="mx-auto max-w-[280px] text-2xl font-semibold leading-[1.15] tracking-wider text-stone-950">
            There&apos;s nothing to feel on this page.
          </h2>
          <p className="mx-auto mt-3 max-w-[290px] text-sm leading-6 tracking-wider text-stone-500">
            Hapticos is idle right now. Visit a supported interaction or trigger
            a test event to preview tactile feedback.
          </p>

          <div className="relative mx-auto mt-8 flex h-52 w-52 items-center justify-center">
            <div className="absolute inset-4 rounded-[42%] bg-sky-100 blur-sm" />
            <div className="absolute left-5 top-12 h-20 w-24 rounded-full bg-rose-100/80 blur-md" />
            <div className="absolute bottom-7 right-6 h-24 w-28 rounded-full bg-cyan-100/90 blur-md" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-8 border-white bg-[radial-gradient(circle_at_top,_#fef3c7,_#fde68a_55%,_#f59e0b)] shadow-[0_18px_30px_rgba(245,158,11,0.18)]">
              <div className="absolute inset-3 rounded-full border border-amber-200/80" />
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-inner">
                <div className="h-3 w-3 rounded-full bg-amber-500" />
              </div>
            </div>

            <div className="absolute right-4 top-2 rotate-6 text-lg font-bold tracking-[0.2em] text-stone-700">
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
