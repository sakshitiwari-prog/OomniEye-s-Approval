import { useEffect, useState } from 'react'
import { ApprovalsWidget } from './components/ApprovalsWidget'
import { ApprovalsTable } from './components/ApprovalsTable'
import { ChatIcon, CloseIcon } from './components/icons'
import type { Approval } from './utils/types'

function App() {
  const [open, setOpen] = useState(true)
  const [approvals, setApprovals] = useState<Approval[]>([])

  // load the approvals from the server once
  useEffect(() => {
    fetch('/api/approvals')
      .then((r) => r.json())
      .then(setApprovals)
      .catch(() => setApprovals([]))
  }, [])

  return (
    <main className="min-h-svh p-6">
      {/* left side: the table (leave space on the right for the panel) */}
      <div className="max-w-4xl">
        <ApprovalsTable approvals={approvals} />
      </div>

      {/* bottom-right: the assistant panel */}
      <div className="fixed right-4 bottom-4 flex flex-col items-end gap-3">
        {open && (
          <ApprovalsWidget
            itemCount={approvals.length}
            onClose={() => setOpen(false)}
            onAction={(id) => console.log('action:', id)}
            onReplayGreeting={() => console.log('replay greeting')}
          />
        )}
        <button
          type="button"
          aria-label={open ? 'Close assistant' : 'Open assistant'}
          onClick={() => setOpen((o) => !o)}
          className="grid size-11 place-items-center rounded-full bg-brand-900 text-white shadow-lg transition hover:bg-brand-700"
        >
          {open ? <CloseIcon className="size-5" /> : <ChatIcon className="size-5" />}
        </button>
      </div>
    </main>
  )
}

export default App