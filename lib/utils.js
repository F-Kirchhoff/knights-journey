export const SQUARES = new Array(8 * 8).fill(null).map((_, index) => {
  const x = index % 8;
  const y = Math.floor(index / 8);
  return {
    id: String.fromCharCode(97 + x) + String(y + 1),
    color: (x + y) % 2 === 0 ? "black" : "white",
    index,
    x,
    y,
  };
});
