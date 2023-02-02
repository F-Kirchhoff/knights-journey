import { getRandomPosition, SQUARES } from "../utils";
import createWithLocalStorage from "./createWithLocalStorage";

const useStore = createWithLocalStorage((set, get) => {
  return {
    moveHistory: ["a1"],
    moveKnight: (nextSquareID) =>
      set((state) => {
        return {
          moveHistory: [nextSquareID, ...state.moveHistory],
        };
      }),
    resetMoves: () =>
      set((_state) => {
        return {
          moveHistory: [getRandomPosition()],
        };
      }),
    getCurrentSquare: () => {
      const currentID = get().moveHistory[0];
      return SQUARES.find((square) => square.id === currentID);
    },
  };
}, "move-history");

export default useStore;
