import { formatDate } from '../utils/helper'
import type { Approval } from '../utils/types'

export function ApprovalsTable({ approvals }: { approvals: Approval[] }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
        Pending Approval Requests
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{approvals.length} items</span>
      </h2>
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase text-slate-400">
          <tr>
            <th className="py-2">Name</th><th>Type</th><th>Submitted by</th><th>Date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((a) => (
            <tr key={a.id} className="border-t border-slate-100">
              <td className="py-3">
                <div className="font-medium text-slate-800">{a.title}</div>
                <div className="text-xs text-slate-500">{a.path}</div>
              </td>
              <td>{a.type}</td>
              <td>{a.submittedBy}</td>
              <td>{formatDate(a.date)}</td>
              <td>
                <span className="rounded bg-orange-50 px-2 py-0.5 text-xs text-orange-600">{a.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}