// Lives in JavaScript memory only: a full page refresh clears it,
// client-side navigation between pages keeps it.
const played = new Set<string>();

export function hasPlayed(key: string): boolean {
  return played.has(key);
}

export function markPlayed(key: string): void {
  played.add(key);
}