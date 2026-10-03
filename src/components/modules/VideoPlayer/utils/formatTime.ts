const pad = (value: number) => value.toString().padStart(2, "0");

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";

  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(secs)}`
    : `${pad(minutes)}:${pad(secs)}`;
}
