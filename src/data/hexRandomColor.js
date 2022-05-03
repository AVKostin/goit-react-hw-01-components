export default function randomColor() {
  const colors = 'hsla(' + Math.random() * 360 + ', 100%, 50%, 65%)';
  return colors;
}
