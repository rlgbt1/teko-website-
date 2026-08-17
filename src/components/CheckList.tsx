export function CheckList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              dark ? 'bg-white/10 text-white' : 'bg-red-primary/10 text-red-primary'
            }`}
          >
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path
                d="M1 4.5L4 7.5L10 1.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={`text-[13px] leading-snug sm:text-sm ${dark ? 'text-white/75' : 'text-charcoal/75'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
