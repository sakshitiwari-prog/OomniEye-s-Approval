import type { ComponentType } from "react"
import type z from "zod"
import type { ApprovalSchema } from "./schema/approval"

export type Action = {
  id: string
  label: string
  Illustration: ComponentType
}
export type ApprovalWidgetProps = {
  itemCount: number
  onClose: () => void
  onAction?: (id: string) => void
  onReplayGreeting?: () => void
}
export type Approval = z.infer<typeof ApprovalSchema>;