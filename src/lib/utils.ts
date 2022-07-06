export function unwrap(obj: any) {
  if (!isObject(obj)) {
    return obj;
  }
  const key = Object.keys(obj)[0];
  const value = obj[key];
  return { key, value };
}

export function isObject(o: any) {
  if (typeof o !== 'object') return false;
  if (Array.isArray(o)) return false;
  if (o === null) return false;
  return true;
}