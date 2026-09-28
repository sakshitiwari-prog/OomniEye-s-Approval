import { useState, type ComponentType } from 'react'
import {
  CloseIcon,
  CollapseIcon,
  ExpandIcon,
  ExternalIcon,
  HomeIcon,
  InfoIcon,
} from './icons'
import type { ApprovalWidgetProps,  } from '../utils/types'
import { CONSTANT } from '../utils/constant'

export function ApprovalsWidget({ itemCount, onClose, onAction, onReplayGreeting }: ApprovalWidgetProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      aria-label="Approvals assistant"
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-200 ${
        expanded ? 'h-[80vh] w-[560px]' : 'h-[420px] w-[300px]'
      } max-w-[calc(100vw-2rem)]`}
    >
      {/* Header */}
      <header className="flex items-center gap-2 bg-brand-900 px-3 py-2.5 text-white">
        <div className="grid size-7 place-items-center rounded-lg bg-accent-500 text-sm">🙂</div>
        <h2 className="flex-1 text-sm font-semibold">Approvals</h2>
        <button type="button" aria-label="Info" className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white">
          <InfoIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label={expanded ? 'Collapse' : 'Expand'}
          onClick={() => setExpanded((e) => !e)}
          className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white"
        >
          {expanded ? <CollapseIcon className="size-4" /> : <ExpandIcon className="size-4" />}
        </button>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white"
        >
          <CloseIcon className="size-4" />
        </button>
      </header>

      {/* Breadcrumb bar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 text-xs">
        <span className="flex items-center gap-1.5 text-slate-600">
          <HomeIcon className="size-3.5" />
          Approvals
        </span>
        <button
          type="button"
          onClick={onReplayGreeting}
          className="font-medium text-accent-500 hover:underline"
        >
          Replay Greeting
        </button>
      </div>

      {/* Action grid */}
      <div className="grid flex-1 grid-cols-2 gap-2.5 overflow-auto p-3">
        {CONSTANT.ACTIONS.map(({ id, label, Illustration }) => (
          <button
            key={id}
            type="button"
            onClick={() => onAction?.(id)}
            className="group flex flex-col items-center justify-end gap-2 rounded-xl border border-slate-200 bg-white p-2 pb-3 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            <div className="w-full flex-1 min-h-0">
              <Illustration />
            </div>
            <span className="text-xs font-medium text-slate-700 group-hover:text-brand-600">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-slate-100 px-3 py-2 text-[11px] text-slate-500">
        <span>{itemCount} folders / items</span>
        <a href="#" className="flex items-center gap-1 hover:text-brand-600">
          HMS Panel
          <ExternalIcon className="size-3" />
        </a>
      </footer>
    </section>
  )
}
