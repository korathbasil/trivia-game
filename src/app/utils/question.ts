export function serializeQuestion(q: string) {
  q = q.replace("&quot;", '"');
  q = q.replace("&#039;", "'");
  return q;
}
