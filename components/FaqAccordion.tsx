"use client";

import { useState } from "react";

export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  category: string;
  items: Faq[];
}

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="text-xl font-bold text-slate-900">{group.category}</h2>
          <div className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {group.items.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
      >
        <span className="text-sm font-semibold text-slate-900">{item.q}</span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open ? (
        <div className="px-5 pb-5 text-sm leading-6 text-slate-600">
          {item.a}
        </div>
      ) : null}
    </div>
  );
}
