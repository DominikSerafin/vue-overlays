
export default function cloneWithoutReactivity(obj) {
  return JSON.parse(JSON.stringify(obj));
}
