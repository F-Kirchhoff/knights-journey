export const SQUARES = Array.from({ length: 8 * 8 }, (_, index) => {
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

export function checkIfLegalMove(currentSquare, nextSquare) {
  const deltaX = Math.abs(nextSquare.x - currentSquare.x);
  const deltaY = Math.abs(nextSquare.y - currentSquare.y);
  return deltaX <= 2 && deltaY <= 2 && deltaX + deltaY === 3;
}

export function getRandomPosition() {
  return SQUARES[Math.floor(Math.random() * 64)].id;
}
