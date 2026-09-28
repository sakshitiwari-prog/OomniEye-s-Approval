import { z } from "zod";

export const ApprovalSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(["Folder", "Video", "PDF", "Image"]),
  submittedBy: z.string(),
  status: z.literal("Pending Review"),
  date: z.string(),
  path: z.string(),
});
export const ApprovalListSchema = z.array(ApprovalSchema);