export function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00"); // avoids timezone shifting the day
  if (Number.isNaN(date.getTime())) return iso; // fallback if the date is bad
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}