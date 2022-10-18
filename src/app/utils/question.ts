export function serializeQuestion(q: string) {
  q = q.replace(/&quot;/g, '"');
  q = q.replace(/&#039;/g, "'");
  return q;
}
