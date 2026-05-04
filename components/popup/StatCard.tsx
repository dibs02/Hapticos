type StatCardProps = {
  label: string
  value: string
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-stone-300 bg-white px-4 py-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <p className="text-sm text-stone-600">{label}</p>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-stone-950">
        {value}
      </p>
    </div>
  )
}
